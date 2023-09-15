import { Ship } from "./src/components/Ship.js";

const destroyer = new Ship("destroyer", 5);

test("Length of ship is 5", () => {
  expect(destroyer.length).toBe(5);
});

test("Destroyer was hit Once", () => {
  destroyer.hitArray = [];
  destroyer.hit();
  expect(destroyer.hitArray.length).toBe(1);
});

test("Destroyer was hit three times", () => {
  destroyer.hitArray = [];
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();

  expect(destroyer.hitArray.length).toBe(3);
});

test("Destroyer was sunk", () => {
  destroyer.hitArray = [];
  destroyer.hit();
  destroyer.isSunk();
  destroyer.hit();
  destroyer.isSunk();
  destroyer.hit();
  destroyer.isSunk();
  destroyer.hit();
  destroyer.isSunk();
  destroyer.hit();
  destroyer.isSunk();
  expect(destroyer.sunk).toBeTruthy();
});
