import { render } from "@testing-library/react";
import Board from "./Board";
import { updateBoard } from "./updateBoard";
import { findFirstEmptyCell } from "./findFirstEmptyCell";

describe("Board component", () => {
  test("board is rendered without any error", () => {
    const { container } = render(<Board />);
    expect(container).toBeInTheDocument();
  });

  test("first empty cell is found correctly", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    const columnIndex = 1;

    expect(findFirstEmptyCell(board, columnIndex)).toBe(2);
  });
  test("updateBoard function updates board correctly", () => {
    const board = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 1, 2, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    const columnIndex = 2;
    const player = 2;
    const firstEmptyCell = 4;
    const updatedBoard = updateBoard(
      board,
      player,
      columnIndex,
      firstEmptyCell
    );

    const expectedBoard = [
      [1, 0, 0, 0, 0, 0],
      [2, 1, 0, 0, 0, 0],
      [2, 1, 2, 1, 2, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    expect(updatedBoard).toEqual(expectedBoard);
  });
});
