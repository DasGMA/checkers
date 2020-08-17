const { default: move } = require("./move");
const { default: possibleMoves } = require("./possibleMoves");

const initialState = {
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
    start: false,
    saved: false
  };
  
  const savedState = () => {
    if (localStorage.getItem('state')) {
      let { checkers, ...rest } = JSON.parse(localStorage.getItem('state'));
      for (let checker of Object.values(checkers)) {
        if (checker) {
          checker.move = move;
          checker.possibleMoves = possibleMoves;
      }
    }
      return {checkers, ...rest};
    } else {
      return null;
    }
  }


  module.exports = {
    initialState,
    savedState: savedState()
  }