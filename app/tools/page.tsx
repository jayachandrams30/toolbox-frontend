"use client";

import { useState, useMemo } from 'react';
import { TOOLS, CATEGORIES, ToolCategory } from '@/data/registry';
import Link from 'next/link';

export default function AllToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'alpha' | 'category'>('alpha');

  const filteredTools = useMemo(() => {
    let list = TOOLS;

    // Filter by Category
    if (selectedCategory !== 'All') {
      list = list.filter(t => t.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.keywords.some(k => k.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'alpha') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return [...list].sort((a, b) => a.category.localeCompare(b.category));
    }
  }, [selectedCategory, searchQuery, sortBy]);

  const getCategoryIcon = (category: ToolCategory) => {
    switch (category) {
      case 'PDF': return 'picture_as_pdf';
      case 'Images': return 'image';
      case 'Calculators': return 'calculate';
      case 'Converters': return 'swap_horiz';
      case 'Text': return 'edit_note';
      case 'Developer': return 'code';
      case 'Date & Time': return 'schedule';
      case 'Finance': return 'account_balance';
      default: return 'build';
    }
  };

  return (
    <div className="w-full flex-grow">
      {/* Hero Header */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-container-max mx-auto">
          <span className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant font-semibold mb-3 block">Directory</span>
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            All Tools
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl">
            Explore our complete collection of {TOOLS.length} calm, focused utility tools designed for everyday productivity.
          </p>
        </div>
      </section>

      {/* Sticky Search & Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md py-4 px-margin-mobile md:px-margin-desktop border-b border-outline-variant">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
              search
            </span>
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, keyword, or function..." 
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-[15px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`shrink-0 px-4 py-2 rounded-lg font-label-md text-[13px] transition-colors border ${
                selectedCategory === 'All'
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container-low'
              }`}
            >
              All ({TOOLS.length})
            </button>
            {CATEGORIES.map(cat => {
              const count = TOOLS.filter(t => t.category === cat).length;
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-lg font-label-md text-[13px] transition-colors border ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:bg-surface-container-low'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Grid Area */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="flex justify-between items-center mb-8 pb-3 border-b border-outline-variant/60">
          <span className="font-label-md text-[14px] text-on-surface-variant">
            Showing <strong>{filteredTools.length}</strong> of {TOOLS.length} tools
          </span>
          <div className="flex items-center gap-2 font-label-sm text-[13px]">
            <span className="text-on-surface-variant">Sort by:</span>
            <button 
              onClick={() => setSortBy('alpha')}
              className={`px-2.5 py-1 rounded ${sortBy === 'alpha' ? 'bg-surface-container-high font-semibold text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Name (A-Z)
            </button>
            <button 
              onClick={() => setSortBy('category')}
              className={`px-2.5 py-1 rounded ${sortBy === 'category' ? 'bg-surface-container-high font-semibold text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Category
            </button>
          </div>
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-xl border border-outline-variant">
            <span className="material-symbols-outlined text-[48px] text-outline mb-3">search_off</span>
            <h3 className="font-headline-sm text-[22px] text-on-surface mb-2">No utilities found</h3>
            <p className="font-body-md text-[15px] text-on-surface-variant max-w-sm mx-auto mb-6">
              We could not find any tools matching &ldquo;{searchQuery}&rdquo;. Try another search term or clear the filter.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
            {filteredTools.map(tool => (
              <Link 
                key={tool.id} 
                href={`/tools/${tool.slug}`}
                className="group flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant p-6 hover:border-primary hover:bg-surface-container-low hover:-translate-y-1 transition-all duration-300 shadow-sm h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-5 text-on-surface group-hover:text-primary group-hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[26px]">
                    {getCategoryIcon(tool.category)}
                  </span>
                </div>
                <div className="font-label-sm text-[12px] text-on-surface-variant font-medium mb-1">
                  {tool.category}
                </div>
                <h3 className="font-headline-sm text-[20px] text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">
                  {tool.description}
                </p>
                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex justify-between items-center text-[13px] font-label-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Open Tool</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
