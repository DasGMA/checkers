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

    const toggleCell = () => {

    }

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
                        coordinates={{i: i, j: j}}
                        toggleCell={toggleCell}
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
                if (value > 0) {
                    setSize(size => ({...size, row: value, column: value}));
                }
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

            case 'top-shape':
                setShape(shape => ({
                    ...shape,
                    top: {
                        ...shape.top, shape: value
                    }
                }));
                return;
            case 'bottom-shape':
                setShape(shape => ({
                    ...shape,
                    bottom: {
                        ...shape.bottom, shape: value
                    }
                }));
                return;
            default: 
                return;
        }
    }

    return (
        <div className='checker-board'>
            <div>
                <label style={{color: 'white'}}>Select top color</label>
                <select
                    name='top-shape-color'
                    onChange={handleChange}
                >
                    <option value='red'>Select color</option>
                    <option value='blue'>Blue</option>
                    <option value='yellow'>Yellow</option>
                </select>

                <label style={{color: 'white'}}>Select top shape</label>
                <select
                    name='top-shape'
                    onChange={handleChange}
                >
                    <option value='circle'>Select shape</option>
                    <option value='square'>Square</option>
                    <option value='oval'>Oval</option>
                </select>
            </div>
            <div className='board'>
                {renderBoard()}
            </div>
            <div>
                <label style={{color: 'white'}}>Select bottom color</label>
                <select
                    name='bottom-shape-color'
                    onChange={handleChange}
                >
                    <option value='black'>Select color</option>
                    <option value='green'>Green</option>
                    <option value='pink'>Pink</option>
                </select>

                <label style={{color: 'white'}}>Select bottom shape</label>
                <select
                    name='bottom-shape'
                    onChange={handleChange}
                >
                    <option value='circle'>Select shape</option>
                    <option value='square'>Square</option>
                    <option value='oval'>Oval</option>
                </select>
            </div>
            <div>
                <p style={{color: 'white'}}>CHANGE BOARD SIZE</p>
                <input 
                    type='number'
                    value={size.column}
                    onChange={handleChange}
                    name='gridSize'
                />
            </div>
        </div>
    )
}