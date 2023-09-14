class Ship {
  constructor(length) {
    this.length = length;
    this.hitArray = [];
    this.sunk = false;
    this.placementArray = [];
  }

  hit() {
    if (this.sunk === true) return;
    this.hitArray.push("x");
  }

  isSunk() {
    if (this.hitArray.length === this.length) {
      this.sunk = true;
    }
  }
}

export { Ship };
