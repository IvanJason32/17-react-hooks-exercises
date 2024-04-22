// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

// ### EXERCISE: useState: tic tac toe ###
// import * as React from 'react'

// function Board() {
//   // 🐨 squares is the state for this component. Add useState for squares
//   const [squares, setSquares] = React.useState(Array(9).fill(null));
//   // const squares = Array(9).fill(null)

//   // 🐨 We'll need the following bits of derived state:
//   // - nextValue ('X' or 'O')
//   const nextValue = calculateNextValue(squares);
//   // - winner ('X', 'O', or null)
//   const winner = calculateWinner(squares);
//   // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
//   const status = calculateStatus(winner, squares, nextValue);
//   // 💰 I've written the calculations for you! So you can use my utilities
//   // below to create these variables

//   // This is the function your square click handler will call. `square` should
//   // be an index. So if they click the center square, this will be `4`.
//   function selectSquare(square) {
//     if(winner || squares[square]) {
//       return
//     }
//     const copySquares = [...squares];
//     copySquares[square] = nextValue;
//     setSquares(copySquares);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//     // 🐨 reset the squares
//     // 💰 `Array(9).fill(null)` will do it!
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       {/* 🐨 put the status in the div below */}
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// // eslint-disable-next-line no-unused-vars
// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// // eslint-disable-next-line no-unused-vars
// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
// }

// // eslint-disable-next-line no-unused-vars
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// ### EXTRA CREDIT - preserve state in localStorage ###
// import * as React from 'react'

// function Board() {
//   const [squares, setSquares] = React.useState(() => JSON.parse(window.localStorage.getItem('squares')) || Array(9).fill(null), )

//   React.useEffect(() => {
//     window.localStorage.setItem('squares', JSON.stringify(squares))
//   }, [squares])
  
//   const nextValue = calculateNextValue(squares);
//   const winner = calculateWinner(squares);
//   const status = calculateStatus(winner, squares, nextValue);

//   function selectSquare(square) {
//     if(winner || squares[square]) {
//       return
//     }
//     const copySquares = [...squares];
//     copySquares[square] = nextValue;
//     setSquares(copySquares);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// ### EXTRA CREDIT - useLocalStorageState ###
// import * as React from 'react'
// import {useLocalStorageState} from '../utils'

// function Board() {
//   const [squares, setSquares] = useLocalStorageState('squares', Array(9).fill(null));
//   const nextValue = calculateNextValue(squares);
//   const winner = calculateWinner(squares);
//   const status = calculateStatus(winner, squares, nextValue);

//   function selectSquare(square) {
//     if(winner || squares[square]) {
//       return
//     }
//     const copySquares = [...squares];
//     copySquares[square] = nextValue;
//     setSquares(copySquares);
//   }

//   function restart() {
//     setSquares(Array(9).fill(null));
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// ### EXTRA CREDIT - add game history feature ###
import * as React from 'react'
import {useLocalStorageState} from '../utils'

function Board({onClick, squares}) {
  
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {

  const [history, setHistory] = useLocalStorageState('tik-tak-history', [Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useLocalStorageState('tik-tak-current-step', 0);

  const currentSquares = history[currentStep];
  const nextValue = calculateNextValue(currentSquares);
  const winner = calculateWinner(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);
  

  function selectSquare(square) {
    if(winner || currentSquares[square]) {
      return
    }
    const copyHistory = history.slice(0, currentStep + 1);
    const copySquares = [...currentSquares];
    copySquares[square] = nextValue;
    const newHistory = [...copyHistory, copySquares];
    setHistory(newHistory)
    setCurrentStep(prev => prev + 1);
  }

  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  }

  const moves = history.map((steps, index) => {
    const desc = index === 0 ? 'Go to game start' : `Go to move ${index}`
    const isCurrent = currentStep === index
    return (
      <li key={steps}>
        <button disabled={isCurrent} onClick={()=>setCurrentStep(index)}>
          {desc}
          {isCurrent && '(current)'}
        </button>{' '}
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
