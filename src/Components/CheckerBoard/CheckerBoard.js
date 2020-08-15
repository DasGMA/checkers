import React, {useState} from 'react';
import BoardCell from './BoardCell';
import '../../Styles/checkerBoard.scss';

export default function CheckerBaord() {
    const [size, setSize] = useState({ row: 8, column: 8 });

    const renderBoard = () => {
        let newGrid = [];
        let row = [];

        for (let i = 0; i < size.column; i ++) {
            for (let j = 0; j < size.row; j ++) {
                console.log(newGrid.length - j)
                row.push(
                    <BoardCell 
                        key = {[i, j]} 
                        black={(i + j)%2 === 0} 
                        first={j < 2} 
                        last={size.column - j === 1 || size.column - j === 2}
                    />
                );
            }
            
            newGrid.push(<div className="row" key={i}>{row}</div>);
            row = [];
        }
       
        return newGrid;
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setSize(size => ({...size, row: value, column: value}));
        
    }

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
                />
                {/* <div style={{background: 'white'}}>
                    <p>Select colors</p>
                    <input
                        type='radio'
                        value='Red'
                    />
                </div>

                <div style={{background: 'white'}}>
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