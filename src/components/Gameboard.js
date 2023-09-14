import { Ship } from "./ship";

class Gameboard {
  constructor() {
    this.gameboard = [];
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
      this.gameboard.ships[0].placementArray.push(placementIndex);
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
      this.gameboard[index].ship.hitArray.push(index);
    } else if (this.gameboard[index].shipPlaced === false) {
      this.gameboard[index].miss = true;
    }
    //go that index
    // determine if there is a ship there
    // if ship then hit
    //if no ship then miss
  }
}

export { Gameboard };

// X hit
// O placed
// M Missed
