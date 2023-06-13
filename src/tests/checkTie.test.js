import { checkTie } from "../functions/checkTie";
describe("checking tie", () => {
  test("board is filled, and no winner", () => {
    const board = [
      [1, 1, 2, 1, 2, 2],
      [2, 1, 1, 2, 1, 2],
      [1, 2, 2, 1, 2, 1],
      [2, 1, 1, 1, 2, 2],
      [1, 2, 1, 1, 2, 1],
      [1, 1, 2, 2, 1, 2],
      [2, 2, 1, 1, 2, 2],
    ];
    const checkWinner = 0;
    expect(checkTie(board, checkWinner)).toBe(true);
    // test for a board that contains empty cell
    // test for a board that does not contain any empty cell and checkwinner return 0
  });
  test("board is not filled, and no winner", () => {
    const board = [
      [1, 1, 2, 1, 2, 2],
      [2, 1, 1, 2, 1, 0],
      [1, 2, 2, 0, 0, 0],
      [2, 1, 1, 1, 2, 0],
      [1, 2, 1, 1, 0, 0],
      [1, 1, 2, 2, 1, 0],
      [2, 2, 1, 1, 2, 0],
    ];
    const checkWinner = 0;
    expect(checkTie(board, checkWinner)).toBe(false);
  });

  test("board is filled, and there is a winner", () => {
    const board = [
      [1, 1, 2, 1, 2, 2],
      [2, 1, 1, 2, 1, 2],
      [1, 2, 2, 1, 2, 1],
      [2, 1, 1, 1, 2, 2],
      [1, 2, 1, 2, 2, 1],
      [1, 1, 2, 2, 1, 2],
      [2, 2, 1, 1, 2, 2],
    ];
    const checkWinner = 2;
    expect(checkTie(board, checkWinner)).toBe(false);
  });

  test("board is not filled and there is winner", () => {
    const board = [
      [1, 1, 2, 1, 2, 2],
      [2, 1, 1, 2, 1, 0],
      [1, 2, 2, 0, 0, 0],
      [2, 1, 1, 1, 2, 0],
      [1, 2, 1, 1, 0, 0],
      [1, 1, 2, 2, 1, 0],
      [2, 2, 1, 2, 2, 0],
    ];
    const checkWinner = 2;
    expect(checkTie(board, checkWinner)).toBe(false);
  });
});
