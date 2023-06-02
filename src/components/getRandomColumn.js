import { findFirstEmptyCell } from "./findFirstEmptyCell";

export default function getRandomColumn(board) {
  const randomColumn = Math.floor(Math.random() * 7);
  const isEmptyCell = findFirstEmptyCell(board, randomColumn);
  if (isEmptyCell !== -1) return randomColumn;
  else return getRandomColumn(board);
}
