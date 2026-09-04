import { useState, useEffect } from 'react';
import styles from './aeroclock.module.css'


export default function AeroClock({ gameOver, currentMove }) {

    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        if (currentMove === 0){
            setSeconds(0);
        }
    }, [currentMove]);

    useEffect(() => {
        if (gameOver) return;

        const timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [gameOver]);

    return (
        <div className={styles.timer}>
            <div className={styles.seconds}>
                ⏱️ Playing time: {seconds}s
            </div>
        </div>
    );
}