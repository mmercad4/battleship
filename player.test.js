import { Player } from "./src/components/Player";
import { Gameboard } from "./src/components/Gameboard";

const player1 = new Player();
const player1Gameboard = new Gameboard();

const player2 = new Player();
const player2Gameboard = new Gameboard();

player1.gameboard = player1Gameboard;
player2.gameboard = player2Gameboard;

test("player1 gameboard is matching gameboard", () => {
  player1.gameboard.placeShip(player1.gameboard.ships[2], 0);
  expect(player1.gameboard.ships[2].placementArray).toEqual([0, 10, 20]);
  player1.gameboard.ships[2].resetShip();
  player1.gameboard.rePopulateGameboard();
});

test("player1 can attack player2", () => {
  player1.attack(5, player2);
  expect(player2.gameboard[5].hit).toBeTruthy();
});
