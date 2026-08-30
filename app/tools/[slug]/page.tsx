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
    <>
      <div className="bg-surface-container-low pt-12 pb-16 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 font-label-sm text-[12px] text-on-surface-variant mb-6">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-primary transition-colors" href={`/categories/${tool.category.toLowerCase()}`}>{tool.category}</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface">{tool.name}</span>
          </div>
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[48px] text-on-surface mb-4">
            {tool.name}
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="px-margin-mobile md:px-margin-desktop py-12">
        {/* Tool Template Area */}
        <div className="max-w-4xl mx-auto mb-section-gap">
          {tool.template === 'PDFToolTemplate' && <PDFToolTemplate tool={tool} />}
          {tool.template === 'ImageToolTemplate' && <ImageToolTemplate tool={tool} />}
          {tool.template === 'CalculatorTemplate' && <CalculatorTemplate tool={tool} />}
          {tool.template === 'ConverterTemplate' && <ConverterTemplate tool={tool} />}
          {tool.template === 'TextToolTemplate' && <TextToolTemplate tool={tool} />}
          {tool.template === 'DeveloperToolTemplate' && <DeveloperToolTemplate tool={tool} />}
          {tool.template === 'DateTimeToolTemplate' && <DateTimeToolTemplate tool={tool} />}
          {tool.template === 'FinanceToolTemplate' && <FinanceToolTemplate tool={tool} />}
        </div>

        {/* Content Grid (How it works & FAQ) */}
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
          <div className="md:col-span-5 md:col-start-2">
            <h2 className="font-headline-sm text-[24px] text-on-surface mb-6">How it works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 font-label-sm text-[12px] text-secondary">1</div>
                <div>
                  <h4 className="font-label-md text-[14px] text-on-surface mb-1">Select</h4>
                  <p className="font-body-md text-[16px] text-on-surface-variant">Choose the files or input the data you want to process.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 font-label-sm text-[12px] text-secondary">2</div>
                <div>
                  <h4 className="font-label-md text-[14px] text-on-surface mb-1">Configure</h4>
                  <p className="font-body-md text-[16px] text-on-surface-variant">Adjust any necessary settings or options for the tool.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 font-label-sm text-[12px] text-secondary">3</div>
                <div>
                  <h4 className="font-label-md text-[14px] text-on-surface mb-1">Execute</h4>
                  <p className="font-body-md text-[16px] text-on-surface-variant">Run the tool and instantly download or copy your results.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <h2 className="font-headline-sm text-[24px] text-on-surface mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-outline-variant pb-4">
                <h4 className="font-label-md text-[14px] text-on-surface mb-2">Is it secure to upload my files?</h4>
                <p className="font-body-md text-[16px] text-on-surface-variant">Yes. We use advanced encryption and your files are automatically deleted from our servers shortly after processing.</p>
              </div>
              <div className="border-b border-outline-variant pb-4">
                <h4 className="font-label-md text-[14px] text-on-surface mb-2">Does this work on mobile?</h4>
                <p className="font-body-md text-[16px] text-on-surface-variant">Absolutely. ToolBox is fully responsive and works seamlessly across desktop, tablet, and mobile browsers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        {tool.relatedTools.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline-sm text-[24px] text-on-surface mb-8 text-center">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tool.relatedTools.slice(0, 3).map(relatedId => {
                const related = TOOLS.find(t => t.id === relatedId);
                if (!related) return null;
                return (
                  <Link key={related.id} href={`/tools/${related.slug}`} className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant hover:border-primary transition-colors flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center mb-4 group-hover:bg-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary">build</span>
                    </div>
                    <h3 className="font-label-md text-[14px] text-on-surface mb-2">{related.name}</h3>
                    <p className="font-body-md text-[16px] text-on-surface-variant text-sm line-clamp-2">{related.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
