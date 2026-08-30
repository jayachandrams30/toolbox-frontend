import { TOOLS, ToolCategory } from '@/data/registry';
import Link from 'next/link';

export default function AllToolsPage() {
  const categories: ToolCategory[] = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>All Tools</h1>
        <p style={{ fontSize: '18px', color: 'var(--on-surface)' }}>Browse our collection of {TOOLS.length} utilities and tools.</p>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        {/* Sidebar Filters */}
        <aside style={{ width: '250px', flexShrink: 0, position: 'sticky', top: '88px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', color: 'var(--on-surface)' }}>Categories</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {categories.map(cat => (
              <li key={cat}>
                <Link href={`#${cat.toLowerCase()}`} style={{ color: 'var(--on-background)', display: 'block', padding: '8px 12px', borderRadius: 'var(--radius-sm)', transition: 'background-color 0.2s' }} className="category-link">
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Tools Grid */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {categories.map(category => {
            const categoryTools = TOOLS.filter(t => t.category === category);
            if (categoryTools.length === 0) return null;

            return (
              <section key={category} id={category.toLowerCase()} style={{ scrollMarginTop: '88px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '24px', paddingBottom: '8px', borderBottom: '1px solid var(--outline)' }}>{category}</h2>
                <div className="grid grid-cols-3">
                  {categoryTools.map(tool => (
                    <Link key={tool.id} href={`/tools/${tool.slug}`} className="card" style={{ display: 'block' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>{tool.name}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--on-surface)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {tool.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
