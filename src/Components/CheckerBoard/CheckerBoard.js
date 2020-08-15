import React, {useState} from 'react';
import BoardCell from './BoardCell';
import '../../Styles/checkerBoard.scss';

export default function CheckerBaord() {
    const [size, setSize] = useState({ row: 8, column: 8 });
    const [shape, setShape] = useState({
        top: {
            shape: 'circle',
            color: 'red'
        },
        bottom: {
            shape: 'circle',
            color: 'black'
        }
    });

    const renderBoard = () => {
        let newGrid = [];
        let row = [];

        for (let i = 0; i < size.column; i ++) {
            for (let j = 0; j < size.row; j ++) {
                row.push(
                    <BoardCell 
                        key = {[i, j]} 
                        black={(i + j)%2 === 0} 
                        first={j < 2} 
                        last={size.column - j === 1 || size.column - j === 2}
                        shape={shape}
                    />
                );
            }
            
            newGrid.push(<div className="row" key={i}>{row}</div>);
            row = [];
        }
       
        return newGrid;
    }

    const handleChange = (event) => {
        const {value, name} = event.target;

        switch(name) {
            case 'gridSize':
                setSize(size => ({...size, row: value, column: value}));
                return;
            case 'top-shape-color':
                setShape(shape => ({
                    ...shape,
                    top: {
                        ...shape.top, color: value
                    }
                }));
                return;
            case 'bottom-shape-color':
                setShape(shape => ({
                    ...shape,
                    bottom: {
                        ...shape.bottom, color: value
                    }
                }));
                return;
            default: 
                return;
        }
    }

console.log(shape)

    return (
        <div className='checker-board'>
            <div className='board'>
            {renderBoard()}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label style={{color: 'white'}}>CHANGE BOARD SIZE</label>
                <input 
                    type='number'
                    value={size.column}
                    onChange={handleChange}
                    name='gridSize'
                />

               <div style={{background: 'white'}}>
                    <label>Select top color</label>
                    <select
                        name='top-shape-color'
                        onChange={handleChange}
                    >
                        <option value='red'>Select color</option>
                        <option value='blue'>Blue</option>
                        <option value='yellow'>Yellow</option>
                    </select>

                    <label>Select top color</label>
                    <select
                        name='bottom-shape-color'
                        onChange={handleChange}
                    >
                        <option value='black'>Select color</option>
                        <option value='green'>Green</option>
                        <option value='pink'>Pink</option>
                    </select>
                </div>

                {/* <div style={{background: 'white'}}>
                    <p>Select shapes</p>
                    <input
                        type='radio'
                        value='Red'
                    />
                </div> */}
            </div>
        </div>
    )
}