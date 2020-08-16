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
    selectedChecker: null,
    possibleMoves: []
});

useEffect(() => {
    setState(state => ({
      ...state, checkers: initializeCheckers(state)
    }))
},[state.size]);


const toggleChecker = (position = null) => {
  if (position !== null && state.selectedChecker !== position) {
    setState(state => ({
      ...state,
      selectedChecker: position
    }));
  } else if (position === null) {
    setState(state => ({
      ...state,
      selectedChecker: null,
      possibleMoves: []
    }));
  } else {
    setState(state => ({
      ...state,
      selectedChecker: null,
      possibleMoves: []
    }));
  }
}

const handleMove = (position) => {
  toggleChecker(position);
  
  if (position !== (state.checkers[position] && state.checkers[position].coordinates.i)) {
    if (state.checkers[state.selectedChecker] && state.checkers[state.selectedChecker].possibleMoves().includes(position)) {
      const newPosition = state.checkers[state.selectedChecker].move(position);
      state.checkers[newPosition.i] = state.checkers[state.selectedChecker];
      setState({
        ...state,
        checkers: {
          ...state.checkers,
          [newPosition.i]: state.checkers[newPosition.i] = state.checkers[state.selectedChecker],
          [state.selectedChecker]: state.checkers[state.selectedChecker] = null
        }
      })
      toggleChecker();
    }
  }
}

  return (
    <div className="checkerGame">
      <CheckerBaord 
        state={state} 
        setState={setState} 
        toggleChecker={(position) => handleMove(position)}
      />
    </div>
  );
}

export default CheckerGame;
