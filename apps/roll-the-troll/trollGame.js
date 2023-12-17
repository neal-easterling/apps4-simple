'use strict';
/**@type {HTMLCanvasElement} */
let container, canvas, ctx, gameboard; 
const typeSpeed = 100;
let isTyping = false;

//sound
const diceRollAudio = new Audio();


let gameStatus = 'start';

window.onload = init;
window.onresize = redraw;


function init(){
    gameboard = new TrollGameBoard();
    gameboard.endScreenSection.style.display = "none";
    gameboard.drawStartScreen();
    gameboard.setHealthBars();
    diceRollAudio.src = "./sound/diceRoll.wav";   
};

function redraw(){
    if (gameStatus == 'game'){
        gameboard.drawGameboard();
    }else if(gameStatus == 'win' || gameStatus == 'lose'){
        gameboard.drawEndScreen(gameStatus);
    }else if(gameStatus == 'start'){
        gameboard.drawStartScreen(); 
    }else{
        rollCredits();
    }
  
}

function startGame(){
    gameboard.drawGameboard();
    gameboard.troll.speak('begin');
}
function rollOver(){
    gameStatus = 'lose';
    gameboard.drawEndScreen(gameStatus);
}
function rollCredits(){
    gameStatus = "credits";
    gameboard.endScreenSection.style.display = "none";
    document.getElementById("credits").style.display = "flex";
}

function takeAction(action){
    const ctx = gameboard.ctx;
    gameboard.buttonContainer.style.display = "none";
    
    //player responds  - based on type of action
    gameboard.player.speak(action);

    //assess winner
    function getWinner(){
        const tD20 = gameboard.trollD20.update();
        const tD6 = gameboard.trollD6.update();
        const pD20 = gameboard.playerD20.update();
        const pD6 = gameboard.playerD6.update();
   
        if(tD20 >= pD20){
            return ['t', tD6];
        } else {
            return ['p', pD6];
        } 
    } 
    let winner;
    setTimeout(() =>{
        winner = getWinner();
        //console.log(winner);
    }, 500); 
    
    //animate dice
    function animateDice(){
        gameboard.trollD20.image.src = "./images/DiceSpriteSheet.png";
        gameboard.trollD6.image.src = "./images/DiceSpriteSheet.png";
        gameboard.playerD20.image.src = "./images/DiceSpriteSheet.png";
        gameboard.playerD6.image.src = "./images/DiceSpriteSheet.png";
        gameboard.trollD20.animate(ctx);
        gameboard.trollD6.animate(ctx);
        gameboard.playerD20.animate(ctx);
        gameboard.playerD6.animate(ctx);
    
    }
        
  
    setTimeout(() =>{
        diceRollAudio.play();
        animateDice(); 
        //console.log('animated');
    }, 4000);

    //deal damage to loser and adjust healthbar accordingly
    function dealDamage(winner){
        if(winner[0] == 't'){
            gameboard.player.health -= winner[1];
        }else{
            gameboard.troll.health -= winner[1];
        }
        gameboard.drawDamage(winner[0], winner[1]);
    }
    setTimeout(() =>{
        dealDamage(winner);
        gameboard.setHealthBars();
        //console.log(gameboard.troll.health, gameboard.player.health);
    }, 5000);

    //game check
    setTimeout(() =>{
        gameboard.gameCheck();
        //console.log(gameStatus);
        if(gameStatus=='game') { gameboard.troll.speak(action);}
        else if(gameStatus == 'win' || gameStatus == 'lose'){gameboard.drawEndScreen(gameStatus);}
        else{ console.log(gameStatus + 'error');};
    }, 6000);

    setTimeout(()=>{
        if (gameStatus == "game"){ 
        gameboard.buttonContainer.style.display = "flex";
        }
    }, 10000);

}