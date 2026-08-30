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
    <div ref={searchRef} style={{ position: 'relative' }}>
      <input 
        type="search" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => { if (results.length > 0) setIsOpen(true); }}
        placeholder="Search tools..." 
        className="input-field" 
        style={{ padding: '8px 16px', height: '36px', borderRadius: '18px', width: '250px' }} 
      />
      {isOpen && results.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          marginTop: '8px',
          right: 0,
          width: '320px',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--outline)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          zIndex: 1000,
          overflow: 'hidden'
        }}>
          {results.map(tool => (
            <Link 
              key={tool.id} 
              href={`/tools/${tool.slug}`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                color: 'var(--on-background)',
                borderBottom: '1px solid var(--outline)',
                textDecoration: 'none'
              }}
            >
              <div style={{ fontWeight: 500, fontSize: '14px' }}>{tool.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--on-surface)' }}>{tool.category}</div>
            </Link>
          ))}
          <Link 
            href={`/tools?q=${encodeURIComponent(query)}`} 
            onClick={() => setIsOpen(false)}
            style={{ display: 'block', padding: '12px 16px', textAlign: 'center', fontSize: '14px', color: 'var(--primary)', fontWeight: 500 }}
          >
            See all results
          </Link>
        </div>
      )}
    </div>
  );
}
