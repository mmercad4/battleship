import { Gameboard } from "./src/components/Gameboard";
import { Ship } from "./src/components/ship";

const gameboard = new Gameboard();
const destroyer = new Ship(5);

test("Gameboard is 100 squares", () => {
  gameboard.gameboard;
  expect(gameboard.gameboard.length).toBe(100);
});

test("Destroyer was placed on index 0", () => {
  gameboard.placeShip(destroyer, 0);
  expect(destroyer.placementArray).toEqual([0, 10, 20, 30, 40]);
  destroyer.placementArray = [];
});

test("Destroyer was placed on index 34", () => {
  gameboard.placeShip(destroyer, 34);
  expect(destroyer.placementArray).toEqual([34, 44, 54, 64, 74]);
  destroyer.placementArray = [];
});

test("Destroyer was placed on an index that exceeds the board", () => {
  gameboard.placeShip(destroyer, 60);
  console.log(destroyer);
  expect(destroyer.placementArray).toEqual(["ERROR BOARD EXCEEDED"]);
});
