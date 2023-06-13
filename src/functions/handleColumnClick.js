import { updateBoard } from "./updateBoard";
import { findFirstEmptyCell } from "./findFirstEmptyCell";
import { checkWinner } from "./checkWinner";
import { checkTie } from "./checkTie";
import { updateScore } from "./updateScore";

export function handleColumnClick(
  columnIndex,
  board,
  player,
  setBoard,
  setPlayer,
  setWinner,
  winner,
  setScore,
  score
) {
  const firstEmptyCell = findFirstEmptyCell(board, columnIndex);
  if (firstEmptyCell === -1) return;
  const updatedBoard = updateBoard(board, player, columnIndex, firstEmptyCell);
  const updatedPlayer = player === 1 ? 2 : 1;
  const updatedWinner = checkWinner(updatedBoard, columnIndex, firstEmptyCell);
  const updatedScore = updateScore(score, updatedWinner);

  setBoard(updatedBoard);
  setPlayer(updatedPlayer);
  setWinner(updatedWinner);
  setScore(updatedScore);
}
