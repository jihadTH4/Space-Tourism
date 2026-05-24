// ─────────────────────────────────────────────
// 404 Not Found page
// ─────────────────────────────────────────────

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0D17] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-white text-[150px] font-serif leading-none mb-4">404</h1>
      <p className="text-[#D0D6F9] text-[18px] font-sans mb-8">
        This page drifted off into deep space.
      </p>
      <Link
        to="/"
        className="text-white font-sans-condensed tracking-[2px] uppercase text-[14px] border border-white/30 px-8 py-3 hover:bg-white hover:text-[#0B0D17] transition-all duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
