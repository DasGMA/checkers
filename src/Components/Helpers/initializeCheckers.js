import Checker from '../Checker/Checker';

function initializeCheckers(state) {
    const gridSize = state.size.row * state.size.column;
    const squares = Array(gridSize).fill(null);
    const top = Math.sqrt(gridSize) * 2;
    const bottom = gridSize - top;

    for (let i = 0; i < top; i ++) {
        squares[i] = new Checker({ player: 'player1' });
        squares[i + bottom] = new Checker({ player: 'player2'});
    }

    return squares;
}

export default initializeCheckers;