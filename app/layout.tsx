import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SearchBar } from "@/components/ui/SearchBar";

export const metadata: Metadata = {
  title: "ToolBox - Every tool you need. In one place.",
  description: "A production-ready platform with 500+ utilities spanning PDF, Image, Developer, Finance, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface antialiased flex flex-col min-h-screen">
        <header className="h-[72px] w-full top-0 sticky z-50 border-b border-outline-variant dark:border-outline bg-surface-bright dark:bg-surface-dim">
          <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="flex items-center gap-8">
              <Link className="font-headline-md text-[32px] leading-[1.15] font-bold text-primary dark:text-inverse-primary tracking-tight" href="/">ToolBox</Link>
              <nav className="hidden md:flex gap-6">
                <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="/tools">All Tools</Link>
                <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="/categories/pdf">PDF Tools</Link>
                <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="/categories/image">Image Tools</Link>
                <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="/categories/calculators">Calculators</Link>
                <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200" href="/categories/converters">Converters</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar />
              <button className="hidden md:block text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:text-primary transition-colors px-4 py-2">Sign in</button>
              <button className="bg-primary-container text-on-primary-container font-label-md text-[14px] px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">Go Pro</button>
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col">
          {children}
        </main>

        <footer className="w-full py-section-gap border-t border-outline-variant dark:border-outline bg-surface-container-low dark:bg-surface-container-lowest mt-auto">
          <div className="grid grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="col-span-12 md:col-span-4 mb-10 md:mb-0">
              <div className="font-headline-md text-[32px] text-on-surface dark:text-on-surface-variant mb-4 font-bold">ToolBox</div>
              <p className="font-body-md text-[16px] text-on-surface-variant dark:text-surface-variant max-w-xs">
                &copy; {new Date().getFullYear()} ToolBox. Useful tools. Nothing complicated.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 md:justify-end">
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/categories/pdf">PDF Tools</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/categories/image">Image Tools</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/categories/calculators">Calculators</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/categories/converters">Converters</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/about">About</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/pricing">Pricing</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/contact">Contact</Link>
              <Link className="text-on-surface-variant dark:text-surface-variant font-label-md text-[14px] hover:underline decoration-primary dark:decoration-inverse-primary transition-all" href="/privacy">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
