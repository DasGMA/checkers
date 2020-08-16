
export default function Checker({ player, coordinates }) {
    this.player = player;
    this.coordinates = coordinates;
    this.getPlayer = () => {
        return this.player;
    }
    this.getCoordinates = () => {
        return this.coordinates;
    }
}