import React from 'react';
import '../../Styles/cell.scss'


export default function BoardCell({ black, toggleChecker, player, state, coordinates}) {
    const selected = coordinates === state.selectedChecker && 'selected';
    const { possibleMoves } = state;
    const possibleMove = possibleMoves.includes(coordinates) && 
                            <div className='shape circle possible'></div>;

    const checkerStyle = () => {
        if (player === 'player1') {
            return `shape ${state.shape.top.shape} ${state.shape.top.color} ${selected}`;
        } else if (player === 'player2') {
            return `shape ${state.shape.bottom.shape} ${state.shape.bottom.color} ${selected}`;
        }
    }

    return (
        <div 
            className = {black ? 'cell ebony' : 'cell white'}
            onClick = {toggleChecker}
        >
            <div className={checkerStyle()} ></div>
            { possibleMove }
        </div>
    )
}

