// ─────────────────────────────────────────────
// PageLayout — wraps inner pages (not Home)
// Handles background image + header spacing
// ─────────────────────────────────────────────

import type { ReactNode } from 'react';

interface PageLayoutProps {
  backgroundMobile: string;
  backgroundTablet: string;
  backgroundDesktop: string;
  children: ReactNode;
}

export default function PageLayout({
  backgroundMobile,
  backgroundTablet,
  backgroundDesktop,
  children,
}: PageLayoutProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        // Progressive background: mobile → tablet → desktop
        // Using inline style here because dynamic Tailwind class
        // names get purged at build time.
        backgroundImage: `url(${backgroundMobile})`,
      }}
    >
      {/* Tablet override */}
      <style>{`
        @media (min-width: 768px) {
          .page-bg { background-image: url(${backgroundTablet}); }
        }
        @media (min-width: 1024px) {
          .page-bg { background-image: url(${backgroundDesktop}); }
        }
      `}</style>

      <div
        className="page-bg min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundMobile})` }}
      >
        {children}
      </div>
    </div>
  );
}
