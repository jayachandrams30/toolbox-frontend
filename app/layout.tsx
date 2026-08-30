import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { SearchBar } from "@/components/ui/SearchBar";

export const metadata: Metadata = {
  title: "ToolBox - Editorial Utility Platform",
  description: "A production-ready platform with 500+ utilities spanning PDF, Image, Developer, Finance, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Link href="/" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--on-background)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                TB
              </div>
              ToolBox
            </Link>
            <nav style={{ display: 'flex', gap: '24px' }}>
              <Link href="/tools" style={{ color: 'var(--on-surface)', fontWeight: 500 }}>All Tools</Link>
              <Link href="/categories" style={{ color: 'var(--on-surface)', fontWeight: 500 }}>Categories</Link>
            </nav>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <SearchBar />
            </div>
          </div>
        </header>
        <main style={{ minHeight: 'calc(100vh - 64px - 80px)' }}>
          {children}
        </main>
        <footer style={{ borderTop: '1px solid var(--outline)', padding: '32px 0', backgroundColor: 'var(--surface)' }}>
          <div className="container" style={{ textAlign: 'center', color: 'var(--on-surface)' }}>
            <p>&copy; {new Date().getFullYear()} ToolBox Platform. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
