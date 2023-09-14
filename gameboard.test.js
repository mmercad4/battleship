import { Gameboard } from "./src/components/Gameboard";
import { Ship } from "./src/components/ship";

const gameboard = new Gameboard();
const destroyer = new Ship(5);

test("Gameboard is 100 squares", () => {
  gameboard.gameboard;
  expect(gameboard.gameboard.length).toBe(100);
});

test("Carrier was placed on index 0", () => {
  gameboard.placeShip(gameboard.ships[0], 0);
  expect(gameboard.ships[0].placementArray).toEqual([0, 10, 20, 30, 40]);
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("Carrier was placed on index 34", () => {
  gameboard.placeShip(gameboard.ships[0], 34);
  expect(gameboard.ships[0].placementArray).toEqual([34, 44, 54, 64, 74]);
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("Carrier was placed on an index that exceeds the board", () => {
  gameboard.placeShip(gameboard.ships[0], 60);
  expect(gameboard.ships[0].placementArray).toEqual(["ERROR BOARD EXCEEDED"]);
  gameboard.rePopulateGameboard();
});

test("Cruiser was placed on index 0", () => {
  gameboard.placeShip(gameboard.ships[2], 0);
  expect(gameboard.ships[2].placementArray).toEqual([0, 10, 20]);
  gameboard.ships[2].resetShip();
  gameboard.rePopulateGameboard();
});

test("Cruiser was placed on index 34", () => {
  gameboard.placeShip(gameboard.ships[2], 34);
  expect(gameboard.ships[2].placementArray).toEqual([34, 44, 54]);
  gameboard.ships[2].resetShip();
  gameboard.rePopulateGameboard();
});

test("Cruiser was placed on an index that exceeds the board", () => {
  gameboard.placeShip(gameboard.ships[2], 90);
  expect(gameboard.ships[2].placementArray).toEqual(["ERROR BOARD EXCEEDED"]);
  gameboard.ships[2].resetShip();
  gameboard.rePopulateGameboard();
});

test("Square already used", () => {
  gameboard.placeShip(gameboard.ships[0], 34);
  gameboard.receiveAttack(34);
  expect(gameboard.receiveAttack(34)).toBe("already used");
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("Attack hit on board", () => {
  gameboard.placeShip(gameboard.ships[0], 34);
  gameboard.receiveAttack(34);
  expect(gameboard.gameboard[34].hit).toBeTruthy();
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("Attack missed on board", () => {
  gameboard.placeShip(gameboard.ships[0], 34);
  gameboard.receiveAttack(10);
  expect(gameboard.gameboard[10].miss).toBeTruthy();
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("Attack hit registered on ship", () => {
  gameboard.placeShip(gameboard.ships[0], 34);
  gameboard.receiveAttack(34);
  expect(gameboard.ships[0]).toBeTruthy();
  gameboard.ships[0].resetShip();
  gameboard.rePopulateGameboard();
});

test("After 2 attacks destroyer is sunk", () => {
  gameboard.placeShip(gameboard.ships[4], 34);
  gameboard.receiveAttack(34);
  gameboard.receiveAttack(44);
  expect(gameboard.ships[4].sunk).toBeTruthy();
  gameboard.ships[4].resetShip();
  gameboard.rePopulateGameboard();
});

test("All ships have sunk", () => {
  gameboard.ships.forEach((ship) => {
    ship.sunk = true;
  });
  gameboard.haveAllShipsSunk();
  expect(gameboard.allShipsSunk).toBeTruthy();
  gameboard.allShipsSunk = false;
});

test("All ships have not sunk", () => {
  expect(gameboard.allShipsSunk).toBeFalsy();
});
