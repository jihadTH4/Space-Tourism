// ─────────────────────────────────────────────
// PageHeading — numbered section title
// Used on Destination, Crew, and Technology pages
// e.g. "01 PICK YOUR DESTINATION"
// ─────────────────────────────────────────────

interface PageHeadingProps {
  number: string;
  title: string;
}

export default function PageHeading({ number, title }: PageHeadingProps) {
  return (
    <p className="flex items-center gap-4 md:gap-6 text-white uppercase tracking-[4.72px] text-[16px] md:text-[20px] lg:text-[28px] font-sans-condensed animate-fade-in-up">
      <span className="text-white/25 font-bold">{number}</span>
      {title}
    </p>
  );
}
