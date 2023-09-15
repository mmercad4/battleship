import { Player } from "./Player";
import { Gameboard } from "./Gameboard";

class Game {
  constructor() {
    this.gameStarted = false;
    this.player1;
    this.player1GameBoard;
    this.cpu;
    this.cpuGameBoard;
  }

  startGame(event) {
    this.gameStarted = true;
    this.player1 = new Player(
      event.target.parentNode.querySelector("input").value
    );
    this.player1GameBoard = new Gameboard();
    this.player1.gameboard = this.player1GameBoard;

    this.cpu = new Player("CPU");
    this.cpuGameBoard = new Gameboard();
    this.cpu.gameboard = this.cpuGameBoard;
  }
}

export { Game };

const player1 = new Player("Marco");
const player1Gameboard = new Gameboard();

const player2 = new Player();
const player2Gameboard = new Gameboard();

player1.gameboard = player1Gameboard;
player2.gameboard = player2Gameboard;