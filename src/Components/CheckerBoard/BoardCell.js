import React from 'react';
import '../../Styles/cell.scss'


export default function BoardCell({ first, last, shape, black, toggleCell, coordinates}) {
    const { top, bottom } = shape;

    const renderShape = () => {
         if(first) {
           return  <div 
                        className={`shape ${top.shape} ${top.color}`}
                        onClick = {() => toggleCell(coordinates)}
                    ></div>
        }

        if(last) {
            return  <div 
                        className={`shape ${bottom.shape} ${bottom.color}`}
                        onClick = {() => toggleCell(coordinates)}
                    ></div>
         }
    }

    return (
        <div className = {black ? 'cell ebony' : 'cell white'}>
            {renderShape()}
        </div>
    )
}

