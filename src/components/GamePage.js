import Board from "./Board";

export default function GamePage() {
  return (
    <div className="board-page">
      <header>
        <button className="menu-button"></button>
        <svg></svg>
        <button className="restart-button"></button>
      </header>
      <section>
        <div className="player1__score-box"></div>
        <div className="player2__score-box"></div>
        <Board />
      </section>
    </div>
  );
}
