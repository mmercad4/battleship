import { Game } from "./src/components/Game";

const game = new Game();

test("has game started", () => {
  game.startGame();
  console.log(game.gameStarted);
  expect(game.gameStarted).toBeTruthy();
});
