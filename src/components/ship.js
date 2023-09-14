class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitArray = [];
    this.sunk = false;
    this.placementArray = [];
  }

  hit(index) {
    if (this.sunk === true) return;
    this.hitArray.push(index);
  }

  isSunk() {
    if (this.hitArray.length === this.length) {
      this.sunk = true;
    }
  }

  resetShip() {
    this.hitArray = [];
    this.sunk = false;
    this.placementArray = [];
  }
}

export { Ship };
