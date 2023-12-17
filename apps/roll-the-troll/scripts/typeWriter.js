let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width=window.innerWidth;
let ctx = canvas.getContext("2d");
let text = "Text here";
let i = 1;
let char;
let fps = 200;

function typeWriter(){
  char = text.slice(0, i) + "_";  
  // Clear the canvas
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.fillStyle = '#fff';
  ctx.font = '60px sans-serif';
  ctx.fillText(char, canvas.width/3, canvas.height/2);  
  if (i<=text.length){
    setTimeout(typeWriter, fps)
    i++
  }
}
typeWriter()
