function tic(){
    let startTic= document.getElementById("tac");
    let startPairs= document.getElementById("wrapper2");
    let gameCanvas = document.getElementById("canvas");
    let startDiv= document.getElementById("start");
    startDiv.style.display="none";
   gameCanvas.style.display="none";
   startPairs.style.display="none";
    startTic.style.display = "block";
   console.log('tacs');
}


var board;
var playerO = "O";
var playerX = "X";
var CurrPlayer = playerO;
var gameOver = false;


window.onload = function() {
    setGame();
}

function setGame(){
    board= [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ]

    for(let r=0; r < 3; r++){
        for(let c=0; c < 3; c++){
            let tit
        }
    }
}