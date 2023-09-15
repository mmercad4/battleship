class Player {
  constructor() {
    this.turn = false;
    this.gameboard = [];
  }

  attack(index, player) {
    player.recieveAttack(index);
  }
}

export { Player };
