// ─────────────────────────────────────────────
// NumberNav — numbered button navigation
// Used on the Technology page (1 / 2 / 3)
// ─────────────────────────────────────────────

interface NumberNavProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function NumberNav({ count, activeIndex, onSelect }: NumberNavProps) {
  return (
    <nav aria-label="Technology selector">
      <ul className="flex gap-4 lg:flex-col">
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => onSelect(i)}
              aria-label={`Technology ${i + 1}`}
              aria-selected={activeIndex === i}
              className={[
                'w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full border transition-all duration-200 cursor-pointer',
                'text-[16px] md:text-[20px] lg:text-[32px] font-serif tracking-[1px] md:tracking-[2px]',
                activeIndex === i
                  ? 'bg-white text-[#0B0D17] border-white'
                  : 'bg-transparent text-white border-white/25 hover:border-white',
              ].join(' ')}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
