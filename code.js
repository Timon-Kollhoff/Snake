let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');



let row = 20;
let collum = 20;



let snake = [{
    x: 8,
    y: 3
}];

let food = {
    x: 4,
    y: 5
};


let cellwidth = canvas.width/collum;
let cellheight = canvas.height/row;
let direction = "LEFT";


setInterval(gameLoop ,400);
document.addEventListener("keydown" , keyDown);

draw();

function draw() { 
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'white';
    snake.forEach(part => add(part.x , part.y));
   
    ctx.fillStyle = "green";
    add(food.x,food.y);
    
    requestAnimationFrame(draw);
 }


 function add(x,y) { 
    ctx.fillRect(x * cellwidth ,y * cellheight , cellwidth - 1 , cellheight - 1 );
  }


  function gameLoop() { 
    if(direction == "LEFT"){
        snake[0].x--;

    }
    if(direction == "UP"){
        snake[0].y--;
    }
    if(direction == "RIGHT"){
        snake[0].x++;
    }
    if(direction == "DOWN"){
        snake[0].y++;
    }
    
   }


   function keyDown(e) { 
        if(e.keyCode == 37){
            direction = "LEFT";
        }
        if(e.keyCode == 38){
            direction = "UP";
        }
        if(e.keyCode == 39){
            direction = "RIGHT";
        }
        if(e.keyCode == 40){
            direction = "DOWN";
        }
    }