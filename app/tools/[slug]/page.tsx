import { getToolBySlug, TOOLS } from '@/data/registry';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found - ToolBox'
    }
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--on-surface)', marginBottom: '16px' }}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/tools">Tools</Link>
          <span>/</span>
          <Link href={`/categories/${tool.category.toLowerCase()}`}>{tool.category}</Link>
          <span>/</span>
          <span style={{ color: 'var(--on-background)' }}>{tool.name}</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>{tool.name}</h1>
        <p style={{ fontSize: '16px', color: 'var(--on-surface)' }}>{tool.description}</p>
      </div>

      {/* Tool Template Area */}
      <div className="card" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface)', marginBottom: '48px' }}>
        {tool.executionType === 'client' ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px' }}>Client-side logic for <strong>{tool.name}</strong> will be implemented here.</p>
            <button className="btn btn-primary">Simulate Action</button>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px' }}>Backend logic for <strong>{tool.name}</strong> will run here.</p>
            <div style={{ border: '2px dashed var(--outline)', padding: '48px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
              Drop files here
            </div>
            <button className="btn btn-primary">Upload & Process</button>
          </div>
        )}
      </div>

      {/* Related Tools */}
      {tool.relatedTools.length > 0 && (
        <div style={{ marginTop: '64px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '24px' }}>Related Tools</h2>
          <div className="grid grid-cols-3">
            {tool.relatedTools.map(relatedId => {
              const related = TOOLS.find(t => t.id === relatedId);
              if (!related) return null;
              return (
                <Link key={related.id} href={`/tools/${related.slug}`} className="card" style={{ display: 'block' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{related.name}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--on-surface)' }}>{related.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
