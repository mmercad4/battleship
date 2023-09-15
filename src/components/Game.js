class Game {
  constructor() {
    this.gameStarted = false;
  }

  startGame() {
    this.gameStarted = true;
    console.log("game started");
  }
}

export { Game };
