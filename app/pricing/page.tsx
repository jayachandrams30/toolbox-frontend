import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="w-full flex-grow">
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant/40">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant font-semibold mb-3 block">Plans & Pricing</span>
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            Simple, honest pricing.
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            All core utilities are 100% free forever. Upgrade to Pro for high-throughput batch processing and priority server execution.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="font-headline-sm text-[24px] text-on-surface font-semibold mb-2">Free Utility</div>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-6">Essential online utilities for everyday tasks.</p>
              <div className="font-display-lg text-[40px] text-on-surface font-bold mb-6">₹0 <span className="text-[16px] text-on-surface-variant font-normal">/ forever</span></div>
              <ul className="space-y-3 font-body-md text-[14px] text-on-surface">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Access to 160+ tools</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Unlimited client-side processing</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check</span> Zero ads or trackers</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[18px]">check</span> In-memory privacy guarantee</li>
              </ul>
            </div>
            <Link href="/tools" className="mt-8 block text-center border border-outline-variant py-3 rounded-lg font-label-md text-[14px] text-on-surface hover:bg-surface-container-low transition-colors">
              Explore Tools
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-8 flex flex-col justify-between shadow-lg relative border border-outline/50">
            <div className="absolute top-4 right-4 bg-primary-container text-white px-3 py-1 rounded-full font-label-sm text-[11px] uppercase tracking-wider">
              Popular
            </div>
            <div>
              <div className="font-headline-sm text-[24px] font-semibold mb-2">ToolBox Pro</div>
              <p className="font-body-md text-[14px] text-surface-variant mb-6">For power users and document-heavy workflows.</p>
              <div className="font-display-lg text-[40px] text-inverse-primary font-bold mb-6">₹149 <span className="text-[16px] text-surface-variant font-normal">/ month</span></div>
              <ul className="space-y-3 font-body-md text-[14px] text-inverse-on-surface">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span> Everything in Free</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span> Unlimited batch PDF merging & splitting</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span> Up to 500 MB file upload limit</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-inverse-primary text-[18px]">check</span> Priority dedicated processing</li>
              </ul>
            </div>
            <button className="mt-8 block w-full text-center bg-primary-container text-white py-3 rounded-lg font-label-md text-[14px] hover:bg-primary transition-colors font-semibold shadow-md">
              Subscribe to Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
