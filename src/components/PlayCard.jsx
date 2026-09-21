import { useState } from "react";

export default function PlayCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      className={`play-card${isFlipped ? " is-flipped" : ""}`}
      type="button"
      aria-label={`Flip to see formation details for ${project.title}`}
      onClick={() => setIsFlipped((flipped) => !flipped)}
    >
      <div className="play-card__inner">
        <div className="play-card__face play-card__face--front">
          {project.image && (
            <img className="play-card__image" src={project.image} alt={`${project.title} landing page screenshot`} />
          )}
          <div className="play-card__content">
            <div className="play-card__tag">{project.tag}</div>
            <div className="play-card__title">{project.title}</div>
            <div className="play-card__stack">{project.stack}</div>
          </div>
        </div>
        <div className="play-card__face play-card__face--back">
          <div>
            <b>PROBLEM</b>
            <div>{project.problem}</div>
          </div>
          <div>
            <b>FORMATION</b>
            <div>{project.formation}</div>
          </div>
          <div>
            <b>RESULT</b>
            <div>{project.result}</div>
          </div>
        </div>
      </div>
    </button>
  );
}
