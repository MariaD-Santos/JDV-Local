import { useState } from 'react';
import AeroMatchBoard from '../AeroMatch/AeroMatchBoard';
import AeroScore from '../AeroScore/AeroScore';
import calculateWinner from '../../utils/calcWin';
import AeroClock from '../AeroClock/AeroClock';
import styles from './aerogame.module.css'
import Swal from 'sweetalert2';

export default function AeroGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState('💿');
  const xIsNext = currentMove % 2 === 0 ? (startingPlayer === '💿') : (startingPlayer !== '💿');
  const currentBoxes = history[currentMove];

  // Declaração correta dos estados de pontuação
  const [cdWins, setCdWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [dropWins, setDropWins] = useState(0);

  const win = calculateWinner(currentBoxes);
  const isBoardFull = currentBoxes.every(box => box !== null);
  const gameOver = Boolean(win) || isBoardFull;

  // Função para reiniciar o jogo e a pontuação
  function resetGame() {
    setCdWins(0);
    setDropWins(0);
    setDraws(0);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  function handlePlay(nextBoxes) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextBoxes];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const winner = calculateWinner(nextBoxes);

    if (winner === '💿') {
      const nextCdWins = cdWins + 1;
      setCdWins(nextCdWins);
      setStartingPlayer('💧');

      if (nextCdWins === 3) {
        // Alerta nativo do navegador antes de resetar
        Swal.fire({
          title: "Jogador 💿 ganhou!",
          text: "Parabéns pelo jogo! agora você pode voltar para sua caixinha!",
          imageUrl: "https://i.pinimg.com/originals/c9/c9/05/c9c905b6a8ee5f9e7bd5c53719db7e3c.png",
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: "CD",
          background: '#3D71AD',
          color: '#1E376D',
          confirmButtonColor: '#1569A7'
        });
        resetGame();
      }
    } else if (winner === '💧') {
      const nextDropWins = dropWins + 1;
      setDropWins(nextDropWins);
      setStartingPlayer('💿');

      if (nextDropWins === 3) {
        // Alerta nativo do navegador antes de resetar
        Swal.fire({
          title: "Jogador 💧 ganhou!",
          text: "Parabéns pelo jogo! agora você pode voltar para o mar!",
          imageUrl: "https://64.media.tumblr.com/e6f494a66988bda58b9be45521e13aa2/0c5e779504eaa148-4e/s400x600/4af3fef33502994f40ee0e25810aef2b85abb7b3.gifv",
          imageWidth: 200,
          imageHeight: 150,
          imageAlt: "CD",
          background: '#62B8FB',
          color: 'white',
          confirmButtonColor: '#2AB7FB'
        });
        resetGame();
      }
    } else if (!winner && nextBoxes.every(box => box !== null)) {
      setDraws(prev => prev + 1);
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
    <div className={styles.game}>
      <div className={styles['game-board']}>
        <AeroClock
          gameOver={gameOver}
          currentMove={currentMove}
        />

        <AeroMatchBoard
          xIsNext={xIsNext}
          boxes={currentBoxes}
          onPlay={handlePlay}
        />

        <AeroScore
          cdWins={cdWins}
          dropWins={dropWins}
          draws={draws}
          onPlay={handlePlay}
        />
      </div>

      <div className={styles['game-info']}>
        <ol>{moves}</ol>
      </div>
    </div>
  );

}