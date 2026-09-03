import { useState } from 'react';
import AeroMatchBoard from '../AeroMatch/AeroMatchBoard';
import AeroPlacar from '../AeroPlacar/AeroPlacar';
import calculateWinner from '../../utils/calcWin';
import AeroBoxes from '../AeroBoxes/AeroBoxes';
import AeroClock from '../AeroClock/AeroClock';


export default function AeroGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [jogadorInicial, setJogadorInicial] = useState('💿')
  const xIsNext = currentMove % 2 === 0 ? (jogadorInicial === '💿') : (jogadorInicial !== '💿');
  const currentboxes = history[currentMove];

  const [vitoriaCD = 'x', setVitoriaCD] = useState(0)
  const [empates, setEmpates] = useState(0)
  const [vitoriaGota = 'o', setVitoriaGota] = useState(0)

  const win = calculateWinner(currentboxes)
  const tabuleiroCompleto = currentboxes.every(box => box !== null);
  const fimDeJogo = Boolean(win) || tabuleiroCompleto;

  function handlePlay(nextboxes) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextboxes];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const vencedor = calculateWinner(nextboxes);

    if (vencedor == '💿') {
      setVitoriaCD(vitoriaCD + 1)
      setJogadorInicial('💧')
    }
    else if (vencedor == '💧') {
      setVitoriaGota(vitoriaGota + 1)
      setJogadorInicial('💿')

    } else if (!vencedor && nextboxes.every(box => box !== null)) {
      setEmpates(empates + 1)

    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((boxes, move) => {
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
        <AeroClock fimDeJogo={fimDeJogo} jogadaAtual={currentMove}/>
        <AeroMatchBoard xIsNext={xIsNext} boxes={currentboxes} onPlay={handlePlay} />
        <AeroPlacar vitoriaCD={vitoriaCD} vitoriaGota={vitoriaGota} empates={empates} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}