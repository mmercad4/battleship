import { Gameboard } from "./src/components/Gameboard";
import { Ship } from "./src/components/ship";

const gameboard = new Gameboard();
const destroyer = new Ship("destroyer", 5);

test("Gameboard is 100 squares", () => {
  gameboard.gameboard;
  expect(gameboard.gameboard.length).toBe(100);
});

test("Destroyer was placed on index 0", () => {
  gameboard.placeShip(destroyer, 0);
  expect(destroyer.placementArray).toEqual([0, 10, 20, 30, 40]);
  destroyer.resetShip();
  gameboard.rePopulateGameboard();
});

test("Destroyer was placed on index 34", () => {
  gameboard.placeShip(destroyer, 34);
  expect(destroyer.placementArray).toEqual([34, 44, 54, 64, 74]);
  destroyer.resetShip();
  gameboard.rePopulateGameboard();
});

test("Destroyer was placed on an index that exceeds the board", () => {
  gameboard.placeShip(destroyer, 60);
  expect(destroyer.placementArray).toEqual(["ERROR BOARD EXCEEDED"]);
  gameboard.rePopulateGameboard();
});

test("Square already used", () => {
  gameboard.placeShip(destroyer, 34);
  gameboard.receiveAttack(34);
  expect(gameboard.receiveAttack(34)).toBe("already used");
  destroyer.resetShip();
});

test("Attack hit", () => {
  gameboard.placeShip(destroyer, 34);
  gameboard.receiveAttack(34);
  expect(gameboard.gameboard[34].hit).toBeTruthy();
  destroyer.resetShip();
});

test("Attack missed", () => {
  gameboard.placeShip(destroyer, 34);
  gameboard.receiveAttack(10);
  expect(gameboard.gameboard[10].miss).toBeTruthy();
  destroyer.resetShip();
});

test("Attack hit registered on ship", () => {
  gameboard.placeShip(destroyer, 34);
  gameboard.receiveAttack(34);
  console.log(destroyer);
  expect(destroyer.hitArray.includes(34)).toBeTruthy();
  destroyer.resetShip();
});
