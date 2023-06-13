import "../scss/score-card.scss";

export default function Player1Score({ score, player }) {
  return (
    <div className="score-card">
      <div className="score-card_svg">
        <svg
          width="55"
          height="55"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="#FC6787"
            stroke="black"
            stroke-width="3"
          />
          <path
            d="M47 29C44.9231 45.6605 25.6346 46.9933 22 29"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <ellipse cx="32" cy="23.5" rx="2" ry="2.5" fill="black" />
          <ellipse cx="42" cy="23.5" rx="2" ry="2.5" fill="black" />
        </svg>
      </div>
      <div className="score-card_text">player 1</div>
      <div className="score-card_value">{score[0]}</div>
    </div>
  );
}
