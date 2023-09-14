import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.gameboard = [];
    this.allShipsSunk = false;
    this.populateGameboard();
    const carrier = new Ship("Carrier", 5);
    const battleship = new Ship("Battleship", 4);
    const cruiser = new Ship("Cruiser", 3);
    const submarine = new Ship("Submarine", 3);
    const destroyer = new Ship("Destroyer", 2);
    this.ships = [carrier, battleship, cruiser, submarine, destroyer];
  }

  populateGameboard() {
    for (let i = 0; i < 100; i++) {
      const square = {
        index: i,
        hit: false,
        miss: false,
        shipPlaced: false,
        ship: null,
      };

      this.gameboard.push(square);
    }
  }

  rePopulateGameboard() {
    this.gameboard = [];
    this.populateGameboard();
  }

  placeShip(ship, index) {
    let placementIndex = index;

    if (index + (ship.length - 1) * 10 > 99)
      return ship.placementArray.push("ERROR BOARD EXCEEDED");

    for (let i = 0; i < ship.length; i++) {
      this.gameboard[placementIndex].shipPlaced = true;
      this.gameboard[placementIndex].ship = ship;
      this.gameboard[placementIndex].ship.placementArray.push(placementIndex);
      placementIndex += 10;
    }
  }

  receiveAttack(index) {
    if (
      this.gameboard[index].hit === true ||
      this.gameboard[index].miss === true
    )
      return "already used";

    if (this.gameboard[index].shipPlaced === true) {
      this.gameboard[index].hit = true;
      this.gameboard[index].ship.hit(index);
    } else if (this.gameboard[index].shipPlaced === false) {
      this.gameboard[index].miss = true;
    }
  }

  haveAllShipsSunk() {
    let counter = 0;
    console.log(this.ships);
    this.ships.forEach((ship) => {
      if (ship.sunk === true) {
        counter++;
      }
    });

    if (counter === 5) this.allShipsSunk = true;
  }
}

export { Gameboard };

// X hit
// O placed
// M Missed
