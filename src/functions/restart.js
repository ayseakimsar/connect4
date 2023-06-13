export function restart(setPlayer, gameNo, setGameNo, setWinner) {
  if (gameNo % 2 === 0) setPlayer(1);
  else setPlayer(2);

  setGameNo((n) => n + 1);
  setWinner(0)
  console.log("GAME RESTARTED");
}
