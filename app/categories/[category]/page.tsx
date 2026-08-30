import { CATEGORIES, getToolsByCategory, ToolCategory } from '@/data/registry';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.toLowerCase().replace(/[\s&]+/g, '-'),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const normalized = category.replace(/-/g, ' ');
  const cat = CATEGORIES.find(c => c.toLowerCase().replace(/[\s&]+/g, '-') === category.toLowerCase() || c.toLowerCase() === normalized);

  if (!cat) {
    return { title: 'Category Not Found - ToolBox' };
  }

  return {
    title: `${cat} Tools - Free Online Utilities | ToolBox`,
    description: `Explore our collection of free online ${cat} tools. Simple, fast, and secure.`,
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { category } = await params;
  
  const mappedCategory = CATEGORIES.find(c => 
    c.toLowerCase().replace(/[\s&]+/g, '-') === category.toLowerCase() ||
    c.toLowerCase() === category.toLowerCase().replace(/-/g, ' ')
  ) as ToolCategory | undefined;

  if (!mappedCategory) {
    notFound();
  }

  const categoryTools = getToolsByCategory(mappedCategory);

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

  return (
    <div className="w-full flex-grow">
      {/* Category Hero */}
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-container-max mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 font-label-md text-[13px] text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-primary transition-colors" href="/categories">Categories</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-on-surface font-medium">{mappedCategory}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">{getCategoryIcon(mappedCategory)}</span>
            </div>
            <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface font-serif-title">
              {mappedCategory} Tools
            </h1>
          </div>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl">
            Browse {categoryTools.length} specialized {mappedCategory.toLowerCase()} utilities.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {categoryTools.map(tool => (
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
              <h3 className="font-headline-sm text-[20px] text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">
                {tool.description}
              </p>
              <div className="mt-4 pt-3 border-t border-outline-variant/40 flex justify-between items-center text-[13px] font-label-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Use Tool</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
