import React from 'react';
import '../../Styles/cell.scss'


export default function BoardCell({ black, toggleChecker, checker, state}) {
    
    const checkerStyle = () => {
        if (checker === 'player1') {
            return `shape ${state.shape.top.shape} ${state.shape.top.color}`;
        } else if (checker === 'player2') {
            return `shape ${state.shape.bottom.shape} ${state.shape.bottom.color}`;
        }
    }
    
    return (
        <div 
            className = {black ? 'cell ebony' : 'cell white'}
            onClick = {toggleChecker}
        >
            <div className={checkerStyle()}></div>
        </div>
    )
}

