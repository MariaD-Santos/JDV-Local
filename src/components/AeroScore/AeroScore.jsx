import styles from './aeroscore.module.css'


export default function AeroScore({cdWins, dropWins, draws}){
    return(
        <div>
            <div className={styles.score}>
                <h1 className={styles.titleScore}>Jogador 💿</h1>
                <span id="o" className={styles.scorenumbers}>{cdWins}</span>
            </div>
            <div className={styles.score}>
                <h1 className={styles.titleScore}>Empate! 💿;💧</h1>
                <span id="draw" className={styles.scorenumbers}>{draws}</span>
            </div>
            <div className={styles.score}>
                <h1 className={styles.titleScore}>Jogador 💧</h1>
                <span id="x" className={styles.scorenumbers}>{dropWins}</span>
            </div>
        </div>
    );
}