// ─────────────────────────────────────────────
// Destination Page
// Tab-based navigation across 4 destinations.
// Shows planet image, description, distance & travel time.
// ─────────────────────────────────────────────

import { useState } from "react";
import { siteData } from "../data";
import PageHeading from "../components/ui/PageHeading";
import TabNav from "../components/ui/TabNav";

export default function Destination() {
  const { destinations } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  const current = destinations[activeIndex];
  const tabLabels = destinations.map((d) => d.name);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(/assets/destination/background-destination-mobile.jpg)",
      }}>
      <style>{`
        @media (min-width: 768px) {
          .dest-bg { background-image: url(/assets/destination/background-destination-tablet.jpg) !important; }
        }
        @media (min-width: 1024px) {
          .dest-bg { background-image: url(/assets/destination/background-destination-desktop.jpg) !important; }
        }
      `}</style>

      <div
        className="dest-bg min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/destination/background-destination-mobile.jpg)",
        }}>
        <main className="pt-22 md:pt-34 lg:pt-53 px-6 md:px-9.5 lg:px-41.25 pb-14 md:pb-16 lg:pb-24 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
          {/* ── Page heading (mobile: centered) ── */}
          <div className="text-center md:text-left">
            <PageHeading number="01" title="Pick your destination" />

            {/* ── Planet image ── */}
            <div className="flex justify-center lg:justify-start mt-8 md:mt-16 lg:mt-24.25">
              <picture>
                <source srcSet={current.images.webp} type="image/webp" />
                <img
                  key={current.name} // key forces re-mount = animation reset
                  src={current.images.png}
                  alt={current.name}
                  className="w-42.5 h-42.5 md:w-75 md:h-75 lg:w-111.25 lg:h-111.25 object-contain animate-scale-in"
                />
              </picture>
            </div>
          </div>

          {/* ── Right: tabs + content ── */}
          <div className="flex flex-col items-center lg:items-start lg:max-w-111.25 w-full">
            {/* Tab navigation */}
            <TabNav
              tabs={tabLabels}
              activeTab={activeIndex}
              onSelect={setActiveIndex}
            />

            {/* Destination name */}
            <h2
              key={`name-${activeIndex}`}
              className="text-white text-[56px] md:text-[80px] lg:text-[100px] font-serif uppercase mt-5 md:mt-8 animate-fade-in-up">
              {current.name}
            </h2>

            {/* Description */}
            <p
              key={`desc-${activeIndex}`}
              className="text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-6.25 md:leading-7 lg:leading-8 text-center lg:text-left font-sans animate-fade-in-up delay-100">
              {current.description}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#383B4B] my-8 md:my-10" />

            {/* Stats: distance + travel time */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start lg:items-start w-full">
              <div className="text-center lg:text-left">
                <p className="text-[#D0D6F9] text-[14px] tracking-[2.36px] uppercase font-sans-condensed mb-3">
                  Avg. distance
                </p>
                <p
                  key={`dist-${activeIndex}`}
                  className="text-white text-[28px] font-serif uppercase animate-fade-in-up">
                  {current.distance}
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-[#D0D6F9] text-[14px] tracking-[2.36px] uppercase font-sans-condensed mb-3">
                  Est. travel time
                </p>
                <p
                  key={`travel-${activeIndex}`}
                  className="text-white text-[28px] font-serif uppercase animate-fade-in-up">
                  {current.travel}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
