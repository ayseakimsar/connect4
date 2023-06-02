import { useState, useEffect, useRef } from "react";
import "../scss/Board.scss";
import { handleColumnClick } from "./handleColumnClick";
import Stopwatch from "./stopwatch";
import { restart } from "./restart";
import getRandomColumn from "./getRandomColumn";

export default function Board() {
  const [gameNo, setGameNo] = useState(0);
  const [score, setScore] = useState([0, 0]);
  const [player, setPlayer] = useState(1);
  const [turn, changeTurn] = useState(false);
  const [winner, setWinner] = useState(0);

  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    setBoard([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  }, [gameNo]);
  const isFirstRender = useRef(true);
  const isSecondRender = useRef(false);



  useEffect(() => {
    if (winner !== 0) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      isSecondRender.current = true;
      return;
    }

    if (isFirstRender.current === false && isSecondRender.current === true) {
      isSecondRender.current = false;
      return;
    }

    const randomColumn = getRandomColumn(board);
    handleClick(randomColumn);
  }, [turn]);




  function handleClick(columnIndex) {
    handleColumnClick(
      columnIndex,
      board,
      player,
      setBoard,
      setPlayer,
      score,
      setScore,
      winner,
      setWinner
    );
  }

  return (
    <div className="board">
      {board.map((column, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className={`board-column board-column-${i}`}
        >
          {column.map((cell, j) => (
            <div className="cell" key={j}>
              {cell}
            </div>
          ))}
        </div>
      ))}

      <button
        className="restart_button"
        onClick={() => restart(setPlayer, gameNo, setGameNo)}
      >
        restart
      </button>
      <Stopwatch
        player={player}
        handleClick={handleClick}
        board={board}
        key={gameNo}
        changeTurn={changeTurn}
        winner={winner}
      />
      <div className="score-board">
        player 1: {score[0]} player 2: {score[1]}
      </div>
    </div>
  );
}
