// ─────────────────────────────────────────────
// DotNav — dot-based navigation
// Used on the Crew page to select crew members
// ─────────────────────────────────────────────

interface DotNavProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  label?: string;
}

export default function DotNav({ count, activeIndex, onSelect, label = 'item' }: DotNavProps) {
  return (
    <nav aria-label={`${label} selector`}>
      <ul className="flex gap-4 justify-center lg:justify-start">
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>
            <button
              onClick={() => onSelect(i)}
              aria-label={`Select ${label} ${i + 1}`}
              aria-selected={activeIndex === i}
              className={[
                'w-2.5 h-2.5 md:w-3.75 md:h-3.75 rounded-full transition-all duration-200 cursor-pointer',
                activeIndex === i
                  ? 'bg-white scale-110'
                  : 'bg-white/20 hover:bg-white/50',
              ].join(' ')}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
