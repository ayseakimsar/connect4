export function updateScore(score, winner) {
  if (winner === 0) {
    return [score[0], score[1]];
  } else if (winner === 1) {
    return [score[0] + 1, score[1]];
  } else if (winner === 2) {
    return [score[0], score[1] + 1];
  } else return score;
}
