import React from 'react';
import '../../Styles/cell.scss'


export default function BoardCell(props) {

    return (
        <div className = {props.black ? 'cell black' : 'cell white'}>
        </div>
    )
}

