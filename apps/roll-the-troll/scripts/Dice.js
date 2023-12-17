/**@type {HTMLCanvasElement} */

class Dice{
    constructor(responder,sides, x, y, height){
        this.responder = responder;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = this.height;
        this.spriteWidth = 120;
        this.spriteHeight = this.spriteWidth;
        this.image = new Image();
        this.image.src = "./images/DiceSpriteSheet.png";
        this.sides = sides; 
        this.num = Math.floor(Math.random() * this.sides) + 1;
        this.numFrames = new Map();
        this.animationFrames = [];
        let frame = -1; 
        if(this.sides == 6){
            //Sprite Rows for 6 Sided Die
            this.aniRow = this.numRow = 3;
            if (this.responder == 'troll'){
                this.aniRow = this.numRow = 0;
            }
            frame = 13;      
        }else{
            //Sprite Rows for 20 Sided Die
            this.aniRow = 4;
            this.numRow = 5;
            if (this.responder == 'troll'){
                this.aniRow = 1;
                this.numRow = 2;
            }    
        }
        //Load frame Information for Sprite Animation 
        for(let i=0; i<14; i++){
            let frame = [i * this.spriteWidth, this.aniRow * this.spriteHeight];
            this.animationFrames.push(frame);
        }
        //Load frame Information for Number Sprites
        for(let num = 1;num<this.sides+1; num++){
            frame ++;
            this.numFrames.set( num, 
                [frame * this.spriteWidth, this.numRow * this.spriteHeight]    
            )
        }    
    }
    update(){
        this.num = Math.floor(Math.random() * this.sides) + 1;
        return this.num;
    }
    draw(ctx){
        this.image.onload = () =>{
            ctx.clearRect(this.x, this.y, this.width, this.height);
            let frame = this.numFrames.get(this.num);
            //console.log(num);
            let x = frame[0];
            let y = frame[1];
            ctx.drawImage(this.image, x, y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }
    animate(ctx){  
        this.image.onload = () =>{
            let index = 0;
            let numFrames = this.numFrames;
            let num = this.num;
            //let name = this.sides;
            function animateRoll(image, frames, x2, y2, spriteWidth, spriteHeight, width, height){
                let frame = frames[index];
                //console.log(name);
                ctx.clearRect(x2, y2, width, height);
                let x = frame[0];
                let y = frame[1];
                ctx.drawImage(image, x, y, spriteWidth, spriteHeight, 
                    x2, y2, width, height);
                    index ++;
                if(index<frames.length){
                    setTimeout(function(){
                        animateRoll(image, frames, x2, y2, spriteWidth, spriteHeight, width, height);
                    }, 75);
                }else{
                    ctx.clearRect(x2, y2, width, height);
                    let frame = numFrames.get(num);
                    //console.log(num);
                    x = frame[0];
                    y = frame[1];
                    ctx.drawImage(image, x, y, spriteWidth, spriteHeight, x2, y2, width, height);
                }
            };
            animateRoll(this.image, this.animationFrames, this.x, this.y, this.spriteWidth, this.spriteHeight, this.width, this.height);        
        }
            
    }
}
