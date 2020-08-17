import Checker from '../Checker/Checker';
import renderEdges from './renderEdges';

function initializeCheckers(state) {
    const gridSize = state.size.row * state.size.column;
    const squares = Array(gridSize).fill(null);
    const top = Math.sqrt(gridSize) * 2;
    const bottom = gridSize - top;
    const edges = renderEdges(gridSize);
    
    for (let i = 0; i < top; i ++) {
        squares[i] = new Checker({ player: 'player1', coordinates: { i: i }, edges}, top);
        squares[i + bottom] = new Checker({ player: 'player2', coordinates: { i: i + bottom }, edges}, bottom);
    }

    return squares;
}

export default initializeCheckers;