function w(){
    // let startPairs= document.getElementById("pairs1");
    let gameCanvas = document.getElementById("canvas");
    let startDiv= document.getElementById("start");  
    let startWack =document.getElementById("wack");
    startDiv.style.display="none";
   gameCanvas.style.display="none";
   startWack.style.display="block";
    // startPairs.style.display="none";
   console.log('rate');

setGame();

}

let currMushTile;
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;



function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { 
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 800);  // set intervals of each pop up
    setInterval(setPlant, 1000); 
    setInterval(setMush, 200);
}

//randomizes the 9 tiles and sets the num to a string so can be used on the id
function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {// clears all tags in the div tag
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");//set the mole to an img
    mole.src = "./monty-mole.png"; //sets the img to the png

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id, currMushTile && currMushTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setMush() {
    if (gameOver) {
        return;
    }
    if (currMushTile) {
        currMushTile.innerHTML = "";
    }
    let mush = document.createElement("img");
    mush.src = "./mushroom.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id, currMoleTile && currMoleTile.id == num) {
        return;
    }
    currMushTile = document.getElementById(num);
    currMushTile.appendChild(mush);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
        else if (this == currMushTile) {
            score += 10000;
            document.getElementById("score").innerText = score.toString();// 
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //loses 
        gameOver = true;
    }
}