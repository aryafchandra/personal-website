import PlayCard from "./PlayCard";
import { PROJECTS } from "../data/projects";

export default function Playbook() {
  return (
    <section id="playbook" className="section">
      <div className="section__inner section__inner--wide">
        <div className="section-heading">
          <span className="section-heading__num">05</span>
          <h2 className="section-heading__title">THE TACTICS BOARD</h2>
          <span className="section-heading__hint">— hover a play to see the formation</span>
        </div>

        <div className="playbook-grid">
          {PROJECTS.length === 0 ? (
            <div className="playbook-empty">Playbook loading — first plays coming soon.</div>
          ) : (
            PROJECTS.map((project) => <PlayCard project={project} key={project.title} />)
          )}
        </div>
      </div>
    </section>
  );
}
