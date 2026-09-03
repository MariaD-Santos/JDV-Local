import calculateWinner from '../../utils/calcWin';
import AeroBoxes from '../AeroBoxes/AeroBoxes';
import styles from './aeromatchboard.module.css';

export default function AeroMatchBoard({ xIsNext, boxes, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(boxes) || boxes[i]) {
      return;
    }
    const nextBoxes = boxes.slice();
    if (xIsNext) {
      nextBoxes[i] = '💿';
    } else {
      nextBoxes[i] = '💧';
    }
    onPlay(nextBoxes);
  }

  const winner = calculateWinner(boxes);
  const draw = !winner && boxes.every(box => box != null);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (draw){
      status = 'Tie game!'
  }
    else {
    status = 'Next player: ' + (xIsNext ? '💿' : '💧');
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