export default function PrivacyPage() {
  return (
    <div className="w-full flex-grow">
      <section className="bg-surface-container-low pt-16 pb-12 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/40">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display-lg-mobile text-[36px] md:font-display-lg md:text-[46px] text-on-surface mb-3 font-serif-title">
            Privacy Policy
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            Your data belongs to you. Here is our straightforward, plain-English privacy commitment.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-14 space-y-6 font-body-md text-[16px] text-on-surface leading-relaxed">
        <h3 className="font-headline-sm text-[22px] text-on-surface font-serif-title">1. No Persistent Storage of User Files</h3>
        <p className="text-on-surface-variant">
          Files you upload for PDF and Image operations are held temporarily in volatile memory (RAM) solely for the duration of the requested processing operation. Once downloaded or the session ends, files are destroyed.
        </p>

        <h3 className="font-headline-sm text-[22px] text-on-surface font-serif-title">2. Client-Side Processing</h3>
        <p className="text-on-surface-variant">
          Calculators, text utilities, converters, base64 encoders, and developer tools operate completely on the client side inside your web browser. No data entered into these tools is ever transmitted over the network.
        </p>

        <h3 className="font-headline-sm text-[22px] text-on-surface font-serif-title">3. No Advertising Trackers</h3>
        <p className="text-on-surface-variant">
          We do not sell user data or include third-party advertising tracking networks on ToolBox.
        </p>
      </section>
    </div>
  );
}
