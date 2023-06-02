import { checkWinner } from "./checkWinner";

describe("Check if there is a winner", () => {
  test("checking column", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 2, 0, 0, 0],
      [2, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 3;
    expect(checkWinner(board, columnIndex)).toBe(1);
  });
  test("checking row", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 5;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
  test("checking diagonal-1", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 2, 1, 0, 0, 0],
      [1, 1, 2, 1, 0, 0],
      [2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 3;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });

  test("checking diagonal-2", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 2, 2, 0, 0, 0],
      [1, 1, 2, 1, 0, 0],
      [1, 1, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 4;
    const lastUpdatedCell = 3;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(2);
  });
  test("checking anti-diagonal-1", () => {
    const board = [
      [1, 2, 1, 1, 0, 0],
      [2, 2, 1, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0],
    ];

    const columnIndex = 3;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });

  test("checking anti-diagonal-2", () => {
    const board = [
      [2, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0],
      [1, 2, 2, 1, 1, 1],
      [2, 2, 1, 0, 1, 0],
      [2, 1, 2, 1, 0, 0],
      [2, 2, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
    ];

    const columnIndex = 2;
    const lastUpdatedCell = 5;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
});
