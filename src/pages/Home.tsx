// ─────────────────────────────────────────────
// Home Page
// Full-viewport hero with heading, description,
// and the circular "EXPLORE" CTA button.
// ─────────────────────────────────────────────

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: "url(/assets/home/background-home-mobile.jpg)",
      }}>
      {/* Tablet and desktop backgrounds via scoped style */}
      <style>{`
        @media (min-width: 768px) {
          .home-bg { background-image: url(/assets/home/background-home-tablet.jpg) !important; }
        }
        @media (min-width: 1024px) {
          .home-bg { background-image: url(/assets/home/background-home-desktop.jpg) !important; }
        }
      `}</style>

      <div
        className="home-bg min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: "url(/assets/home/background-home-mobile.jpg)",
        }}>
        {/* Main content area — centered on mobile/tablet, split on desktop */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-24 lg:px-41.25 pt-28 md:pt-50.5 lg:pt-62.5 pb-12 md:pb-24 lg:pb-25 text-center lg:text-left gap-8 lg:gap-0">
          {/* ── Left: Text content ── */}
          <div className="lg:max-w-112.5">
            <p className="text-[#D0D6F9] text-[16px] md:text-[20px] lg:text-[28px] tracking-[4.72px] uppercase font-sans-condensed mb-4 md:mb-6 animate-fade-in-up">
              So, you want to travel to
            </p>

            <h1 className="text-white text-[80px] md:text-[150px] lg:text-[150px] font-serif leading-none mb-4 md:mb-6 animate-fade-in-up delay-100">
              SPACE
            </h1>

            <p className="text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-6.25 md:leading-7 lg:leading-8 max-w-111 mx-auto lg:mx-0 font-sans animate-fade-in-up delay-200">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>

          {/* ── Right: Explore button ── */}
          <div className="flex items-end lg:items-center lg:justify-end lg:flex-1 mt-12 md:mt-16 lg:mt-0 animate-fade-in-up delay-300">
            <Link
              to="/destination"
              className="explore-btn relative group inline-flex items-center justify-center w-37.5 h-37.5 md:w-60.5 md:h-60.5 lg:w-68.5 lg:h-68.5 rounded-full bg-white transition-all duration-500"
              aria-label="Explore destinations">
              {/* Expanding ring on hover */}
              <span
                className="absolute inset-0 rounded-full bg-white/10 scale-100 group-hover:scale-150 transition-transform duration-700 ease-out"
                aria-hidden="true"
              />
              <span className="relative text-[#0B0D17] text-[20px] md:text-[32px] font-serif tracking-[2px]">
                EXPLORE
              </span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
