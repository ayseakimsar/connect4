import { updateScore } from "./updateScore";

describe("score table", () => {
  test("player 1 wins", () => {
    const initialScore = [0, 0];
    const winner = 1;
    expect(updateScore(initialScore, winner)).toEqual([1, 0]);
  });

  test("player 2 wins", () => {
    const initialScore = [1, 2];
    const winner = 2;

    expect(updateScore(initialScore, winner)).toEqual([1, 3]);
  });

  test("tie", () => {
    const initialScore = [1, 2];
    const winner = 0;
    expect(updateScore(initialScore, winner)).toEqual([1, 2]);
  });
});
