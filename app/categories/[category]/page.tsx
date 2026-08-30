import { TOOLS, ToolCategory, getToolsByCategory } from '@/data/registry';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories: ToolCategory[] = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];
  return categories.map((cat) => ({
    category: cat.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${category.toUpperCase()} Tools - ToolBox`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  const mappedCategory = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'].find(
    c => c.toLowerCase() === category.toLowerCase()
  ) as ToolCategory | undefined;

  if (!mappedCategory) {
    notFound();
  }

  const categoryTools = getToolsByCategory(mappedCategory);

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--on-surface)', marginBottom: '16px' }}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/categories">Categories</Link>
          <span>/</span>
          <span style={{ color: 'var(--on-background)' }}>{mappedCategory}</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>{mappedCategory} Tools</h1>
        <p style={{ fontSize: '16px', color: 'var(--on-surface)' }}>Explore {categoryTools.length} {mappedCategory} tools.</p>
      </div>

      <div className="grid grid-cols-3">
        {categoryTools.map(tool => (
          <Link key={tool.id} href={`/tools/${tool.slug}`} className="card" style={{ display: 'block' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{tool.name}</h3>
            <p style={{ fontSize: '14px', color: 'var(--on-surface)' }}>{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
