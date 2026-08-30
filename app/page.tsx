import Link from 'next/link';
import { TOOLS } from '@/data/registry';

export default function Home() {
  const popularTools = [
    { name: 'Merge PDF', slug: 'merge-pdf' },
    { name: 'Image Resizer', slug: 'image-resizer' },
    { name: 'Word Counter', slug: 'word-counter' },
    { name: 'EMI Calculator', slug: 'emi-calculator' },
    { name: 'JSON Formatter', slug: 'json-formatter' },
  ];

  return (
    <>
      {/* Editorial Hero Section */}
      <section className="bg-surface-container-low pt-20 pb-28 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <span className="inline-block font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant mb-6 font-semibold">
            FREE ONLINE UTILITIES
          </span>
          <h1 className="font-display-lg-mobile text-[38px] md:font-display-lg md:text-[52px] text-on-surface mb-6 max-w-4xl mx-auto font-serif-title tracking-tight">
            Every tool you need.<br />In one place.
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
            Simple tools for PDFs, images, calculations, conversions, and everyday tasks. Designed for focus, built for speed.
          </p>

          {/* Large Hero Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline text-[22px]">search</span>
            </div>
            <form action="/tools" method="GET">
              <input 
                name="q"
                type="text" 
                placeholder="Search for a tool (e.g. compress pdf, emi, word counter)..." 
                className="w-full h-[58px] pl-12 pr-4 bg-surface-container-lowest border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary shadow-[0_4px_20px_rgba(31,31,28,0.04)] transition-all"
              />
            </form>
          </div>

          {/* Popular Quick Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2.5">
            <span className="font-label-sm text-[12px] text-on-surface-variant font-medium">Popular:</span>
            {popularTools.map(tool => (
              <Link 
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3.5 py-1.5 font-label-sm text-[12px] text-on-surface hover:bg-surface-container hover:border-outline transition-colors"
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Bento Section */}
      <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-md text-[32px] text-on-surface mb-14 text-center font-serif-title">
            Tools for everyday work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Card 1: PDF */}
            <Link 
              href="/categories/pdf"
              className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[32px]">picture_as_pdf</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3 font-semibold group-hover:text-primary transition-colors">
                PDF Tools
              </h3>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                Merge, split, compress, and convert your documents securely with zero server retention.
              </p>
            </Link>

            {/* Card 2: Image */}
            <Link 
              href="/categories/images"
              className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[32px]">image</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3 font-semibold group-hover:text-primary transition-colors">
                Image Tools
              </h3>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                Crop, resize, convert, and optimize images for high-performance web and print output.
              </p>
            </Link>

            {/* Card 3: Calculators */}
            <Link 
              href="/categories/calculators"
              className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[32px]">calculate</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3 font-semibold group-hover:text-primary transition-colors">
                Calculators
              </h3>
              <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed">
                Financial, mathematical, and everyday calculators engineered for utmost precision.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Split / Document Feature Section */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 mb-12 md:mb-0">
            <h2 className="font-display-lg-mobile text-[34px] md:font-display-lg md:text-[46px] text-on-surface mb-6 font-serif-title leading-tight">
              Your documents, made simpler.
            </h2>
            <p className="font-body-lg text-[17px] text-on-surface-variant mb-10 leading-relaxed">
              Our suite of PDF utilities allows you to manipulate, merge, and convert files locally in your browser. No server uploads required for core tasks, ensuring your sensitive data remains private.
            </p>
            <Link 
              href="/categories/pdf"
              className="inline-flex items-center gap-2 bg-transparent border border-outline-variant text-on-surface font-label-md text-[14px] px-6 py-3 rounded-lg hover:bg-surface-container-lowest hover:border-on-surface transition-all"
            >
              <span>Explore PDF tools</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Link 
              href="/tools/compress-pdf"
              className="border-2 border-dashed border-outline-variant rounded-xl h-[380px] flex flex-col items-center justify-center bg-surface-container-lowest transition-all hover:border-primary group cursor-pointer relative overflow-hidden shadow-sm"
            >
              <div className="z-10 flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 text-on-surface-variant group-hover:text-primary group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined text-[32px]">upload_file</span>
                </div>
                <h3 className="font-headline-sm text-[22px] text-on-surface mb-2 font-semibold">Drop your PDF here</h3>
                <p className="font-body-md text-[15px] text-on-surface-variant">or click to open the PDF compressor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section className="bg-inverse-surface py-section-gap px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[48px] text-inverse-on-surface mb-6 font-serif-title">
            More tools. Less friction.
          </h2>
          <p className="font-body-lg text-[18px] text-surface-variant mb-8 max-w-xl leading-relaxed">
            Unlock batch processing, higher file limits, and an ad-free experience. Support the continued development of clean, utility-focused tools.
          </p>
          <div className="font-headline-md text-[36px] text-inverse-primary mb-10 font-bold">
            ₹149 <span className="font-body-md text-[16px] text-surface-variant font-normal">/ month</span>
          </div>
          <Link 
            href="/pricing"
            className="bg-primary-container text-on-primary font-label-md text-[15px] px-10 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,0,0,0.25)] font-semibold"
          >
            Start Pro
          </Link>
        </div>
      </section>
    </>
  );
}
