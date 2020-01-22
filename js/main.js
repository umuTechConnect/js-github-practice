'use strict'

let number, guess;

function init(){}

function start(){
    document.getElementById("guess").hidden = false;
    document.getElementById("start-button").hidden = true;

    gameSetup(0, 50);
}

function endGame(){
    document.getElementById("guess").hidden = true;
    document.getElementById("new-game-button").hidden = false;
}
