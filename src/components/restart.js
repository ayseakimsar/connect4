export function restart(setPlayer, gameNo, setGameNo) {
  console.log("GAME RESTARTED");
  // set board
  // set player
  if (gameNo % 2 === 0) setPlayer(1);
  else setPlayer(2);
  // set stopwatch
  setGameNo((n) => n + 1);
}
