export function updateBoard(board, player, columnIndex, firstEmptyCell) {
  const updatedBoard = [...board];
  updatedBoard[columnIndex][firstEmptyCell] = player;
  return updatedBoard;
}
