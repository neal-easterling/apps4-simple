/**@type {HTMLCanvasElement} */

class TrollGameBoard{
    constructor(){
        this.container = document.getElementById('canvasContainer');
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.startSection = document.getElementById("startSection");
        this.actionContainer = document.getElementById("actionContainer");
        this.trollContainer = document.getElementById("trollContainer");
        this.playerContainer = document.getElementById("playerContainer");
        this.trollTxtBox = document.getElementById("trollTxtBox");
        this.playerTxtBox = document.getElementById("playerTxtBox");
        this.trollHealthBar = document.getElementById("trollHP_Inner");
        this.playerHealthBar = document.getElementById("playerHP_Inner");
        this.buttonContainer = document.getElementById('buttonContainer');
        this.endScreenSection = document.getElementById("endScreen");
        this.endRollContainer = document.getElementById("endRoll");
        this.endMessage = document.getElementById("endMessage");
        this.isPhone = (this.container.clientWidth <= 600) ? true : false;
        this.min = Math.min(this.container.clientWidth, this.container.clientHeight);
        this.centerX = Math.floor(this.container.clientWidth*0.5);
        this.centerY = Math.floor(this.container.clientHeight*0.5);
        this.trollHead = new Image();
        this.trollHead.src = "./images/TrollFace.png";
        this.title = new Image();
        this.title.src = "./images/roll_the_troll_title.png";
        this.troll = new Responder('troll', 20);
        this.player =  new Responder('player', 20);
        this.trollD6 = new Dice('troll', 6, 200, 500, 60);
        this.trollD20 = new Dice('troll', 20, 260, 495, 60);
        this.playerD6 = new Dice('player', 6, 500, 520, 60);
        this.playerD20 = new Dice('player', 20, 440, 515, 60);

    }
    gameCheck(){
        if(this.troll.health <= 0){
            gameStatus = 'win';
        }else if(this.player.health <= 0){
            gameStatus = 'lose';
        }else{
            gameStatus = 'game';
        }
    }
    setHealthBars(){
        if(this.troll.health >10){
            this.trollHealthBar.style.backgroundColor = "#5be10b";
        }
        if(this.troll.health < 10 && this.troll.health > 5){
            this.trollHealthBar.style.backgroundColor = "yellow";
        }
        if(this.troll.health <=5){
            this.trollHealthBar.style.backgroundColor = "red";
        }
        if(this.player.health > 10 ){
            this.playerHealthBar.style.backgroundColor = "#66ffff";
        }
        if(this.player.health <= 10 && this.player.health > 5){
            this.playerHealthBar.style.backgroundColor = "yellow";
        }
        if(this.player.health <=5){
            this.playerHealthBar.style.backgroundColor = "red";
        }
        this.trollHealthBar.style.width = `${100 * this.troll.health/20}%`;
        this.playerHealthBar.style.width = `${100 * this.player.health/20}%`;
    }
    drawStartScreen(){

        this.isPhone = (this.container.clientWidth <= 600) ? true : false;
        // get constants
        const canvas = this.canvas;
        const ctx = this.ctx;
        this.min = Math.min(this.container.clientWidth, this.container.clientHeight);
        const min = this.min;
        let centerX;
        let centerY;
        centerX = this.centerX = Math.floor(this.container.clientWidth*0.5);
        centerY = this.centerY = Math.floor(this.container.clientHeight*0.5);
        //set canvas size
        canvas.width = min;
        canvas.height = min;

        //load images
        this.trollHead.src = "./images/TrollFace.png";
        this.title.src = "./images/roll_the_troll_title.png";
        this.trollD6.image.src = this.trollD20.image.src = this.playerD6.image.src = this.playerD20.image.src = "./images/DiceSpriteSheet.png";  
    
        //trollhead
         this.trollHead.onload = ()=>{
            ctx.drawImage(this.trollHead, min*0.1, min*0.25, min*0.3, min*0.25);
        };
        //title
        this.title.onload = () => {
            ctx.drawImage(this.title, min*0.45, min*0.3, min*0.35, min*0.2);
        }
        ctx.fillStyle = '#ffffff';
        if(this.isPhone){
            ctx.font = "2em OCR";
            ctx.fillText('Can you roll the Troll', min*0.45, min*0.53);
            ctx.fillText('before they roll you?', min*0.47, min*0.53 + 10);
        }else{
            ctx.font = "1.5em OCR";
            ctx.fillText('Can you roll the Troll', min*0.45, min*0.53);
            ctx.fillText('before they roll you?', min*0.47, min*0.53 + 25);
        }
        this.startSection.style.display = "flex";
        this.startSection.style.top = `${centerY + min*0.15}px`
    }
    drawEndScreen(gameState){
        const canvas = this.canvas;
        const ctx = this.ctx;
        let index = 0;
        const message = "I'm never gonna give you up, Never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you.";
        ctx.clearRect(0,0,canvas.width, canvas.height);
        this.endScreenSection.style.display = 'flex';
        this.startSection.style.display = "none";
        this.buttonContainer.style.display = "none";
        this.actionContainer.style.display = "none";
        // set message
        if(gameState=='win'){
            this.endMessage.innerHTML = "You rolled <br /> <span>the Troll</span>";
            this.endRollContainer.style.color = "#66ffff";
            this.endRollContainer.innerHTML = "Player:<br />"
        }else{
            this.endRollContainer.innerHTML = "Troll:<br />" 
        }
        
        function roll(input){
            document.getElementById('endRoll').innerHTML += input[index];
            index ++;
            if (index<input.length){
                setTimeout(function(){
                    roll(input)
                }, 100);
            }
        }
        setTimeout(() =>{
            roll(message);
        }, 500);
       
    }
    drawDamage(winner, damage){
        let x, x2, x3, y, y2, y3;
        if(this.isPhone){
            x2= this.playerD20.x + 70;
            x3 = this.trollD20.x + 70;
            y2 = this.playerD6.y + 40;
            y3 = this.trollD6.y + 40;
            this.ctx.font = "25px OCR";
        
        }else{
            x2 = this.playerD20.x - 40; 
            x3 = this.trollD20.x + 60;
            y2 = y3 = y = this.trollD6.y + 40;
            this.ctx.font = "30px OCR";    
        }
        if(winner == "t"){
            x = x2;
            y= y2; 
        }else{
            x=x3;
            y=y3;
        }
        this.ctx.fillStyle = 'red';
        this.ctx.clearRect(x2,y2-25, 50, 50);
        this.ctx.clearRect(x3,y3-25, 50, 50);
        this.ctx.fillText(`-${damage}`, x, y);
    }
    drawGameboard(){
        //check screen break point
        this.isPhone = (this.container.clientWidth <= 600) ? true : false;

        // get variabels
        const canvas = this.canvas;
        const ctx = this.ctx;
        this.min = Math.min(this.container.clientWidth, this.container.clientHeight);
        const min = this.min;
        let board_x1, board_x2, board_y1, board_y2, boardWidth, centerX, centerY;
        let font, fontSize, iGap, iY;

        //clear canvas
        ctx.clearRect(0,0,canvas.width, canvas.height);
        
        //reload images
        this.trollHead.src = "./images/TrollFace.png";
        this.title.src = "./images/roll_the_troll_title.png";
        this.trollD6.image.src = this.trollD20.image.src = this.playerD6.image.src = this.playerD20.image.src = "./images/DiceSpriteSheet.png";
        
        //hide other Screens
        this.startSection.style.display = "none";

        //set gameStatus
        gameStatus = 'game';
        
        //set position variables
        board_x1 = min*0.08;
        board_x2 = min*0.9;
        boardWidth = board_x2 - board_x1;
        centerX = this.centerX = Math.floor(this.container.clientWidth*0.5);
        centerY = this.centerY = Math.floor(this.container.clientHeight*0.5); 
 
        if(this.isPhone){
            //set canvas size
            canvas.width = this.container.clientWidth;
            canvas.height = this.container.clientHeight;
            centerX = this.centerX = Math.floor(this.container.clientWidth*0.5);
            centerY = this.centerY = Math.floor(this.container.clientHeight*0.5); 
            board_y1 = canvas.height*0.05;
            board_y2 = canvas.height*0.9; 
            
            //set values for instructions
            font = "1.5em OCR"; 
            fontSize = "1em";
            iGap = 9;
            iY = canvas.height * 0.15;

            //set sizes and placement for containers
            this.actionContainer.style.flexDirection = "column";
            this.actionContainer.style.top = `${canvas.height*0.2}px`;
            this.trollContainer.style.width = this.playerContainer.style.width = "100%";
            this.buttonContainer.style.top = "auto";
            this.buttonContainer.style.bottom = `${canvas.height*0.01}px`;

           //set dice size
           this.trollD6.height = this.trollD6.width = 50;
           this.trollD20.height =this.trollD20.width = 50;
           this.playerD6.height = this.playerD6.width = 50;
           this.playerD20.height = this.playerD20.width = 50;
           
            //set dice location
            this.trollD6.x = board_x1 + boardWidth*0.1;
            this.trollD20.x = this.trollD6.x + 60;
            this.trollD6.y = this.trollD20.y = centerY - canvas.height*0.115;
            this.playerD6.x = board_x1 + boardWidth*0.15;
            this.playerD20.x = this.playerD6.x + 60;
            this.playerD6.y = this.playerD20.y = board_y2 - canvas.height*0.24;

            //set margin on troll container
            if(this.container.clientHeight > 750){
                this.trollContainer.style.marginBottom = "35%";
            }
        }else{
            //set canvas size
            canvas.width = min;
            canvas.height = min;
            centerX = this.centerX = Math.floor(min*0.5);
            centerY = this.centerY = Math.floor(min*0.5); 
            board_y1 = min*0.1;
            board_y2 = min*0.9;

            //set values for instructions
            font = "1em OCR"; 
            fontSize = "2em";
            iGap = 15;
            iY = min * 0.3;
            
            //set top of action and button containers
            this.actionContainer.style.top = `${centerY-min*0.1}px`;
            //this.buttonContainer.style.top = "auto";
            //this.buttonContainer.style.bottom = `${canvas.height*0.23}px`;

            //set dice location
            this.trollD6.x = centerX-min*0.33;
            this.trollD20.x = this.trollD6.x + 60;
            this.playerD6.x = centerX + min*0.1;
            this.playerD20.x = this.playerD6.x - 60;
            this.trollD6.y = this.trollD20.y = board_y2 - min*0.2;
            this.playerD6.y = this.playerD20.y = board_y2 - min*0.2;

        }

        //DRAW BOARD ON CANVAS
        //yellow bg box
        roundRect(ctx, board_x1,board_y1,board_x2,board_y2, 15, BG_HEX, YEL_HEX, 3);
        
        //trollhead
        this.trollHead.onload = ()=>{
            ctx.drawImage(this.trollHead, board_x1 - 20, board_y1 - 20, min *0.35, min*0.3 );
        };
        //cover rect behind title
        ctx.fillStyle = BG_HEX;
        ctx.beginPath();
        ctx.rect(min*0.58, min*0.04, min*0.35, min*0.21);
        ctx.closePath();
        ctx.fill();
        //title
        this.title.onload = () => {
            ctx.drawImage(this.title, min*0.58, min*0.05, min*0.35, min*0.2);
        }
        //instructions
        ctx.fillStyle = "#fff";
        ctx.font = font;
        let i = 0;
        let y_loc = iY;
        for(;i<instructions.length; i++){
            ctx.fillText(instructions[i], min*0.5, y_loc);
            y_loc +=iGap;
        };

        //display player boxes
        this.actionContainer.style.display = 'flex';
        this.actionContainer.style.width = `${boardWidth - min*0.05}px`;

        //set HealthBars
        this.trollHealthBar.style.width = `${100 * this.troll.health/20}%`;
        this.playerHealthBar.style.width = `${100 * this.player.health/20}%`;

        //draw dice
        this.trollD6.draw(ctx);
        this.trollD20.draw(ctx);
        this.playerD6.draw(ctx);
        this.playerD20.draw(ctx);
        

        //player button box
        this.buttonContainer.style.width = `${boardWidth}px`;
        this.buttonContainer.style.display = 'flex';
    }
}