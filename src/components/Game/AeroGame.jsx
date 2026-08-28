import { useState } from 'react';
import AeroMatchBoard from '../AeroMatch/AeroMatchBoard';
import AeroPlacar from '../AeroPlacar/AeroPlacar';
import calculateWinner from '../../utils/calcWin';
import AeroBoxes from '../AeroBoxes/AeroBoxes';


export default function AeroGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [vitoriaCD = 'x', setVitoriaCD] = useState(0)
  const [empates, setEmpates] = useState(0)
  const [vitoriaGota = 'o', setVitoriaGota] = useState(0)


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const vencedor = calculateWinner(nextSquares);

    if (vencedor == 'x') {
      setVitoriaCD = vitoriaCD + 1;
    };
    if (vencedor == 'o') {
      setVitoriaGota = vitoriaGota + 1;
    } else {
      setEmpates = empates + 1;
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? 'Vá para a jogada # ' + move : 'Volte para o ínicio do jogo!';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <AeroMatchBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <AeroPlacar vitoriaCD={vitoriaCD} vitoriaGota={vitoriaGota} empates={empates}  onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}