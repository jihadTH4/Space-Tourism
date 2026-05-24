// ─────────────────────────────────────────────
// TabNav — text-based tab navigation
// Used on the Destination page (Moon / Mars / etc.)
// ─────────────────────────────────────────────

interface TabNavProps {
  tabs: string[];
  activeTab: number;
  onSelect: (index: number) => void;
}

export default function TabNav({ tabs, activeTab, onSelect }: TabNavProps) {
  return (
    <nav aria-label="Destination tabs">
      <ul className="flex gap-6 md:gap-8 justify-center lg:justify-start">
        {tabs.map((tab, i) => (
          <li key={tab}>
            <button
              onClick={() => onSelect(i)}
              className={[
                'relative pb-2 text-[14px] md:text-[16px] tracking-[2.36px] uppercase font-sans-condensed transition-colors duration-200 cursor-pointer',
                'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:transition-all after:duration-200',
                activeTab === i
                  ? 'text-white after:bg-white'
                  : 'text-[#D0D6F9] hover:text-white hover:after:bg-white/50 after:bg-transparent',
              ].join(' ')}
              aria-selected={activeTab === i}
              role="tab"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
