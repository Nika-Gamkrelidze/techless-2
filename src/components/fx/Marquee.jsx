// Infinite horizontal marquee (pure CSS animation). Content is duplicated
// once; the track translates -50% for a seamless loop.
export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__inner">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            {item}
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
