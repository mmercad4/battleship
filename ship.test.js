import { Ship } from "./src/components/ship";

const destroyer = new Ship(5);

test.skip("Length of ship is 5", () => {
  expect(destroyer.length).toBe(5);
});

test.skip("Destroyer was hit Once", () => {
  destroyer.hitArray = [];
  destroyer.hit();
  expect(destroyer.hitArray.length).toBe(1);
});

test.skip("Destroyer was hit three times", () => {
  destroyer.hitArray = [];
  destroyer.hit();
  destroyer.hit();
  destroyer.hit();

  expect(destroyer.hitArray.length).toBe(3);
});

test.skip("Destroyer was sunk", () => {
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
  console.log(destroyer.hitArray);
  expect(destroyer.sunk).toBeTruthy();
});
