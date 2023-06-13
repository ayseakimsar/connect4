import { checkWinner } from "../functions/checkWinner";

describe("Check if there is a winner", () => {
  // checking columns
  test("checking column-1", () => {
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

  // checking rows
  test("checking row-1", () => {
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

  test("checking row-2", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 1, 2, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });

  test("checking row-3", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
    ];
    const columnIndex = 6;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });

  test("checking row-4", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0],
    ];
    const columnIndex = 6;
    const lastUpdatedCell = 1;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(2);
  });

  test("checking row-5", () => {
    const board = [
      [2, 0, 0, 0, 0, 0],
      [1, 1, 2, 0, 0, 0],
      [1, 2, 2, 0, 0, 0],
      [1, 2, 2, 0, 0, 0],
      [2, 1, 2, 0, 0, 0],
      [1, 2, 1, 0, 0, 0],
      [1, 2, 1, 0, 0, 0],
    ];
    const columnIndex = 1;
    const lastUpdatedCell = 2;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(2);
  });
  test("checking row-6", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 3;
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
  test("checking diagonal-3", () => {
    const board = [
      [0, 2, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 2, 1, 0, 0],
      [0, 0, 0, 2, 1, 0],
      [0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 5;
    const lastUpdatedCell = 5;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(2);
  });

  test("checking diagonal-4", () => {
    const board = [
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 5;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
  test("checking diagonal-5", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 5;
    const lastUpdatedCell = 5;
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

  test("checking anti-diagonal-3", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [2, 2, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [2, 2, 1, 1, 0, 0],
      [2, 1, 1, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 6;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });

  test("checking anti-diagonal-4", () => {
    const board = [
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 1;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
  test("checking anti-diagonal-5", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 2, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 2, 0, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 5;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(2);
  });
  test("checking anti-diagonal-6", () => {
    const board = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 5;
    const lastUpdatedCell = 0;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
  test("not working on browser", () => {
    const board = [
      [1, 2, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0],
      [1, 2, 2, 1, 0, 0],
      [2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 3;
    const lastUpdatedCell = 3;
    expect(checkWinner(board, columnIndex, lastUpdatedCell)).toBe(1);
  });
});
