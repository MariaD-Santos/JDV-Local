
import calculateWinner from '../../utils/calcWin';
import AeroBoxes from '../AeroBoxes/AeroBoxes';
import styles from './aeromatchboard.module.css'

export default function AeroMatchBoard({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = '💿';
    } else {
      nextSquares[i] = '💧';
    }
    onPlay(nextSquares);
  }

 

  const winner = calculateWinner(squares);
  const empate = !winner && squares.every(square => square != null);
  let status;
  if (winner) {
    status = 'Vencedor: ' + winner;
  } else if (empate){
      status = 'Deu velha!'
  }
    else {
    status = 'Próximo jogador: ' + (xIsNext ? '💿' : '💧');
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <AeroBoxes value={squares[0]} onSquareClick={() => handleClick(0)} />
        <AeroBoxes value={squares[1]} onSquareClick={() => handleClick(1)} />
        <AeroBoxes value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <AeroBoxes value={squares[3]} onSquareClick={() => handleClick(3)} />
        <AeroBoxes value={squares[4]} onSquareClick={() => handleClick(4)} />
        <AeroBoxes value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <AeroBoxes value={squares[6]} onSquareClick={() => handleClick(6)} />
        <AeroBoxes value={squares[7]} onSquareClick={() => handleClick(7)} />
        <AeroBoxes value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}