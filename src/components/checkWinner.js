export function checkWinner(board, columnIndex, lastUpdatedCell) {
  const x = columnIndex;
  const y = lastUpdatedCell;

  //// COlUMNS
  for (let y = 0; y < 3; y++) {
    if (
      board[x][y] === board[x][y + 1] &&
      board[x][y + 1] === board[x][y + 2] &&
      board[x][y + 2] === board[x][y + 3] &&
      board[x][y] !== 0
    ) {
      if (board[x][y] === 1) return 1;
      else return 2;
    }
  }

  /// ROWS
  for (let x = 0; x < 4; x++) {
    if (
      board[x][y] === board[x + 1][y] &&
      board[x + 1][y] === board[x + 2][y] &&
      board[x + 2][y] === board[x + 3][y] &&
      board[x][y] !== 0
    ) {
      if (board[x][y] === 1) return 1;
      else return 2;
    }
  }

  /// DIAGONALS

  if (x <= y && y - x < 3) {
    let i = 0;
    let j = y - x;
    while (j <= 5) {
      if (
        board[i][j] === board[i + 1][j + 1] &&
        board[i + 1][j + 1] === board[i + 2][j + 2] &&
        board[i + 2][j + 2] === board[i + 3][j + 3] &&
        board[i][j] !== 0
      ) {
        if (board[i][j] === 1) return 1;
        else return 2;
      }
      i++;
      j++;
    }
  } else if (x > y && x - y <= 3) {
    let j = 0;
    let i = x - y;

    while (i <= 3) {
      if (
        board[i][j] === board[i + 1][j + 1] &&
        board[i + 1][j + 1] === board[i + 2][j + 2] &&
        board[i + 2][j + 2] === board[i + 3][j + 3] &&
        board[i][j] !== 0
      ) {
        if (board[i][j] === 1) return 1;
        else return 2;
      }
      i++;
      j++;
    }
  }

  /// ANTI-DIAGONALS
  if (x + y >= 2 && x + y <= 5) {
    let i = 0;
    let j = x + y;

    while (j >= 3) {
      if (
        board[i][j] === board[i + 1][j - 1] &&
        board[i + 1][j - 1] === board[i + 2][j - 2] &&
        board[i + 2][j - 2] === board[i + 3][j - 3] &&
        board[i][j] !== 0
      ) {
        if (board[i][j] === 1) return 1;
        else return 2;
      }
      i++;
      j--;
    }
  } else if (x + y >= 6 && x + y <= 8) {
    let j = 5;
    let i = x + y - 5;

    while (i <= 3) {
      if (
        board[i][j] === board[i + 1][j - 1] &&
        board[i + 1][j - 1] === board[i + 2][j - 2] &&
        board[i + 2][j - 2] === board[i + 3][j - 3] &&
        board[i][j] !== 0
      ) {
        if (board[i][j] === 1) return 1;
        else return 2;
      }
      i++;
      j--;
    }
  }
  return 0;
}
