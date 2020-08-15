import React from 'react';
import '../../Styles/cell.scss'


export default function BoardCell(props) {
    const renderShape = () => {

        if(props.first) {
           return  <div className='shape red'></div>
        }

        if(props.last) {
            return  <div className='shape black'></div>
         }
    }

    return (
        <div className = {props.black ? 'cell ebony' : 'cell white'}>
            {renderShape()}
        </div>
    )
}

