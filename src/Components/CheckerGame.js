import React, { useState, useEffect } from 'react';
import CheckerBaord from './CheckerBoard/CheckerBoard';
import initializeCheckers from './Helpers/initializeCheckers';

function CheckerGame() {
  const [state, setState] = useState({
    checkers: [],
    size: {
        row: 8,
        column: 8
    },
    shape: {
        top: {
            shape: 'circle',
            color: 'red'
        },
        bottom: {
            shape: 'circle',
            color: 'black'
        }
    }
});

useEffect(() => {
    setState(state => ({
      ...state, checkers: initializeCheckers(state)
    }))
},[state.size])


  return (
    <div className="checkerGame">
      <CheckerBaord state={state} setState={setState}/>
    </div>
  );
}

export default CheckerGame;
