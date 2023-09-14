class Gameboard {
  constructor() {
    this.gameboard = [];
    this.populateGameboard();
  }

  populateGameboard() {
    for (let i = 0; i < 100; i++) {
      this.gameboard.push(i);
    }
  }

  placeShip(ship, index) {
    let placementIndex = index;

    for (let i = 0; i < ship.length; i++) {
      if (index + (ship.length - 1) * 10 > 99)
        return ship.placementArray.push("ERROR BOARD EXCEEDED");
      this.gameboard[placementIndex] = "O";
      ship.placementArray.push(placementIndex);
      placementIndex += 10;
    }
  }
}

export { Gameboard };
