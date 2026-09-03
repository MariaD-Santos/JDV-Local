import styles from './aeroboxes.module.css'

export default function AeroBoxes({ value, onboxClick }) {
  return (
    <button className={styles.box} onClick={onboxClick} type='button'>
      {value}
    </button>
  );
}

