import React, { useState, useEffect } from 'react';
import CheckerBaord from './CheckerBoard/CheckerBoard';
import initializeCheckers from './Helpers/initializeCheckers';
import { initialState, savedState } from './Helpers/state';

function CheckerGame() {
  const [state, setState] = useState(savedState ? savedState : initialState);

  useEffect(() => {
    if (state.checkers.length === 0 && state.start) {
      setState(state => ({
        ...state, checkers: initializeCheckers(state)
      }))
    }
  },[state.start, state.checkers]);


  const toggleChecker = (position = null) => {
    if (position !== null && state.selectedChecker !== position) {
      setState(state => ({
        ...state,
        selectedChecker: position,
        possibleMoves: state.checkers[position] ? state.checkers[position].possibleMoves() : []
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
    console.log(position)
    if (position !== (state.checkers[position] && state.checkers[position].coordinates.i)) {
      if (state.checkers[state.selectedChecker] && state.possibleMoves.includes(position)) {
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

  const reset = () => {
    localStorage.removeItem('state');
    setState({
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
      possibleMoves: [],
      start: false
    })
  }

  const save = () => {
    localStorage.setItem('state', JSON.stringify(state));
  }

  const start = () => {
    setState(state => ({
      ...state,
      start: true
    }))
  }

  return (
    <div className="checkerGame">
      <CheckerBaord 
        state={state} 
        setState={setState} 
        toggleChecker={(position) => handleMove(position)}
        save={save}
        reset={reset}
        start={start}
      />
      
    </div>
  );
}

export default CheckerGame;
