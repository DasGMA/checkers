
export default function Checker({ player, coordinates }) {
    this.player = player;
    this.coordinates = coordinates;
    this.possibleMoves = () => {
        let arr = [];
        let count = 0;
        if (player === 'player1') {
            while(count !== 4) {
                arr.push(this.coordinates.i + 7 + count);
                count += 2;
            }
            return arr;
        } else {
            while(count !== 4) {
                arr.push(this.coordinates.i - 7 - count);
                count += 2;
            }
            return arr;
        }
        
    }
    
    this.move = (newCoordinates) => {
        return this.coordinates = { i: newCoordinates };
    }
}