import { updateBoard } from "./updateBoard";
import { findFirstEmptyCell } from "./findFirstEmptyCell";
import { checkWinner } from "./checkWinner";
import { checkTie } from "./checkTie";

export function handleColumnClick(
  columnIndex,
  board,
  player,
  setBoard,
  setPlayer,
  score,
  setScore,
  winner,
  setWinner
) {
  const firstEmptyCell = findFirstEmptyCell(board, columnIndex);
  if (firstEmptyCell === -1) return;

  const updatedBoard = updateBoard(board, player, columnIndex, firstEmptyCell);
  const isTie = checkTie();
  setWinner(checkWinner(updatedBoard, columnIndex, firstEmptyCell));

  setBoard(() => updatedBoard);
  setPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
}
