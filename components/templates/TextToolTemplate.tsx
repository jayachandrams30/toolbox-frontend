"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

export function TextToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [text, setText] = useState<string>(
    'The quick brown fox jumps over the lazy dog. Simplicity is the ultimate sophistication.'
  );
  const [findWord, setFindWord] = useState<string>('');
  const [replaceWord, setReplaceWord] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Real-time statistics
  const stats = useMemo(() => {
    const raw = text.trim();
    if (!raw) return { words: 0, chars: 0, charsNoSpaces: 0, sentences: 0, paragraphs: 0, readTime: '0 min' };

    const words = raw.split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const sentences = (text.match(/[^.!?]+[.!?]+(\s|$)/g) || []).length || (raw.length > 0 ? 1 : 0);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
    const readTime = `${Math.ceil(words / 200)} min`;

    return { words, chars, charsNoSpaces, sentences, paragraphs, readTime };
  }, [text]);

  // Transformations
  const handleCaseChange = (type: 'upper' | 'lower' | 'title' | 'sentence' | 'slug' | 'reverse' | 'dedup' | 'trim') => {
    if (type === 'upper') setText(text.toUpperCase());
    if (type === 'lower') setText(text.toLowerCase());
    if (type === 'title') {
      setText(text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
    }
    if (type === 'sentence') {
      setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()));
    }
    if (type === 'slug') {
      setText(text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''));
    }
    if (type === 'reverse') {
      setText(text.split('').reverse().join(''));
    }
    if (type === 'dedup') {
      const lines = text.split('\n');
      setText(Array.from(new Set(lines)).join('\n'));
    }
    if (type === 'trim') {
      setText(text.replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n\n').trim());
    }
  };

  const handleFindReplace = () => {
    if (!findWord) return;
    setText(text.replaceAll(findWord, replaceWord));
  };

  const generateLorem = (paragraphsCount: number = 3) => {
    const loremSample = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const result = Array(paragraphsCount).fill(loremSample).join('\n\n');
    setText(result);
  };

  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(text);
      setText(JSON.stringify(parsed, null, 2));
    } catch (e: any) {
      alert('Invalid JSON syntax: ' + e.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Editor Main Canvas */}
      <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
        {/* Editor Toolbar */}
        <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-1">
            <button onClick={() => handleCaseChange('upper')} className="px-2.5 py-1 text-[13px] font-label-md bg-surface-container hover:bg-surface-container-high rounded border border-outline-variant/60">UPPER</button>
            <button onClick={() => handleCaseChange('lower')} className="px-2.5 py-1 text-[13px] font-label-md bg-surface-container hover:bg-surface-container-high rounded border border-outline-variant/60">lower</button>
            <button onClick={() => handleCaseChange('title')} className="px-2.5 py-1 text-[13px] font-label-md bg-surface-container hover:bg-surface-container-high rounded border border-outline-variant/60">Title Case</button>
            <button onClick={() => handleCaseChange('trim')} className="px-2.5 py-1 text-[13px] font-label-md bg-surface-container hover:bg-surface-container-high rounded border border-outline-variant/60">Clean Spaces</button>
            <button onClick={() => handleCaseChange('dedup')} className="px-2.5 py-1 text-[13px] font-label-md bg-surface-container hover:bg-surface-container-high rounded border border-outline-variant/60">Deduplicate</button>
            {tool.slug.includes('json') && (
              <button onClick={handleFormatJson} className="px-2.5 py-1 text-[13px] font-label-md bg-primary-container text-white rounded">Beautify JSON</button>
            )}
            {tool.slug.includes('lorem') && (
              <button onClick={() => generateLorem(3)} className="px-2.5 py-1 text-[13px] font-label-md bg-primary-container text-white rounded">Generate Lorem</button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={copyToClipboard} className="text-secondary hover:text-primary transition-colors flex items-center gap-1 font-label-sm text-[13px]">
              <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button onClick={() => setText('')} className="text-secondary hover:text-error transition-colors flex items-center gap-1 font-label-sm text-[13px]">
              <span className="material-symbols-outlined text-[16px]">delete</span> Clear
            </button>
          </div>
        </div>

        {/* Text Area */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type, paste, or format your text here..."
          className="w-full h-[400px] p-6 bg-transparent border-none focus:outline-none focus:ring-0 font-body-md text-[16px] text-on-surface resize-none leading-relaxed"
        />

        {/* Find & Replace Bar */}
        {(tool.slug.includes('find') || tool.slug.includes('replace')) && (
          <div className="p-4 bg-surface-container-low border-t border-outline-variant flex flex-wrap items-center gap-3">
            <input 
              type="text" 
              placeholder="Find..." 
              value={findWord} 
              onChange={(e) => setFindWord(e.target.value)}
              className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-1.5 font-body-md text-[14px]"
            />
            <input 
              type="text" 
              placeholder="Replace with..." 
              value={replaceWord} 
              onChange={(e) => setReplaceWord(e.target.value)}
              className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-1.5 font-body-md text-[14px]"
            />
            <button onClick={handleFindReplace} className="bg-primary-container text-white px-4 py-1.5 rounded font-label-md text-[13px]">
              Replace All
            </button>
          </div>
        )}
      </div>

      {/* Statistics Panel */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 text-center shadow-sm">
          <div className="font-label-md text-[13px] text-on-surface-variant uppercase tracking-wider mb-1">Words</div>
          <div className="font-headline-md text-[36px] text-primary font-bold">{stats.words}</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 text-center">
            <div className="font-label-sm text-[12px] text-on-surface-variant uppercase mb-1">Characters</div>
            <div className="font-headline-sm text-[22px] font-semibold text-on-surface">{stats.chars}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 text-center">
            <div className="font-label-sm text-[12px] text-on-surface-variant uppercase mb-1">No Spaces</div>
            <div className="font-headline-sm text-[22px] font-semibold text-on-surface">{stats.charsNoSpaces}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 text-center">
            <div className="font-label-sm text-[12px] text-on-surface-variant uppercase mb-1">Sentences</div>
            <div className="font-headline-sm text-[22px] font-semibold text-on-surface">{stats.sentences}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-4 text-center">
            <div className="font-label-sm text-[12px] text-on-surface-variant uppercase mb-1">Paragraphs</div>
            <div className="font-headline-sm text-[22px] font-semibold text-on-surface">{stats.paragraphs}</div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl border border-outline-variant p-4 flex items-center justify-between">
          <span className="font-label-md text-[14px] text-on-surface">Estimated Reading Time</span>
          <span className="font-headline-sm text-[18px] text-primary font-semibold">{stats.readTime}</span>
        </div>
      </div>
    </div>
  );
}
