import "./style.css";
import { DisplayController } from "./components/displayController";
import { Game } from "./components/Game";
import { Player } from "./components/Player";

const game = new Game();
const displayController = new DisplayController(game);
const player = new Player();

if (!game.gameStarted) {
  displayController.displayMainMenu(game, player);
}
