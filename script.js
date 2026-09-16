function renderClubHistory() {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  timeline.innerHTML = CLUB_HISTORY.map((entry, i) => `
    <div class="timeline-row${i === CLUB_HISTORY.length - 1 ? " timeline-row--last" : ""}">
      <div class="timeline-row__dates">${entry.dates}</div>
      <div>
        <div class="timeline-row__club">${entry.club} <span>— ${entry.role}</span></div>
        <div class="timeline-row__highlight">${entry.highlight}</div>
      </div>
      <div class="badge badge--${entry.badge}">${entry.badge === "bench" ? "BENCH" : "STARTER"}</div>
    </div>
  `).join("");
}

function renderSkills() {
  const grid = document.querySelector(".skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map((skill) => `
    <div class="skill-card skill-card--${skill.variant}">
      <div class="skill-card__title">${skill.title}</div>
      <div class="pill-row">
        ${skill.pills.map((pill) => `<span class="pill">${pill}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const grid = document.querySelector(".playbook-grid");
  if (!grid) return;

  if (PROJECTS.length === 0) {
    grid.innerHTML = `<div class="playbook-empty">Playbook loading — first plays coming soon.</div>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((project) => `
    <button class="play-card" type="button" aria-label="Flip to see formation details for ${project.title}">
      <div class="play-card__inner">
        <div class="play-card__face play-card__face--front">
          <div class="play-card__tag">${project.tag}</div>
          <div class="play-card__title">${project.title}</div>
          <div class="play-card__stack">${project.stack}</div>
        </div>
        <div class="play-card__face play-card__face--back">
          <div><b>PROBLEM</b><div>${project.problem}</div></div>
          <div><b>FORMATION</b><div>${project.formation}</div></div>
          <div><b>RESULT</b><div>${project.result}</div></div>
        </div>
      </div>
    </button>
  `).join("");
}

renderClubHistory();
renderSkills();
renderProjects();

document.querySelectorAll('.flip-card, .play-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
