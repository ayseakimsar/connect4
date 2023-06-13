export function findFirstEmptyCell(board, columnIndex) {
  const firstEmptyCell = board[columnIndex].findIndex(
    (element) => element === 0
  );
  return firstEmptyCell;
}
