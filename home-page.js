//Home Page
function startBtn(){
    let startDiv= document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let startPairs= document.getElementById("wrapper2");
    startDiv.style.display="none";
    gameCanvas.style.display="block";
    startPairs.style.display="none";
console.log('start');
}

//Menu
var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var toggledMenu = menuToggle.addEventListener("click", menu)
   

function menu(){
     for(var i = 0; i < activeElements.length; i++){
          activeElements[i].classList.toggle("active");
     }
}




