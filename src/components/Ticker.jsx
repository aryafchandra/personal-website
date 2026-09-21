import { TICKER_ITEMS } from "../data/portfolio";

// Duplicated once so the marquee loop (translateX -50%) has no visible seam.
const LOOPED_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {LOOPED_ITEMS.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item} &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
