export default function possibleMoves() {
    let arr = [];
    let count = 0;
    const edges = {...this.edges.right, ...this.edges.left};

    if (this.player === 'player1') {
        while(count !== 4) {
            arr.push(this.coordinates.i + 7 + count);
            count += 2;
        }
        
    } else {
        while(count !== 4) {
            arr.push(this.coordinates.i - 7 - count);
            count += 2;
        }
    }

    if (edges[this.coordinates.i] && edges[arr[0]]) {
        arr.shift();
        return arr;
    } else if (edges[this.coordinates.i] && edges[arr[1]]) {
        arr.pop();
        return arr;
    }
    
    return arr;
}