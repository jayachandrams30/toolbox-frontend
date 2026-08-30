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
      title: 'Tool Not Found - ToolBox',
    };
  }

  return {
    title: `${tool.name} - Free Online Tool | ToolBox`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - ToolBox`,
      description: tool.description,
      type: 'website',
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const categorySlug = tool.category.toLowerCase().replace(/[\s&]+/g, '-');

  return (
    <>
      {/* Editorial Tool Hero */}
      <section className="bg-surface-container-low pt-12 pb-14 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-label-md text-[13px] text-on-surface-variant">
              <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-primary transition-colors" href="/tools">All Tools</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-primary transition-colors" href={`/categories/${categorySlug}`}>{tool.category}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-on-surface font-medium">{tool.name}</li>
            </ol>
          </nav>

          {/* Tool Title & Description */}
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title tracking-tight">
            {tool.name}
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>
      </section>

      {/* Main Interactive Tool Area */}
      <section className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-container-max mx-auto mb-section-gap">
          {tool.template === 'PDFToolTemplate' && <PDFToolTemplate tool={tool} />}
          {tool.template === 'ImageToolTemplate' && <ImageToolTemplate tool={tool} />}
          {tool.template === 'CalculatorTemplate' && <CalculatorTemplate tool={tool} />}
          {tool.template === 'ConverterTemplate' && <ConverterTemplate tool={tool} />}
          {tool.template === 'TextToolTemplate' && <TextToolTemplate tool={tool} />}
          {tool.template === 'DeveloperToolTemplate' && <DeveloperToolTemplate tool={tool} />}
          {tool.template === 'DateTimeToolTemplate' && <DateTimeToolTemplate tool={tool} />}
          {tool.template === 'FinanceToolTemplate' && <FinanceToolTemplate tool={tool} />}
        </div>

        {/* Editorial SEO & Guide Section */}
        <article className="max-w-3xl mx-auto border-t border-outline-variant pt-12 mb-section-gap space-y-12">
          {/* About this tool */}
          <div>
            <h2 className="font-headline-md text-[28px] text-on-surface mb-4 font-serif-title">About {tool.name}</h2>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed mb-4">
              {tool.name} is designed to provide quick, reliable, and precise calculations or transformations directly in your browser. Whether you are working on academic calculations, design assets, document workflows, or software development, this utility ensures zero friction and high productivity.
            </p>
            <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
              Designed with an editorial sensibility, ToolBox eliminates unnecessary clutter, popups, and dark patterns so you can focus on getting tasks done accurately.
            </p>
          </div>

          {/* How to use */}
          <div>
            <h2 className="font-headline-md text-[28px] text-on-surface mb-6 font-serif-title">How to use this tool</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/80">
                <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[14px] mb-3">1</div>
                <h4 className="font-label-md text-[15px] text-on-surface mb-1">Provide Input</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Enter numbers, paste text, or upload the files you wish to process.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/80">
                <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[14px] mb-3">2</div>
                <h4 className="font-label-md text-[15px] text-on-surface mb-1">Adjust Parameters</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Fine-tune sliders, formats, units, or operational toggles.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/80">
                <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-[14px] mb-3">3</div>
                <h4 className="font-label-md text-[15px] text-on-surface mb-1">Copy or Download</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Get your instant result, copy to clipboard, or download processed files.</p>
              </div>
            </div>
          </div>

          {/* Privacy & Security Guarantee */}
          <div className="bg-surface-container-high/60 p-6 rounded-xl border border-outline-variant">
            <h4 className="font-label-md text-[15px] text-on-surface font-semibold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">lock</span>
              Privacy and Data Security
            </h4>
            <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed">
              We value your privacy. Client-side tools execute directly inside your browser window without transmitting data to any server. For tools requiring server processing, files are strictly held in volatile memory and wiped immediately after processing.
            </p>
          </div>

          {/* Frequently Asked Questions */}
          <div>
            <h2 className="font-headline-md text-[28px] text-on-surface mb-6 font-serif-title">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-outline-variant rounded-xl p-5 bg-surface-container-lowest">
                <h4 className="font-label-md text-[15px] text-on-surface font-semibold mb-2">Is this tool free to use?</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Yes! All standard utilities on ToolBox are 100% free with no account registration or payment required.</p>
              </div>
              <div className="border border-outline-variant rounded-xl p-5 bg-surface-container-lowest">
                <h4 className="font-label-md text-[15px] text-on-surface font-semibold mb-2">Can I use this tool on my smartphone?</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Yes. The interface is responsive and works smoothly across mobile phones, tablets, and desktop workstations.</p>
              </div>
              <div className="border border-outline-variant rounded-xl p-5 bg-surface-container-lowest">
                <h4 className="font-label-md text-[15px] text-on-surface font-semibold mb-2">Are there any file size or usage limits?</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Generous file allowances are provided for free users, supporting standard daily utility tasks seamlessly.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Tools */}
        {tool.relatedTools.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline-md text-[28px] text-on-surface mb-8 text-center font-serif-title">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {tool.relatedTools.slice(0, 4).map(relatedId => {
                const related = TOOLS.find(t => t.id === relatedId);
                if (!related) return null;
                return (
                  <Link 
                    key={related.id} 
                    href={`/tools/${related.slug}`} 
                    className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-all flex flex-col group h-full shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4 text-on-surface group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[22px]">build</span>
                    </div>
                    <h3 className="font-label-md text-[15px] text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="font-body-md text-[13px] text-on-surface-variant line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
