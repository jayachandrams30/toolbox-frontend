"use client";

export default function ContactPage() {
  return (
    <div className="w-full flex-grow">
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            Get in Touch
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            Have a tool suggestion, feedback, or bug report? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-margin-mobile md:px-margin-desktop py-14">
        <form className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 space-y-5 shadow-sm">
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Name</label>
            <input type="text" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md" placeholder="Your name" />
          </div>
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Email</label>
            <input type="email" className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Message</label>
            <textarea rows={5} className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md resize-none" placeholder="What's on your mind?" />
          </div>
          <button type="button" onClick={() => alert('Thank you! Your feedback has been received.')} className="w-full bg-primary-container text-white py-3.5 rounded-lg font-label-md text-[15px] hover:bg-primary transition-colors font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
