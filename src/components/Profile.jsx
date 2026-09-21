export default function Profile() {
  return (
    <section id="profile" className="section">
      <div className="section__inner">
        <div className="section-heading">
          <span className="section-heading__num">01</span>
          <h2 className="section-heading__title">PLAYER PROFILE</h2>
        </div>
        <div className="profile-grid">
          <div className="profile-copy">
            <p>
              <b>Scouting report:</b> A full-stack developer fresh out of Universitas Indonesia's Computer Science
              program — no professional minutes on the clock yet, but game-ready reps built through coursework and
              personal projects across React, Node.js, Django, and Spring Boot.
            </p>
            <p>
              Comfortable operating on both ends of the pitch, from API design to frontend delivery. Currently in
              pre-season: available immediately and looking for an internship to earn his first professional
              minutes.
            </p>
          </div>
          <div className="vitals-card">
            <div className="vitals-card__title">VITALS</div>
            <div className="vitals-row">
              <span>ROLE</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="vitals-row">
              <span>EDUCATION</span>
              <span>B.Sc. CS, Universitas Indonesia '26</span>
            </div>
            <div className="vitals-row">
              <span>EXPERIENCE LEVEL</span>
              <span>Internship</span>
            </div>
            <div className="vitals-row">
              <span>STATUS</span>
              <span className="vitals-row__status">AVAILABLE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
