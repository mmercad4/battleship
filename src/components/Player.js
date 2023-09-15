class Player {
  constructor(name) {
    this.turn = false;
    this.gameboard = [];
    this.name = name;
  }

  attack(index, player) {
    player.recieveAttack(index);
  }
}

export { Player };
