import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SearchBar } from "@/components/ui/SearchBar";

export const metadata: Metadata = {
  title: "ToolBox - Every tool you need. In one place.",
  description: "A calm, editorial utility platform with 160+ tools spanning PDF, Image, Calculators, Converters, Developer, Text, Date & Time, and Finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface antialiased flex flex-col min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
        <header className="h-[72px] w-full top-0 sticky z-50 border-b border-outline-variant bg-surface-bright/95 backdrop-blur-sm">
          <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex items-center gap-8">
              <Link className="font-headline-md text-[30px] font-bold text-primary tracking-tight hover:opacity-90 transition-opacity" href="/">
                ToolBox
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/tools">All Tools</Link>
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/categories/pdf">PDF Tools</Link>
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/categories/images">Image Tools</Link>
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/categories/calculators">Calculators</Link>
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/categories/converters">Converters</Link>
                <Link className="text-on-surface-variant font-label-md text-[14px] hover:text-primary transition-colors duration-200" href="/categories/developer">Developer</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar />
              <Link href="/tools" className="hidden sm:inline-flex items-center justify-center font-label-md text-[14px] border border-outline-variant px-4 py-2 rounded-lg text-on-surface hover:border-on-surface hover:bg-surface-container-low transition-colors">
                Explore
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center font-label-md text-[14px] bg-primary-container text-white px-5 py-2 rounded-lg hover:bg-primary transition-colors shadow-sm">
                Go Pro
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <footer className="w-full py-section-gap border-t border-outline-variant bg-surface-container-low mt-auto">
          <div className="grid grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="col-span-12 md:col-span-4 mb-10 md:mb-0">
              <div className="font-headline-md text-[32px] text-on-surface mb-3 font-bold">ToolBox</div>
              <p className="font-body-md text-[15px] text-on-surface-variant max-w-xs leading-relaxed">
                Useful tools. Nothing complicated. Built for focus, speed, and privacy.
              </p>
              <p className="font-label-sm text-[12px] text-outline mt-6">
                &copy; {new Date().getFullYear()} ToolBox Platform. All rights reserved.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant font-semibold mb-3">Categories</div>
                <ul className="space-y-2">
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/pdf">PDF Tools</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/images">Image Tools</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/calculators">Calculators</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/converters">Converters</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant font-semibold mb-3">Utilities</div>
                <ul className="space-y-2">
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/text">Text Tools</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/developer">Developer</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/date-time">Date & Time</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/categories/finance">Finance</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant font-semibold mb-3">Popular</div>
                <ul className="space-y-2">
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/tools/compress-pdf">Compress PDF</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/tools/merge-pdf">Merge PDF</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/tools/emi-calculator">EMI Calculator</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/tools/word-counter">Word Counter</Link></li>
                </ul>
              </div>
              <div>
                <div className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant font-semibold mb-3">Company</div>
                <ul className="space-y-2">
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/tools">All 160+ Tools</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/pricing">Pricing & Pro</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/about">About Us</Link></li>
                  <li><Link className="text-on-surface font-body-md text-[14px] hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
