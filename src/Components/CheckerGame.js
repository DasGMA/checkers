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
    },
    selectedChecker: null
});

useEffect(() => {
    setState(state => ({
      ...state, checkers: initializeCheckers(state)
    }))
},[state.size]);


const toggleChecker = (coordinates) => {
  if (state.selectedChecker !== coordinates) {
    setState(state => ({
      ...state,
      selectedChecker: coordinates
    }));
  } else {
    setState(state => ({
      ...state,
      selectedChecker: null
    }));
  }
    
}

  return (
    <div className="checkerGame">
      <CheckerBaord 
        state={state} 
        setState={setState} 
        toggleChecker={(coordinates) => toggleChecker(coordinates)}
      />
    </div>
  );
}

export default CheckerGame;
