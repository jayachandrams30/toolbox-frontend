import { TOOLS, ToolCategory, getToolsByCategory } from '@/data/registry';
import Link from 'next/link';

export default function Home() {
  const categories: ToolCategory[] = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Design with AI.<br/>Build with ToolBox.
        </h1>
        <p style={{ fontSize: '20px', color: 'var(--on-surface)', maxWidth: '600px', margin: '0 auto', marginBottom: '32px' }}>
          Your single source of truth for 500+ editorial utilities and productivity tools.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/tools" className="btn btn-primary">Browse All Tools</Link>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {categories.map(category => {
          const categoryTools = getToolsByCategory(category);
          if (categoryTools.length === 0) return null;
          
          return (
            <section key={category}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 500 }}>{category} Tools</h2>
                <Link href={`/categories/${category.toLowerCase()}`} style={{ fontSize: '14px', fontWeight: 500 }}>View all →</Link>
              </div>
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
  );
}
