import Checker from '../Checker/Checker';

function Edges() {
    this.right = (gridSize) => {
        const edgesMap = {};
        for (let i = 0; i < gridSize; i += Math.sqrt(gridSize)) {
            if (!edgesMap[i]) {
                edgesMap[i] = i;
            }
        }
        return edgesMap;
    }

    this.left = (gridSize) => {
        const edgesMap = {};
        for (let i = 0; i < gridSize; i += Math.sqrt(gridSize)) {
            if (!edgesMap[i]) {
                edgesMap[i] = i;
            }
        }
        return edgesMap;
    }
}

function initializeCheckers(state) {
    const gridSize = state.size.row * state.size.column;
    const squares = Array(gridSize).fill(null);
    const top = Math.sqrt(gridSize) * 2;
    const bottom = gridSize - top;

    for (let i = 0; i < top; i ++) {
        squares[i] = new Checker({ player: 'player1', coordinates: { i: i } }, top);
        squares[i + bottom] = new Checker({ player: 'player2', coordinates: { i: i + bottom } }, bottom);
    }

    return squares;
}

export default initializeCheckers;