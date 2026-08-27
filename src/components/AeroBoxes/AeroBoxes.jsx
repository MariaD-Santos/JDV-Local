import styles from './aeroboxes.module.css'

export default function AeroBoxes({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

