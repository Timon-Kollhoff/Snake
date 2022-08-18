let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');



let row = 20;
let collum = 20;



let snake = [{
    x: 8,
    y: 3
}];

let food;

let cellwidth = canvas.width/collum;
let cellheight = canvas.height/row;
let direction = "LEFT";
let foodcollected = false;

placefood();
setInterval(gameLoop ,300);
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


  function shiftsnake() { 
    for (let i = snake.length -1; i  > 0 ; i--) {
        const part = snake[i];
        const lastpart = snake[i-1];
        part.x = lastpart.x;
        part.y = lastpart.y;
    }
   }

  function gameLoop() { 
   
    if(snake[0].x == collum || snake[0].y == row || snake[0].x == -1 || snake[0].y == -1){
        snake = [{
            x: 8,
            y: 3
        }];
    }

    if(foodcollected){
        snake = [{
            x:snake[0].x ,
            y:snake[0].y

        }, ...snake];
        foodcollected= false;
    }
    shiftsnake();
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

    if(snake[0].x == food.x && snake[0].y == food.y){

        foodcollected = true;
        placefood();
    }
    
   }


   function placefood() { 

    food = {
        x: Math.floor(Math.random() * collum -1) + 1,
        y: Math.floor(Math.random() * collum -1) + 1
    };
    
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