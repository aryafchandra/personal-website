import Timeline from "./Timeline";
import { CLUB_HISTORY } from "../data/portfolio";

export default function AcademyHistory() {
  return (
    <section id="roster" className="section section--tinted">
      <div className="section__inner">
        <div className="section-heading">
          <span className="section-heading__num">02</span>
          <h2 className="section-heading__title">ACADEMY HISTORY</h2>
        </div>
        <Timeline entries={CLUB_HISTORY} />
      </div>
    </section>
  );
}
