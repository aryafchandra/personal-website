import { useState } from "react";
import headshot from "../assets/headshot.jpeg";

const ATTRIBUTES = [
  { label: "DRI — React", value: 82 },
  { label: "PAS — Node.js", value: 80 },
  { label: "SHO — Django", value: 78 },
  { label: "DEF — Spring Boot", value: 75 },
];

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="hero">
      <div className="hero__intro">
        <div className="eyebrow">DRAFT PROSPECT • HOVER CARD TO SCOUT STATS</div>
        <h1 className="hero__title">ARYA F CHANDRA</h1>
        <div className="hero__subtitle">FULL&#8209;STACK ENGINEER — FRESH OUT OF THE ACADEMY</div>
      </div>

      <div className="card-stage">
        <button
          className={`flip-card${isFlipped ? " is-flipped" : ""}`}
          type="button"
          aria-label="Flip player card to see match attributes"
          onClick={() => setIsFlipped((flipped) => !flipped)}
        >
          <div className="flip-card__inner">
            <div className="flip-card__face flip-card__face--front">
              <div className="flip-card__ribbon">
                <span>MIDFIELDER</span>
                <span>NO. 8</span>
              </div>
              <div className="flip-card__photo">
                <img className="photo-slot" src={headshot} alt="Arya F Chandra headshot" />
              </div>
              <div className="flip-card__caption">
                <div className="flip-card__name">ARYA F CHANDRA</div>
                <div className="flip-card__meta">FULL-STACK • CLASS OF 2026</div>
              </div>
            </div>

            <div className="flip-card__face flip-card__face--back">
              <div className="flip-card__back-title">MATCH ATTRIBUTES</div>
              <div className="attr-list">
                {ATTRIBUTES.map((attr) => (
                  <div className="attr-row" key={attr.label}>
                    <span>{attr.label}</span>
                    <b>{attr.value}</b>
                  </div>
                ))}
              </div>
              <div className="flip-card__footnote">CARD 1 OF 1 — UNIVERSITAS INDONESIA, B.SC. COMPUTER SCIENCE '26</div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
