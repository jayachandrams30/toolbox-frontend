"use client";

import { useState, useRef, useEffect } from 'react';
import { ToolMetadata } from '@/data/registry';
import { processFileApi, downloadBlob } from '@/utils/api';

export function ImageToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [base64Output, setBase64Output] = useState<string>('');
  const [base64Input, setBase64Input] = useState<string>('');
  const [pickedColor, setPickedColor] = useState<string>('#ffffff');

  // Controls
  const [width, setWidth] = useState<number>(800);
  const [height, setHeight] = useState<number>(600);
  const [quality, setQuality] = useState<number>(80);
  const [targetFormat, setTargetFormat] = useState<string>('png');
  const [rotateDeg, setRotateDeg] = useState<number>(90);
  const [watermarkText, setWatermarkText] = useState<string>('ToolBox');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setError(null);
      setResultImage(null);

      const reader = new FileReader();
      reader.onload = (ev) => {
        const url = ev.target?.result as string;
        setImagePreview(url);
        if (tool.slug.includes('base64')) {
          setBase64Output(url);
        }

        // Measure natural dimensions
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = url;
      };
      reader.readAsDataURL(selected);
    }
  };

  // Client-side Canvas Image processing
  const handleClientProcess = () => {
    if (!imagePreview) return;
    setLoading(true);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const slug = tool.slug;

      if (slug.includes('resizer')) {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
      } else if (slug.includes('rotator') || slug.includes('rotate')) {
        if (rotateDeg === 90 || rotateDeg === 270) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotateDeg * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
      } else if (slug.includes('flipper')) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0);
      } else if (slug.includes('blur')) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = 'blur(10px)';
        ctx.drawImage(img, 0, 0);
      } else if (slug.includes('watermark')) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.font = 'bold 36px sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.textAlign = 'right';
        ctx.fillText(watermarkText, canvas.width - 30, canvas.height - 30);
      } else {
        // Format converter (PNG, JPG, WEBP, etc.)
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      }

      let mime = 'image/png';
      if (slug.includes('jpg') || slug.includes('jpeg') || targetFormat === 'jpeg') mime = 'image/jpeg';
      if (slug.includes('webp') || targetFormat === 'webp') mime = 'image/webp';

      const dataUrl = canvas.toDataURL(mime, quality / 100);
      setResultImage(dataUrl);
      setLoading(false);
    };
    img.src = imagePreview;
  };

  // Color picker click handler
  const handleCanvasClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!tool.slug.includes('color-picker')) return;
    const imgElement = e.currentTarget;
    const canvas = document.createElement('canvas');
    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(imgElement, 0, 0);

    const rect = imgElement.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * imgElement.naturalWidth);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * imgElement.naturalHeight);

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
    setPickedColor(hex);
  };

  const handleDownload = () => {
    if (!resultImage) return;
    const a = document.createElement('a');
    a.href = resultImage;
    a.download = `processed_${file?.name || 'image.png'}`;
    a.click();
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        accept="image/*" 
        className="hidden" 
      />

      {tool.slug === 'base64-to-image' ? (
        <div className="flex flex-col gap-6">
          <label className="font-label-md text-[14px]">Paste Base64 Data URI</label>
          <textarea 
            value={base64Input}
            onChange={(e) => setBase64Input(e.target.value)}
            rows={5}
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 font-mono text-[13px] resize-none"
          />
          {base64Input.startsWith('data:image') && (
            <div className="text-center p-6 bg-surface-container-low rounded-xl border border-outline-variant">
              <img src={base64Input} alt="Decoded" className="max-h-64 mx-auto rounded-lg shadow-sm" />
              <a href={base64Input} download="decoded_image.png" className="mt-4 inline-block bg-primary-container text-white px-6 py-2 rounded-lg font-label-md text-[14px]">
                Download Decoded Image
              </a>
            </div>
          )}
        </div>
      ) : !imagePreview ? (
        /* Empty Upload Zone */
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-outline-variant rounded-xl p-12 md:p-16 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer text-center group"
        >
          <div className="w-16 h-16 rounded-full bg-surface-bright flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-outline-variant">
            <span className="material-symbols-outlined text-primary text-[32px]">image</span>
          </div>
          <h3 className="font-headline-sm text-[24px] text-on-surface mb-2">Drop your image here</h3>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-sm mb-6">
            Supports JPG, PNG, WebP, GIF, BMP, and SVG formats.
          </p>
          <button 
            type="button" 
            className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Choose Image</span>
            <span className="material-symbols-outlined text-[18px]">upload</span>
          </button>
        </div>
      ) : (
        /* Uploaded & Interactive Controls */
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Preview / Interactive canvas */}
            <div className="flex flex-col gap-4">
              <span className="font-label-md text-[14px] text-on-surface font-semibold">Image Preview</span>
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex items-center justify-center min-h-[260px] overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  onClick={handleCanvasClick}
                  className={`max-h-72 object-contain rounded-lg ${tool.slug.includes('color-picker') ? 'cursor-crosshair' : ''}`} 
                />
              </div>
              <div className="flex justify-between items-center text-[13px] text-on-surface-variant">
                <span>{file?.name}</span>
                <span>{width} × {height} px</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 bg-surface-container-low p-6 rounded-xl border border-outline-variant">
              <h4 className="font-headline-sm text-[18px] text-on-surface">Adjustment Options</h4>

              {tool.slug.includes('resizer') && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[13px] font-label-md mb-1">Width (px)</label>
                    <input 
                      type="number" 
                      value={width} 
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-label-md mb-1">Height (px)</label>
                    <input 
                      type="number" 
                      value={height} 
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 text-[14px]"
                    />
                  </div>
                </div>
              )}

              {tool.slug.includes('rotator') && (
                <div>
                  <label className="block text-[13px] font-label-md mb-1">Rotation</label>
                  <select 
                    value={rotateDeg} 
                    onChange={(e) => setRotateDeg(Number(e.target.value))}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 text-[14px]"
                  >
                    <option value={90}>90° Clockwise</option>
                    <option value={180}>180° Half Turn</option>
                    <option value={270}>270° Counter-Clockwise</option>
                  </select>
                </div>
              )}

              {tool.slug.includes('watermark') && (
                <div>
                  <label className="block text-[13px] font-label-md mb-1">Watermark Text</label>
                  <input 
                    type="text" 
                    value={watermarkText} 
                    onChange={(e) => setWatermarkText(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 text-[14px]"
                  />
                </div>
              )}

              {tool.slug.includes('color-picker') && (
                <div className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant">
                  <div className="w-10 h-10 rounded-lg border border-outline" style={{ backgroundColor: pickedColor }} />
                  <div>
                    <div className="font-label-sm text-[12px] text-on-surface-variant">Selected Color (HEX)</div>
                    <div className="font-mono text-[16px] font-bold text-on-surface">{pickedColor}</div>
                  </div>
                </div>
              )}

              {tool.slug.includes('base64') && (
                <div>
                  <label className="block text-[13px] font-label-md mb-1">Base64 Output</label>
                  <textarea 
                    readOnly 
                    value={base64Output} 
                    rows={4} 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 font-mono text-[12px] resize-none"
                  />
                </div>
              )}

              {/* Quality slider */}
              <div>
                <div className="flex justify-between text-[13px] font-label-md mb-1">
                  <span>Quality</span>
                  <span>{quality}%</span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={100} 
                  value={quality} 
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="custom-range"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  onClick={handleClientProcess}
                  disabled={loading}
                  className="flex-1 bg-primary-container text-white py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                  <span>Process Image</span>
                </button>
                <button 
                  onClick={() => { setFile(null); setImagePreview(null); setResultImage(null); }}
                  className="px-4 py-3 border border-outline-variant rounded-lg text-on-surface font-label-md text-[14px] hover:bg-surface-container"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Processed Output Result */}
          {resultImage && (
            <div className="p-6 bg-surface-container-high rounded-xl border border-outline-variant flex flex-col items-center gap-4 text-center">
              <h4 className="font-headline-sm text-[20px] text-on-surface">Processed Output</h4>
              <img src={resultImage} alt="Result" className="max-h-64 object-contain rounded-lg border border-outline-variant shadow-sm" />
              <button 
                onClick={handleDownload}
                className="bg-primary-container text-white px-8 py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Result Image
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
