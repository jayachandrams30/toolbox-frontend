import { TOOLS, ToolCategory, getToolsByCategory } from '@/data/registry';
import Link from 'next/link';

export default function CategoriesIndexPage() {
  const categories: ToolCategory[] = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];

  return (
    <div className="container" style={{ padding: '48px 24px' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Categories</h1>
        <p style={{ fontSize: '18px', color: 'var(--on-surface)' }}>Browse tools by category.</p>
      </div>

      <div className="grid grid-cols-3">
        {categories.map(cat => {
            const count = getToolsByCategory(cat).length;
            if (count === 0) return null;
            return (
                <Link key={cat} href={`/categories/${cat.toLowerCase()}`} className="card" style={{ display: 'block' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px' }}>{cat}</h3>
                <p style={{ fontSize: '14px', color: 'var(--on-surface)' }}>{count} tools</p>
                </Link>
            )
        })}
      </div>
    </div>
  );
}
