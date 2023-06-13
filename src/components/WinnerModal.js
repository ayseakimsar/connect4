import { restart } from "../functions/restart";
import "../scss/winner-modal.scss";

export default function WinnerModal({
  winner,
  setPlayer,
  gameNo,
  setGameNo,
  setWinner,
}) {
  return (
    <div className="winner-modal">
      <div className="player-name">Player {winner}</div>
      <div className="wins-label">WINS</div>
      <button
        onClick={() => restart(setPlayer, gameNo, setGameNo, setWinner)}
        className="play-again_button"
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
