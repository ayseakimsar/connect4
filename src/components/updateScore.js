export function updateScore(score, setScore, winner) {
  if (winner === 0) setScore([score[0], score[1]]);
  else if (winner === 1) setScore([score[0] + 1, score[1]]);
  else if (winner === 2) setScore([score[0], score[1] + 1]);
  else return;
}
