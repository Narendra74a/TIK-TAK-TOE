import Game from "./Game.js"
import GameView from "./GameView.js"

let game=new Game();
let gameView=new GameView();
document.querySelector(".restart")
.addEventListener("click", ()=>{
    onRestartClick();
})

let tile= document.querySelectorAll(".board-tile");
tile.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClicked(tile.dataset.index);
    })
})

function onTileClicked(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick(){
    game=new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);