import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full flex-grow">
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            About ToolBox
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            A calm, editorial utility platform built for people who value speed, privacy, and simplicity.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-14 space-y-8 font-body-md text-[16px] text-on-surface leading-relaxed">
        <p>
          Most online tool platforms are cluttered with intrusive ads, countdown timers, and deceptive download buttons. ToolBox was created to provide a quiet, high-performance alternative where everyday utilities just work.
        </p>
        <h3 className="font-headline-sm text-[24px] text-on-surface font-serif-title">Our Core Principles</h3>
        <ul className="space-y-4 text-on-surface-variant">
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">speed</span>
            <div><strong className="text-on-surface">Client-First Speed:</strong> Whenever technically feasible, utilities run 100% locally in your browser with instant calculations and transformations.</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">lock</span>
            <div><strong className="text-on-surface">Absolute Privacy:</strong> We never log, store, or analyze your files or inputs. Files sent to backend microservices are processed in-memory and wiped immediately.</div>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary mt-1">design_services</span>
            <div><strong className="text-on-surface">Editorial Design:</strong> Clean typography, warm paper tones, and focused workflows eliminate cognitive clutter.</div>
          </li>
        </ul>
      </section>
    </div>
  );
}
