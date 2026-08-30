import { getToolBySlug, TOOLS } from '@/data/registry';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

import { PDFToolTemplate } from '@/components/templates/PDFToolTemplate';
import { ImageToolTemplate } from '@/components/templates/ImageToolTemplate';
import { CalculatorTemplate } from '@/components/templates/CalculatorTemplate';
import { ConverterTemplate } from '@/components/templates/ConverterTemplate';
import { TextToolTemplate } from '@/components/templates/TextToolTemplate';
import { DeveloperToolTemplate } from '@/components/templates/DeveloperToolTemplate';
import { DateTimeToolTemplate } from '@/components/templates/DateTimeToolTemplate';
import { FinanceToolTemplate } from '@/components/templates/FinanceToolTemplate';

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
      <div style={{ marginBottom: '48px' }}>
        {tool.template === 'PDFToolTemplate' && <PDFToolTemplate tool={tool} />}
        {tool.template === 'ImageToolTemplate' && <ImageToolTemplate tool={tool} />}
        {tool.template === 'CalculatorTemplate' && <CalculatorTemplate tool={tool} />}
        {tool.template === 'ConverterTemplate' && <ConverterTemplate tool={tool} />}
        {tool.template === 'TextToolTemplate' && <TextToolTemplate tool={tool} />}
        {tool.template === 'DeveloperToolTemplate' && <DeveloperToolTemplate tool={tool} />}
        {tool.template === 'DateTimeToolTemplate' && <DateTimeToolTemplate tool={tool} />}
        {tool.template === 'FinanceToolTemplate' && <FinanceToolTemplate tool={tool} />}
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
