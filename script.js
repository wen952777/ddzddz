document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    const players = ['玩家1', '玩家2', '玩家3'];
    const landlordIndex = Math.floor(Math.random() * players.length);
    
    document.getElementById('message').innerText = ${players[landlordIndex]} 是地主！;

    // 这里可以添加更多的游戏逻辑，比如发牌、出牌等
}
