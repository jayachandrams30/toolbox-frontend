"use client";

import { useState, useRef } from 'react';
import { ToolMetadata } from '@/data/registry';
import { processFileApi, downloadBlob } from '@/utils/api';

export function PDFToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successBlob, setSuccessBlob] = useState<{ blob: Blob; filename: string } | null>(null);

  // Tool specific options
  const [pageRange, setPageRange] = useState<string>('1-3');
  const [rotateAngle, setRotateAngle] = useState<number>(90);
  const [watermarkText, setWatermarkText] = useState<string>('CONFIDENTIAL');
  const [password, setPassword] = useState<string>('');
  const [quality, setQuality] = useState<number>(70);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = Array.from(e.target.files);
      if (tool.slug.includes('merge') || tool.slug.includes('jpg-to-pdf') || tool.slug.includes('png-to-pdf')) {
        setFiles(prev => [...prev, ...selected]);
      } else {
        setFiles([selected[0]]);
      }
      setError(null);
      setSuccessBlob(null);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (files.length === 0) {
      setError('Please upload at least one PDF file.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let endpoint = 'pdf/compress';
      const params: Record<string, any> = {};

      if (tool.slug.includes('merge')) {
        endpoint = 'pdf/merge';
      } else if (tool.slug.includes('split')) {
        endpoint = 'pdf/split';
        params.page_ranges = pageRange;
      } else if (tool.slug.includes('rotate')) {
        endpoint = 'pdf/rotate';
        params.angle = rotateAngle;
      } else if (tool.slug.includes('watermark')) {
        endpoint = 'pdf/watermark';
        params.text = watermarkText;
        params.opacity = 0.3;
      } else if (tool.slug.includes('password') || tool.slug.includes('protect')) {
        endpoint = 'pdf/protect';
        params.password = password || '123456';
      } else if (tool.slug.includes('unlock')) {
        endpoint = 'pdf/unlock';
        params.password = password;
      } else if (tool.slug.includes('to-pdf')) {
        endpoint = 'pdf/images-to-pdf';
      } else {
        params.quality = quality;
      }

      const blob = await processFileApi(endpoint, files, params);
      const outName = `${tool.slug}_${files[0]?.name || 'output.pdf'}`;
      setSuccessBlob({ blob, filename: outName });
    } catch (err: any) {
      setError(err.message || 'Failed to process document. Please ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (successBlob) {
      downloadBlob(successBlob.blob, successBlob.filename);
    }
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        multiple={tool.slug.includes('merge') || tool.slug.includes('to-pdf')}
        accept={tool.slug.includes('to-pdf') ? 'image/*' : '.pdf'} 
        className="hidden" 
      />

      {files.length === 0 ? (
        /* Empty Upload State */
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-outline-variant rounded-xl p-12 md:p-16 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer text-center group"
        >
          <div className="w-16 h-16 rounded-full bg-surface-bright flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-[32px]">picture_as_pdf</span>
          </div>
          <h3 className="font-headline-sm text-[24px] text-on-surface mb-2">Drop your PDF here</h3>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-sm mb-6">
            Upload files securely. Files are processed in memory and never retained.
          </p>
          <button 
            type="button" 
            className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Choose PDF File</span>
            <span className="material-symbols-outlined text-[18px]">upload</span>
          </button>
        </div>
      ) : (
        /* Uploaded Files & Configuration State */
        <div className="flex flex-col gap-6">
          {/* File List */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h4 className="font-label-md text-[14px] text-on-surface font-semibold">Selected Files ({files.length})</h4>
              <button 
                onClick={() => fileInputRef.current?.click()} 
                className="font-label-sm text-[13px] text-primary hover:underline"
              >
                + Add More
              </button>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {files.map((file, idx) => (
                <div key={idx} className="flex justify-between items-center bg-surface-container-low p-3 rounded-lg border border-outline-variant/60">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">description</span>
                    <span className="font-body-md text-[14px] truncate max-w-xs">{file.name}</span>
                    <span className="text-[12px] text-on-surface-variant">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <button onClick={() => removeFile(idx)} className="text-secondary hover:text-error">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tool specific controls */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant space-y-4">
            {tool.slug.includes('split') && (
              <div>
                <label className="block font-label-md text-[14px] mb-2">Page Range to Extract (e.g. 1-3, 5, 8-10)</label>
                <input 
                  type="text" 
                  value={pageRange} 
                  onChange={(e) => setPageRange(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>
            )}

            {tool.slug.includes('rotate') && (
              <div>
                <label className="block font-label-md text-[14px] mb-2">Rotation Angle</label>
                <select 
                  value={rotateAngle} 
                  onChange={(e) => setRotateAngle(Number(e.target.value))}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md"
                >
                  <option value={90}>90° Clockwise</option>
                  <option value={180}>180° Flip</option>
                  <option value={270}>270° Counter-Clockwise</option>
                </select>
              </div>
            )}

            {tool.slug.includes('watermark') && (
              <div>
                <label className="block font-label-md text-[14px] mb-2">Watermark Text</label>
                <input 
                  type="text" 
                  value={watermarkText} 
                  onChange={(e) => setWatermarkText(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>
            )}

            {(tool.slug.includes('protect') || tool.slug.includes('password') || tool.slug.includes('unlock')) && (
              <div>
                <label className="block font-label-md text-[14px] mb-2">Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter PDF password..."
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>
            )}

            {tool.slug.includes('compress') && (
              <div>
                <label className="block font-label-md text-[14px] mb-2">Compression Quality</label>
                <select 
                  value={quality} 
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md"
                >
                  <option value={80}>Low Compression (High Quality)</option>
                  <option value={60}>Recommended Compression (Optimal)</option>
                  <option value={40}>Extreme Compression (Smallest Size)</option>
                </select>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-error-container text-on-error-container rounded-lg text-[14px] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              <span>{error}</span>
            </div>
          )}

          {/* Action Button / Success Result */}
          {successBlob ? (
            <div className="p-6 bg-surface-container-high rounded-xl border border-outline-variant text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mx-auto text-primary">
                <span className="material-symbols-outlined text-[28px]">check_circle</span>
              </div>
              <h4 className="font-headline-sm text-[20px] text-on-surface">Your PDF is Ready!</h4>
              <p className="font-body-md text-[14px] text-on-surface-variant">Size: {(successBlob.blob.size / 1024).toFixed(1)} KB</p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={handleDownload}
                  className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Download File
                </button>
                <button 
                  onClick={() => { setFiles([]); setSuccessBlob(null); }}
                  className="border border-outline-variant px-6 py-3 rounded-lg font-label-md text-[14px] text-on-surface hover:bg-surface-container-low"
                >
                  Process Another
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleProcess}
              disabled={loading}
              className="w-full bg-primary-container text-white py-4 rounded-xl font-label-md text-[16px] hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                  <span>Processing Document...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                  <span>Execute {tool.name}</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
