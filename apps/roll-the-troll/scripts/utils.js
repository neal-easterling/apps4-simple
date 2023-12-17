/*
    UTILS FOR ROLL THE TROLL ONLINE
*/

function roundRect (cxt, x, y, x2, y2, radius, fill, stroke, strokeWidth) {
    let width = x2 - x;
    let height = y2-y;
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    cxt.beginPath();
    cxt.moveTo(x + radius, y);
    cxt.arcTo(x + width, y, x + width, y + height, radius);
    cxt.arcTo(x + width, y + height, x, y + height, radius);
    cxt.arcTo(x, y + height, x, y, radius);
    cxt.arcTo(x, y, x + width, y, radius);
    cxt.closePath();
    cxt.fillStyle = fill;
    cxt.fill();
    cxt.strokeStyle = stroke;
    cxt.lineWidth = strokeWidth;
    cxt.stroke();
}

function typewriterEffect(input){
  
    document.getElementById("textbox").innerHTML += input[index]
  
    index++
    
    if(index < input.length){
      setTimeout(function(){
        typewriterEffect(input)
      }, 50)
    }
  }