import "../scss/score-card.scss";

export default function Player2Score({ score }) {
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
            cx="28"
            cy="28"
            r="28"
            transform="matrix(-1 0 0 1 58 2)"
            fill="#FFCE67"
            stroke="black"
            stroke-width="3"
          />
          <path
            d="M13 29C15.0769 45.6605 34.3654 46.9933 38 29"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <ellipse
            cx="2"
            cy="2.5"
            rx="2"
            ry="2.5"
            transform="matrix(-1 0 0 1 30 21)"
            fill="black"
          />
          <ellipse
            cx="2"
            cy="2.5"
            rx="2"
            ry="2.5"
            transform="matrix(-1 0 0 1 20 21)"
            fill="black"
          />
        </svg>
      </div>
      <div className="score-card_text">player 2</div>
      <div className="score-card_value">{score[1]}</div>
    </div>
  );
}
