import { SKILLS } from "../data/portfolio";

export default function TrainingGround() {
  return (
    <section id="camp" className="section section--dark">
      <div className="section__inner">
        <div className="section-heading">
          <span className="section-heading__num section-heading__num--gold">04</span>
          <h2 className="section-heading__title section-heading__title--light">TRAINING GROUND</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div className={`skill-card skill-card--${skill.variant}`} key={skill.title}>
              <div className="skill-card__title">{skill.title}</div>
              <div className="pill-row">
                {skill.pills.map((pill) => (
                  <span className="pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
