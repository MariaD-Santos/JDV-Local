import { useState, useEffect } from 'react';

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
        <div className="text-center my-2">
            <div className="badge bg-info text-dark fs-6 p-2">
                ⏱️ Playing time: {seconds}s
            </div>
        </div>
    );
}