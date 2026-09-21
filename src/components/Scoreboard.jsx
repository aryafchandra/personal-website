const STATS = [
  { value: "2026", label: "GRAD YEAR" },
  { value: "0", label: "PRO CAPS" },
  { value: "UI", label: "ALMA MATER" },
];

export default function Scoreboard() {
  return (
    <section className="scoreboard">
      <div className="section-kicker">DRAFT COMBINE</div>
      <div className="scoreboard__grid">
        {STATS.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-card__value">{stat.value}</div>
            <div className="stat-card__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
