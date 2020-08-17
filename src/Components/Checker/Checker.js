import possibleMoves from "../Helpers/possibleMoves";
import move from "../Helpers/move";

export default function Checker({ player, coordinates, edges }) {
    this.player = player;
    this.coordinates = coordinates;
    this.edges = edges;
}

Checker.prototype.move = move;
Checker.prototype.possibleMoves = possibleMoves;