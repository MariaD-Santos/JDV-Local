export default function AeroScore({cdWins, dropWins, draws}){
    return(
        <div>
            <div>
                <h1>Player 💿</h1>
                <span id="o">{cdWins}</span>
            </div>
            <div>
                <h1>Draw! 💿;💧</h1>
                <span id="draw">{draws}</span>
            </div>
            <div>
                <h1>Player 💧</h1>
                <span id="x">{dropWins}</span>
            </div>
        </div>
    );
}