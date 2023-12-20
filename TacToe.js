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
   setGame2();
}

//initalizing variables
var board3;
let playerO = "C";
var playerX = "J";
var CurrPlayer = playerO;
var gameOver2 = false; //boolean 

const restart = document.getElementById("restart");



//set up the game make board and populate tiles 
function setGame2() {
    board3 = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]
// creates div with the id of "0-1" "1-1" etc
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", setTile);
            document.getElementById("board2").appendChild(tile);
        }
    }
}


// function nuke() {
  
//    location.reload();
 
   

 
// };


// allows you you select a tile 
function setTile() {

        if (gameOver2) {
            return;
        }
//current tile u click on
        let coords = this.id.split("-"); // converts id to array "0-2" -> ["0","2"]
        let r = parseInt(coords[0]); // converts to integer for the first 
        let c = parseInt(coords[1]);// converts to integer for the second
 
        if (board3[r][c] != ' '){ // if its not a blank space on board can't set
            return;
        }
        board3[r][c] = CurrPlayer; //where they select is the current player
        this.innerText = CurrPlayer;

        if (CurrPlayer == playerO) { //alternates players 
            CurrPlayer = playerX;
        }
        else {
            CurrPlayer = playerO;
        }
        checkWinner();
    }

function checkWinner() {

    for (let r = 0; r < 3; r++) {
        if (board3[r][0] == board3[r][1] && board3[r][1] == board3[r][2] && board3[r][0] != ' ') {
            //if we found the winning row
            //apply the winner style to that row
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }

    //checks each column vertically to see if there is 3 in a row
    for (let c = 0; c < 3; c++) {
        if (board3[0][c] == board3[1][c] && board3[1][c] ==  board3[2][c] && board3[0][c] != ' ') {
           
            //apply the winner style to that col
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());                
                tile.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }

    // checks diagonally
    if (board3[0][0] == board3[1][1] && board3[1][1] == board3[2][2] && board3[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile = document.getElementById(i.toString() + "-" + i.toString());                
            tile.classList.add("winner");
        }
        gameOver = true;
        return;
    }

    if (board3[0][2] == board3[1][1] && board3[1][1] == board3[2][0] && board3[0][2] != ' ') {
        //0-2
        let tile = document.getElementById("0-2");                
        tile.classList.add("winner");

        //1-1
        tile = document.getElementById("1-1");                
        tile.classList.add("winner");

        //2-0
        tile = document.getElementById("2-0");                
        tile.classList.add("winner");
        gameOver = true;
        return;
    }
}
// restart.addEventListener("click", nuke());