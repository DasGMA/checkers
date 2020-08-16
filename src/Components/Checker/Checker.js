
export default function Checker({ player, coordinates }) {
    this.player = player;
    this.coordinates = coordinates;
    
    this.move = (newCoordinates) => {
        return this.coordinates = { i: newCoordinates };
    }
}