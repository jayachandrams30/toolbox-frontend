import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-surface-container-low pt-24 pb-32 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-container-max mx-auto">
          <span className="inline-block font-label-sm text-[12px] text-on-surface-variant mb-6 tracking-widest">FREE ONLINE TOOLS</span>
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[48px] text-on-surface mb-6 max-w-4xl mx-auto">
            Every tool you need.<br />In one place.
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-12">
            Simple tools for PDFs, images, calculations, conversions, and everyday tasks. Designed for focus, built for speed.
          </p>
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-outline">search</span>
            </div>
            <input className="w-full h-[58px] pl-12 pr-4 bg-surface-container-lowest border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-on-surface focus:ring-0 transition-colors shadow-[0_4px_20px_rgba(31,31,28,0.02)]" placeholder="Search for a tool..." type="text" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="font-label-sm text-[12px] text-on-surface-variant">Popular:</span>
            <Link className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1 font-label-sm text-[12px] text-on-surface-variant hover:bg-surface-container-high transition-colors" href="/tools/merge-pdf">Merge PDF</Link>
            <Link className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1 font-label-sm text-[12px] text-on-surface-variant hover:bg-surface-container-high transition-colors" href="/tools/image-resizer">Image Resizer</Link>
            <Link className="bg-surface-container border border-outline-variant rounded-lg px-3 py-1 font-label-sm text-[12px] text-on-surface-variant hover:bg-surface-container-high transition-colors" href="/tools/word-counter">Word Count</Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-md text-[32px] text-on-surface mb-16 text-center">Tools for everyday work</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <Link className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300" href="/categories/pdf">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>description</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3">PDF Tools</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant">Merge, split, compress, and convert your documents securely.</p>
            </Link>

            <Link className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300" href="/categories/images">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>image</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3">Image Tools</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant">Crop, resize, convert, and optimize images for web and print.</p>
            </Link>

            <Link className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-10 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300" href="/categories/calculators">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-on-surface group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 0" }}>calculate</span>
              </div>
              <h3 className="font-headline-sm text-[24px] text-on-surface mb-3">Calculators</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant">Financial, mathematical, and everyday calculators built for precision.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-1 mb-12 md:mb-0">
            <h2 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[48px] text-on-surface mb-6">
              Your documents, made simpler.
            </h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-10">
              Our suite of PDF tools allows you to manipulate, merge, and convert files locally in your browser. No server uploads required for core tasks, ensuring your sensitive data remains private.
            </p>
            <Link className="inline-flex items-center gap-2 bg-transparent border border-outline-variant text-on-surface font-label-md text-[14px] px-6 py-3 rounded-lg hover:bg-surface-container-lowest transition-colors" href="/categories/pdf">
              Explore PDF tools
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="border-2 border-dashed border-outline-variant rounded-xl h-[400px] flex flex-col items-center justify-center bg-surface-container-lowest transition-colors hover:border-on-surface group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-container opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="z-10 flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[32px]">upload_file</span>
                </div>
                <h3 className="font-headline-sm text-[24px] text-on-surface mb-2">Drop your PDF here</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant">or click to browse from your device</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-inverse-surface py-section-gap px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[48px] text-inverse-on-surface mb-6">
            More tools. Less friction.
          </h2>
          <p className="font-body-lg text-[18px] text-surface-variant mb-8 max-w-xl">
            Unlock batch processing, higher file limits, and an ad-free experience. Support the continued development of clean, utility-focused tools.
          </p>
          <div className="font-headline-md text-[32px] text-inverse-primary mb-10">
            ₹149 <span className="font-body-md text-[16px] text-surface-variant">/ month</span>
          </div>
          <Link className="bg-primary-container text-on-primary-container font-label-md text-[14px] px-10 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,0,0,0.2)]" href="/pricing">
            Start Pro
          </Link>
        </div>
      </section>
    </>
  );
}
