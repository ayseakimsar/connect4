export function checkTie(board, winner) {
  if (winner !== 0) return false;
  for (let i = 6; i > 0; i--) {
    for (let j = 5; j > 0; j--) {
      if (board[i][j] === 0) return false;
      else return true;
    }
  }
}
