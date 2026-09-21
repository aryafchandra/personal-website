import Timeline from "./Timeline";
import { CAREER_HISTORY } from "../data/portfolio";

export default function CareerHistory() {
  return (
    <section id="career" className="section">
      <div className="section__inner">
        <div className="section-heading">
          <span className="section-heading__num">03</span>
          <h2 className="section-heading__title">CAREER HISTORY</h2>
        </div>
        <Timeline entries={CAREER_HISTORY} className="career-timeline" />
      </div>
    </section>
  );
}
