
import calculateWinner from '../../utils/calcWin';
import AeroBoxes from '../AeroBoxes/AeroBoxes';
import styles from './aeromatchboard.module.css'

export default function AeroMatchBoard({ xIsNext, boxes, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(boxes) || boxes[i]) {
      return;
    }
    const nextboxes = boxes.slice();
    if (xIsNext) {
      nextboxes[i] = '💿';
    } else {
      nextboxes[i] = '💧';
    }
    onPlay(nextboxes);
  }

 

  const winner = calculateWinner(boxes);
  const empate = !winner && boxes.every(box => box != null);
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
        <AeroBoxes value={boxes[0]} onboxClick={() => handleClick(0)} />
        <AeroBoxes value={boxes[1]} onboxClick={() => handleClick(1)} />
        <AeroBoxes value={boxes[2]} onboxClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <AeroBoxes value={boxes[3]} onboxClick={() => handleClick(3)} />
        <AeroBoxes value={boxes[4]} onboxClick={() => handleClick(4)} />
        <AeroBoxes value={boxes[5]} onboxClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <AeroBoxes value={boxes[6]} onboxClick={() => handleClick(6)} />
        <AeroBoxes value={boxes[7]} onboxClick={() => handleClick(7)} />
        <AeroBoxes value={boxes[8]} onboxClick={() => handleClick(8)} />
      </div>
    </>
  );
}