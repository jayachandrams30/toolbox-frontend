import { CATEGORIES, getToolsByCategory } from '@/data/registry';
import Link from 'next/link';

export default function CategoriesIndexPage() {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
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

  const getCategoryDescription = (cat: string) => {
    switch (cat) {
      case 'PDF': return 'Merge, split, compress, and convert your PDF documents securely.';
      case 'Images': return 'Crop, resize, convert, and optimize images for web and print.';
      case 'Calculators': return 'Financial, mathematical, and everyday calculators built for precision.';
      case 'Converters': return 'Transform units across length, weight, currency, data, and time.';
      case 'Text': return 'Count words, format cases, clean whitespace, and analyze text content.';
      case 'Developer': return 'JSON formatters, encoders, hashes, minifiers, and regex utilities.';
      case 'Date & Time': return 'Date differences, business day counters, timezones, and timestamps.';
      case 'Finance': return 'SIP, loan repayments, GST, investments, and profit margins.';
      default: return 'Essential everyday utilities.';
    }
  };

  return (
    <div className="w-full flex-grow">
      {/* Hero Header */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-container-max mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-label-md text-[13px] text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-on-surface font-medium">Categories</li>
            </ol>
          </nav>
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            Tool Categories
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl">
            Browse our organized catalog of utilities across 8 specialized functional domains.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {CATEGORIES.map(category => {
            const count = getToolsByCategory(category).length;
            const slug = category.toLowerCase().replace(/[\s&]+/g, '-');
            return (
              <Link 
                key={category} 
                href={`/categories/${slug}`}
                className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-start hover:border-primary hover:bg-surface-container-low hover:-translate-y-1 transition-all duration-300 shadow-sm h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary group-hover:bg-primary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[30px]">
                    {getCategoryIcon(category)}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[22px] text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category}
                </h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-6 flex-grow leading-relaxed">
                  {getCategoryDescription(category)}
                </p>
                <div className="w-full pt-4 border-t border-outline-variant/40 flex justify-between items-center text-[13px] font-label-md text-secondary group-hover:text-primary transition-colors">
                  <span>{count} Tools available</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
