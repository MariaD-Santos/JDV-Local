import { useState } from 'react';
import AeroMatchBoard from '../AeroMatch/AeroMatchBoard';
import AeroScore from '../AeroScore/AeroScore';
import calculateWinner from '../../utils/calcWin';

import AeroClock from '../AeroClock/AeroClock';


export default function AeroGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState('💿');
  const xIsNext = currentMove % 2 === 0 ? (startingPlayer === '💿') : (startingPlayer !== '💿');
  const currentBoxes = history[currentMove];

  const [cdWins = 'x', setCdWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [dropWins = 'o', setDropWins] = useState(0);

  const win = calculateWinner(currentBoxes);
  const isBoardFull = currentBoxes.every(box => box !== null);
  const gameOver = Boolean(win) || isBoardFull;

  function handlePlay(nextBoxes) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextBoxes];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const winner = calculateWinner(nextBoxes);

    if (winner == '💿') {
      setCdWins(cdWins + 1);
      setStartingPlayer('💧');
    }
    else if (winner == '💧') {
      setDropWins(dropWins + 1);
      setStartingPlayer('💿');

    } else if (!winner && nextBoxes.every(box => box !== null)) {
      setDraws(draws + 1);

    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((boxes, move) => {
    let description = move > 0 ? 'Go to move #' + move : 'Go to game start!';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <AeroClock gameOver={gameOver} currentMove={currentMove}/>
        <AeroMatchBoard xIsNext={xIsNext} boxes={currentBoxes} onPlay={handlePlay} />
        <AeroScore cdWins={cdWins} dropWins={dropWins} draws={draws} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}