import { useState, useEffect } from 'react';

export default function AeroClock({ fimDeJogo, jogadaAtual }) {

    const [segundos, setSegundos] = useState(0);
    
    useEffect(() => {
        if (jogadaAtual === 0){
            setSegundos(0)
        }
    }, [jogadaAtual]);

    useEffect(() => {
        if (fimDeJogo) return;


        const temporizador = setInterval(() => {
            setSegundos(prevSeconds => prevSeconds + 1)
        }, 1000);

        return () => clearInterval(temporizador);

    }, [fimDeJogo]);

    return (
        <div className="text-center my-2">
            <div className="badge bg-info text-dark fs-6 p-2">
                ⏱️ Tempo de Partida: {segundos}s
            </div>
        </div>
    );
}