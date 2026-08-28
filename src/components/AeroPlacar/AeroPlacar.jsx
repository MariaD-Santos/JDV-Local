
export default function AeroPlacar({vitoriaCD, vitoriaGota, empates}){
    return(
        <div>
            <div>
                <h1>Jogador 💿</h1>
                <span id="o">{vitoriaCD}</span>
                
            </div>
            <div>
                <h1>Empate! 💿;💧</h1>
                <span id="draw">{empates}</span>
            </div>
            <div>
                <h1>Jogador 💧</h1>
                <span id="x">{vitoriaGota}</span>
            </div>
        </div>
    );
}