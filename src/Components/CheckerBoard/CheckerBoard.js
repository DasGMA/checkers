import React from 'react';
import BoardCell from './BoardCell';
import '../../Styles/checkerBoard.scss';

export default function CheckerBaord({ state, setState, toggleChecker, save, reset, start }) {

    const renderCell = (index, squareColor) => {
        return <BoardCell 
                    key = {index} 
                    black={squareColor}
                    player={state.checkers[index] ? state.checkers[index].player : null}
                    coordinates={state.checkers[index] ? state.checkers[index].coordinates.i : index}
                    state={state}
                    toggleChecker={() => toggleChecker(index)}
                />
    }

    const renderBoard = () => {
        let newGrid = [];
        let row = [];

        for (let i = 0; i < state.size.column; i ++) {
            for (let j = 0; j < state.size.row; j ++) {
                const squareColor = (i % 2 === 0 && j % 2 === 0) || (!(i % 2 === 0) && !(j % 2 === 0));
                row.push(renderCell((j * state.size.row) + i, squareColor));
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
                if (value > 4) {
                    setState(state => ({
                        ...state,
                        size: {
                            ...state.size, row: value, column: value
                        }
                    }));
                }
                return;
            case 'top-shape-color':
                setState(state => ({
                    ...state,
                    shape: {
                        ...state.shape,
                        top: {
                            ...state.shape.top, color: value
                        }
                    }
                }));
                return;
            case 'bottom-shape-color':
                setState(state => ({
                    ...state,
                    shape: {
                        ...state.shape,
                        bottom: {
                            ...state.shape.bottom, color: value
                        }
                    }
                }));
                return;

            case 'top-shape':
                setState(state => ({
                    ...state,
                    shape: {
                        ...state.shape,
                        top: {
                            ...state.shape.top, shape: value
                        }
                    }
                }));
                return;
            case 'bottom-shape':
                setState(state => ({
                    ...state,
                    shape: {
                        ...state.shape,
                        bottom: {
                            ...state.shape.bottom, shape: value
                        }
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
                    value={state.size.column}
                    onChange={handleChange}
                    name='gridSize'
                />
            </div>
            <div>
                <button onClick={start}>START</button>
                <button onClick={save}>SAVE</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )
}