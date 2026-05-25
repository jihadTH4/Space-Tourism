// ─────────────────────────────────────────────
// Technology Page
// Numbered navigation (1/2/3) to cycle through
// 3 technologies. Image is full-bleed on mobile/tablet,
// portrait on desktop (right side, outside main container).
// ─────────────────────────────────────────────

import { useState } from "react";
import { siteData } from "../data";
import PageHeading from "../components/ui/PageHeading";
import NumberNav from "../components/ui/NumberNav";

export default function Technology() {
  const { technology } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  const current = technology[activeIndex];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/assets/technology/background-technology-mobile.jpg)",
      }}>
      <style>{`
        @media (min-width: 768px) {
          .tech-bg { background-image: url(/assets/technology/background-technology-tablet.jpg) !important; }
        }
        @media (min-width: 1024px) {
          .tech-bg { background-image: url(/assets/technology/background-technology-desktop.jpg) !important; }
        }
      `}</style>

      <div
        className="tech-bg min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/technology/background-technology-mobile.jpg)",
        }}>
        {/* Page heading */}
        <div className="pt-22 md:pt-34 lg:pt-53 px-6 md:px-9.5 lg:px-41.25 mb-8 md:mb-14 lg:mb-15">
          <PageHeading number="03" title="Space launch 101" />
        </div>

        {/* Main content: stacked on mobile, stacked on tablet, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 pb-14 md:pb-16 lg:pb-0 lg:min-h-[calc(100vh-300px)]">
          {/* ── Technology image (landscape on mobile/tablet, portrait on desktop right edge) ── */}
          <div className="w-full lg:order-3 lg:ml-auto lg:shrink-0 lg:w-128.75 lg:self-stretch">
            <picture>
              <source
                srcSet={current.images.portrait}
                media="(min-width: 1024px)"
              />
              <img
                key={`img-${activeIndex}`}
                src={current.images.landscape}
                alt={current.name}
                className="w-full h-42.5 md:h-77.5 lg:h-full lg:max-h-131.75 object-cover animate-fade-in"
              />
            </picture>
          </div>

          {/* ── Number nav + text content ── */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 px-6 md:px-9.5 lg:pl-41.25 lg:pr-0 mt-8 md:mt-14 lg:mt-0 lg:order-1 lg:flex-1">
            {/* Number nav */}
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
              <NumberNav
                count={technology.length}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
              />
            </div>

            {/* Text content */}
            <div className="text-center lg:text-left">
              <p className="text-[#D0D6F9] text-[14px] tracking-[2.36px] uppercase font-sans-condensed mb-3 animate-fade-in">
                The terminology…
              </p>
              <h2
                key={`name-${activeIndex}`}
                className="text-white text-[24px] md:text-[40px] lg:text-[56px] font-serif uppercase mb-4 md:mb-6 animate-fade-in-up">
                {current.name}
              </h2>
              <p
                key={`desc-${activeIndex}`}
                className="text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-6.25 md:leading-7 lg:leading-8 max-w-111 mx-auto lg:mx-0 font-sans animate-fade-in-up delay-100">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
