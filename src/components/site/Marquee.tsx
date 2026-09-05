type Props = {
  items: string[];
  duration?: number;
  className?: string;
  separator?: string;
};

export function Marquee({ items, duration = 30, className, separator = "✳" }: Props) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track" style={{ ["--marquee-duration" as string]: `${duration}s` }}>
        {row.map((item, i) => (
          <span key={i} className="display flex shrink-0 items-center gap-8 pr-8 text-[7vw]">
            {item}
            <span className="text-[3vw] opacity-40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
