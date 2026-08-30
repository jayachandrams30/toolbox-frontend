"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

export function DeveloperToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [input, setInput] = useState<string>('{\n  "title": "ToolBox",\n  "version": 1,\n  "active": true\n}');
  const [copied, setCopied] = useState<boolean>(false);
  const [regexPattern, setRegexPattern] = useState<string>('[A-Z]\\w+');
  const [regexFlags, setRegexFlags] = useState<string>('g');
  const [uuidCount, setUuidCount] = useState<number>(5);
  const [generatedUuids, setGeneratedUuids] = useState<string[]>([]);
  const [colorInput, setColorInput] = useState<string>('#994618');
  const [timestampInput, setTimestampInput] = useState<string>(String(Math.floor(Date.now() / 1000)));

  // Developer tool processing
  const processedOutput = useMemo(() => {
    const slug = tool.slug;

    try {
      if (slug.includes('json-minifier')) {
        const obj = JSON.parse(input);
        return JSON.stringify(obj);
      }
      if (slug.includes('json-formatter') || slug.includes('json-validator')) {
        const obj = JSON.parse(input);
        return JSON.stringify(obj, null, 2);
      }
      if (slug.includes('base64-encoder')) {
        return btoa(unescape(encodeURIComponent(input)));
      }
      if (slug.includes('base64-decoder')) {
        return decodeURIComponent(escape(atob(input)));
      }
      if (slug.includes('url-encoder')) {
        return encodeURIComponent(input);
      }
      if (slug.includes('url-decoder')) {
        return decodeURIComponent(input);
      }
      if (slug.includes('jwt')) {
        const parts = input.trim().split('.');
        if (parts.length < 2) return 'Invalid JWT token format (expected 3 parts separated by dots)';
        const header = JSON.parse(atob(parts[0]));
        const payload = JSON.parse(atob(parts[1]));
        return JSON.stringify({ Header: header, Payload: payload }, null, 2);
      }
      if (slug.includes('html-minifier') || slug.includes('xml') && slug.includes('minifier')) {
        return input.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
      }
      if (slug.includes('css-minifier') || slug.includes('js-minifier') || slug.includes('sql-minifier')) {
        return input.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '').replace(/\s+/g, ' ').trim();
      }
      if (slug.includes('json-to-csv')) {
        const arr = JSON.parse(input);
        if (!Array.isArray(arr) || arr.length === 0) return 'Input must be a non-empty JSON array of objects';
        const headers = Object.keys(arr[0]);
        const rows = arr.map(item => headers.map(h => JSON.stringify(item[h] ?? '')).join(','));
        return [headers.join(','), ...rows].join('\n');
      }
      if (slug.includes('csv-to-json')) {
        const lines = input.trim().split('\n');
        if (lines.length < 2) return '[]';
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
        const result = lines.slice(1).map(line => {
          const vals = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
          const obj: Record<string, string> = {};
          headers.forEach((h, i) => { obj[h] = vals[i] || ''; });
          return obj;
        });
        return JSON.stringify(result, null, 2);
      }
      return input;
    } catch (err: any) {
      return `Error: ${err.message}`;
    }
  }, [tool.slug, input]);

  // Regex evaluation
  const regexMatches = useMemo(() => {
    if (!tool.slug.includes('regex')) return [];
    try {
      const reg = new RegExp(regexPattern, regexFlags);
      const matches = [...input.matchAll(reg)];
      return matches.map(m => m[0]);
    } catch (e: any) {
      return [`Invalid Regex: ${e.message}`];
    }
  }, [tool.slug, regexPattern, regexFlags, input]);

  // UUID generator
  const generateNewUuids = () => {
    const list: string[] = [];
    for (let i = 0; i < uuidCount; i++) {
      list.push(crypto.randomUUID());
    }
    setGeneratedUuids(list);
  };

  const copyToClipboard = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 max-w-5xl mx-auto shadow-sm">
      {tool.slug.includes('uuid') ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <label className="font-label-md text-[14px]">Number of UUIDs:</label>
            <input 
              type="number" 
              min={1} 
              max={50} 
              value={uuidCount} 
              onChange={(e) => setUuidCount(Number(e.target.value))}
              className="w-20 bg-surface-container-low border border-outline-variant rounded-lg p-2 font-body-md text-center"
            />
            <button 
              onClick={generateNewUuids}
              className="bg-primary-container text-white px-6 py-2 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors"
            >
              Generate
            </button>
          </div>
          {generatedUuids.length > 0 && (
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant font-mono text-[14px] space-y-2">
              {generatedUuids.map((id, idx) => (
                <div key={idx} className="flex justify-between items-center bg-surface-container-lowest p-3 rounded border border-outline-variant/60">
                  <span>{id}</span>
                  <button onClick={() => copyToClipboard(id)} className="text-secondary hover:text-primary">
                    <span className="material-symbols-outlined text-[18px]">content_copy</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : tool.slug.includes('regex') ? (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-3">
              <label className="block font-label-md text-[14px] mb-2">Regex Pattern</label>
              <input 
                type="text" 
                value={regexPattern} 
                onChange={(e) => setRegexPattern(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-mono text-[15px]"
              />
            </div>
            <div>
              <label className="block font-label-md text-[14px] mb-2">Flags</label>
              <input 
                type="text" 
                value={regexFlags} 
                onChange={(e) => setRegexFlags(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-mono text-[15px]"
              />
            </div>
          </div>
          <div>
            <label className="block font-label-md text-[14px] mb-2">Test String</label>
            <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-mono text-[14px] resize-none"
            />
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
            <h4 className="font-label-md text-[14px] text-on-surface mb-3">Matched Groups ({regexMatches.length})</h4>
            <div className="flex flex-wrap gap-2">
              {regexMatches.map((m, i) => (
                <span key={i} className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded font-mono text-[13px] border border-outline-variant">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Area */}
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-[14px] text-on-surface">Input</label>
            <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              rows={12}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 font-mono text-[14px] text-on-surface focus:outline-none focus:border-on-surface resize-none leading-relaxed"
            />
          </div>

          {/* Output Area */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="font-label-md text-[14px] text-on-surface">Formatted Output</label>
              <button 
                onClick={() => copyToClipboard(processedOutput)}
                className="text-secondary hover:text-primary font-label-sm text-[13px] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
                {copied ? 'Copied' : 'Copy Output'}
              </button>
            </div>
            <textarea 
              readOnly 
              value={processedOutput}
              rows={12}
              className="w-full bg-surface-container-high/40 border border-outline-variant rounded-xl p-4 font-mono text-[14px] text-on-surface focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </div>
      )}
    </div>
  );
}
