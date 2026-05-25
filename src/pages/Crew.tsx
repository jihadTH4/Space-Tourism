// ─────────────────────────────────────────────
// Crew Page
// Dot navigation to cycle through 4 crew members.
// Image sits bottom-aligned on desktop.
// ─────────────────────────────────────────────

import { useState } from "react";
import { siteData } from "../data";
import PageHeading from "../components/ui/PageHeading";
import DotNav from "../components/ui/DotNav";

export default function Crew() {
  const { crew } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  const current = crew[activeIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/crew/background-crew-mobile.jpg)",
      }}>
      <style>{`
        @media (min-width: 768px) {
          .crew-bg { background-image: url(/assets/crew/background-crew-tablet.jpg) !important; }
        }
        @media (min-width: 1024px) {
          .crew-bg { background-image: url(/assets/crew/background-crew-desktop.jpg) !important; }
        }
      `}</style>

      <div
        className="crew-bg min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: "url(/assets/crew/background-crew-mobile.jpg)",
        }}>
        <main className="flex-1 flex flex-col lg:flex-row pt-22 md:pt-34 lg:pt-53 px-6 md:px-9.5 lg:px-41.25 pb-0 lg:pb-0">
          {/* ── Left: text + nav ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 order-2 lg:order-1">
            <PageHeading number="02" title="Meet your crew" />

            {/* Crew role & name */}
            <div className="mt-8 md:mt-12 lg:mt-38.5">
              <p
                key={`role-${activeIndex}`}
                className="text-white/50 text-[16px] md:text-[24px] lg:text-[32px] font-serif uppercase mb-2 animate-fade-in">
                {current.role}
              </p>
              <h2
                key={`name-${activeIndex}`}
                className="text-white text-[24px] md:text-[40px] lg:text-[56px] font-serif uppercase animate-fade-in-up">
                {current.name}
              </h2>
            </div>

            {/* Bio */}
            <p
              key={`bio-${activeIndex}`}
              className="text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-6.25 md:leading-7 lg:leading-8 mt-4 md:mt-6 max-w-111 font-sans animate-fade-in-up delay-100">
              {current.bio}
            </p>

            {/* Dot navigation */}
            <div className="mt-8 md:mt-10 lg:mt-auto lg:mb-23.5">
              <DotNav
                count={crew.length}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                label="crew member"
              />
            </div>
          </div>

          {/* ── Right: Crew image ── */}
          <div className="flex justify-center lg:justify-end lg:items-end order-1 lg:order-2 mt-8 md:mt-10 lg:mt-0 lg:flex-1">
            {/* Divider line on mobile */}
            <div className="md:hidden absolute left-6 right-6 h-px bg-[#383B4B] bottom-22" />

            <picture>
              <source srcSet={current.images.webp} type="image/webp" />
              <img
                key={current.name}
                src={current.images.png}
                alt={current.name}
                className="w-44.25 md:w-114 lg:w-auto lg:max-h-178 object-contain object-bottom border-b border-[#383B4B] md:border-none animate-fade-in"
              />
            </picture>
          </div>
        </main>
      </div>
    </div>
  );
}
