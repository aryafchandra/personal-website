export default function Timeline({ entries, className = "" }) {
  return (
    <div className={`timeline ${className}`.trim()}>
      {entries.map((entry, i) => (
        <div
          className={`timeline-row${i === entries.length - 1 ? " timeline-row--last" : ""}`}
          key={`${entry.club}-${entry.dates}`}
        >
          <div className="timeline-row__dates">{entry.dates}</div>
          <div>
            <div className="timeline-row__club">
              {entry.club} <span>— {entry.role}</span>
            </div>
            <div className="timeline-row__highlight">{entry.highlight}</div>
          </div>
          <div className={`badge badge--${entry.badge}`}>{entry.badge === "bench" ? "BENCH" : "STARTER"}</div>
        </div>
      ))}
    </div>
  );
}
