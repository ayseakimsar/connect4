import { useState, useEffect, useRef } from "react";
import "../scss/Board.scss";
import { handleColumnClick } from "../functions/handleColumnClick";
import Stopwatch from "./Stopwatch";
import { restart } from "../functions/restart";
import getRandomColumn from "../functions/getRandomColumn";
import GameIcon from "./GameIcon";

import Rules from "./Rules";
import WinnerModal from "./WinnerModal";
import Player1Score from "./Player1Score";
import Player2Score from "./Player2Score";

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

  // Restart the board when restart button is clicked
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

  // Fill a random cell when time is out for a player
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

  const handleClick = (columnIndex) => {
    handleColumnClick(
      columnIndex,
      board,
      player,
      setBoard,
      setPlayer,
      setWinner,
      winner,
      setScore,
      score
    );
  };

  return (
    <div>
      <div className="board-page">
        <header className="header">
          <button className="header_button menu-button">menu</button>
          <GameIcon />
          <button
            className="header_button restart-button"
            onClick={() => restart(setPlayer, gameNo, setGameNo, setWinner)}
          >
            restart
          </button>
        </header>
        <div className="pointer_svg"></div>
        <div className="board">
          {board.map((column, i) => (
            <div className="pointer_column">
              <div className="pointer_svg">
                <svg
                  width="35"
                  height="29"
                  viewBox="0 0 35 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4004 25.5326L4.90035 19.984C2.77894 18.5992 1.5 16.237 1.5 13.7036V9C1.5 4.85787 4.85787 1.5 9 1.5L26 1.5C30.1421 1.5 33.5 4.85786 33.5 9V13.7036C33.5 16.237 32.2211 18.5992 30.0996 19.984L21.5996 25.5326C19.1084 27.1588 15.8916 27.1588 13.4004 25.5326Z"
                    fill={player === 1 ? "#FC6787" : "#FFCE67"}
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <div
                key={i}
                onClick={() => handleClick(i)}
                className={`board-column board-column-${i}`}
              >
                {column.map((cell, j) => (
                  <div
                    className={`cell ${
                      cell === 0
                        ? ""
                        : cell === 1
                        ? "player-1_piece drop-animation"
                        : "player-2_piece drop-animation"
                    }`}
                    key={j}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="board-svg"></div>
        {winner === 0 && (
          <div className="turn-timer_svg">
            <svg
              width="184"
              height="140"
              viewBox="0 0 184 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.609 4.04032L168.02 32.7781C176.498 36.3925 182 44.7191 182 53.9358V115C182 127.703 171.703 138 159 138H25C12.2975 138 2 127.703 2 115V53.8708C2 44.6845 7.46635 36.3791 15.9038 32.746L82.493 4.07311C88.2729 1.58434 94.8201 1.57248 100.609 4.04032Z"
                fill={player === 1 ? "#FC6787" : "#FFCE67"}
                stroke="black"
                stroke-width="4"
              />
            </svg>
          </div>
        )}
        {winner === 0 && (
          <div className="player-turn-timer">
            <div className="player_turn">PLAYER {player}'S TURN</div>
            <Stopwatch
              player={player}
              handleClick={handleClick}
              board={board}
              key={gameNo}
              changeTurn={changeTurn}
              winner={winner}
            />
          </div>
        )}

        <div className="player-1_score-card">
          <Player1Score score={score} />
        </div>
        <div className="player-2_score-card">
          <Player2Score score={score} />
        </div>
        <div className="winner_modal-window">
          {winner !== 0 && (
            <WinnerModal
              winner={winner}
              setPlayer={setPlayer}
              gameNo={gameNo}
              setGameNo={setGameNo}
              setWinner={setWinner}
            />
          )}
        </div>
      </div>
      <div
        className={`footer-platform ${
          winner === 0
            ? ""
            : winner === 1
            ? "winner_player-1"
            : "winner_player-2"
        }`}
      ></div>
    </div>
  );
}
