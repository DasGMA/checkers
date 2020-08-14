import React, {useState} from 'react';
import BoardCell from './BoardCell';
import '../../Styles/checkerBoard.scss';


export default function CheckerBaord() {
    const [size, setSize] = useState(8);

    const renderBoard = () => {
        let newGrid = [];
        let row = [];

        for (let i = 0; i < size; i ++) {
            for (let j = 0; j < size; j ++) {
                console.log('creating board' )
                row.push(<BoardCell key = {[i, j]} />);
            }
            
            newGrid.push(<div style = {{textAlign: 'center', justifyContent: 'center'}} className = "row" key={i} >{row}</div>);
            row = [];
        }
        return newGrid;
    }

    const handleChange = (event) => {
        const {value} = event.target;
        setSize(value);
    }

    return (
        <div className='checker-board'>
            <div className='board'>
            {renderBoard()}
            </div>
            <div>
                <input 
                    type='number'
                    value={size}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}