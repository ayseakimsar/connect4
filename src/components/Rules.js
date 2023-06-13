import "../scss/rules.scss";

export default function Rules() {
  return (
    <div className="rules-container">
      <h1>rules</h1>
      <h2>objective</h2>
      <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizantally, or diagonally).
      </p>

      <h2>how to play</h2>
      <ol>
        <li>
          <span className="list-number">1</span>Red goes first in the first
          game.
        </li>
        <li>
          <span className="list-number">2</span>Players must alternate turns,
          and only one disc can be dropped in each turn.
        </li>
        <li>
          <span className="list-number">3</span>The game ends when there is a
          4-in-a-row or a stalemate.
        </li>
        <li>
          <span className="list-number">4</span>The starter of the previous game
          goes second on the next game.
        </li>
      </ol>
    </div>
  );
}
