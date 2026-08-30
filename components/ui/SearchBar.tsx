"use client";

import { useState, useRef, useEffect } from 'react';
import { searchTools, ToolMetadata } from '@/data/registry';
import Link from 'next/link';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ToolMetadata[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      setResults(searchTools(query).slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative group flex items-center">
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-outline text-[18px]">search</span>
      </div>
      <input 
        type="search" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => { if (results.length > 0) setIsOpen(true); }}
        placeholder="Search..." 
        className="h-[36px] pl-8 pr-4 bg-surface-container-lowest border border-outline-variant rounded-full font-body-md text-[14px] text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors w-[200px]"
      />
      {isOpen && results.length > 0 && (
        <div className="absolute top-full right-0 mt-2 w-[320px] bg-surface border border-outline-variant rounded-xl shadow-lg z-50 overflow-hidden">
          {results.map(tool => (
            <Link 
              key={tool.id} 
              href={`/tools/${tool.slug}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 border-b border-outline-variant/30 hover:bg-surface-container transition-colors"
            >
              <div className="font-label-md text-[14px] text-on-surface">{tool.name}</div>
              <div className="font-body-md text-[12px] text-on-surface-variant">{tool.category}</div>
            </Link>
          ))}
          <Link 
            href={`/tools?q=${encodeURIComponent(query)}`} 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-center font-label-md text-[14px] text-primary hover:bg-surface-container-low transition-colors"
          >
            See all results
          </Link>
        </div>
      )}
    </div>
  );
}
