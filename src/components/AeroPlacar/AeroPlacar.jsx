
export default function AeroPlacar({vitoriaCD, vitoriaGota, empates}){
    return(
        <div>
            <div>
                <h1>Jogador 💿</h1>
                {vitoriaCD}
            </div>
            <div>
                <h1>Empate! 💿;💧</h1>
                {empates}
            </div>
            <div>
                <h1>Jogador 💧</h1>
                {vitoriaGota}
            </div>
        </div>
    );
}