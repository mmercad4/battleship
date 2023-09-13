import { Board } from "./src/components/board";

const newBoard = Board();

newBoard.populateBoard();

test("Board is 10x10", () => {
  expect(newBoard.board.length).toBe(100);
});
