var gameBoard = document.getElementById('board'); //Get DOM object
if (gameBoard.getContext) //check availability of canvas
{
  var ctx = gameBoard.getContext('2d'); //return context of canvas
}
var grid = 16; // each grid has 20px
var count = 0;
var score = 0;
var scoreH = 0;
document.getElementById('score').innerHTML = score;
document.getElementById('high').innerHTML = scoreH;
//snake object
var snake =
{
  //initialize snake position on the board
  x: 192, //initial x position
  y: 192, //initial y position

  //initialize snake moving speed
  xSpeed: grid,
  ySpeed: 0,

  //snake body, array of grid
  body: [],

  //initial size of snake
  size: 3

};

//berry object
var berry =
{
  //initialize first berry location
  x: 80,
  y: 160
};

//function for generating random number with lower and upper bound
//WorkSited: https://stackoverflow.com/a/1527820/2124254
random = (min, max)=>
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//start implementation of game
game = ()=>
{
  //tell browser that you wish to perform an animation
  //WorkSited: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  requestAnimationFrame(game);
  //let game running at 15 fps, originally 60fps which was way too fast
  if (++count < 6) {
    return;
  }
  count = 0;

  //erases canvas
  //WorkSited: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
  ctx.clearRect(0, 0, gameBoard.width, gameBoard.height);

  //let snake move as default speed
  snake.x += snake.xSpeed;
  snake.y += snake.ySpeed;

  // reset the game on edge of screen
  if (snake.x < 0) {
    alert("game over");
    snake.x = 192;
    snake.y = 192;
    snake.body = [];
    snake.size = 3;
    snake.dx = grid;
    snake.dy = 0;
    berry.x = 80;
    berry.y = 160;
    score = 0;
    document.getElementById('score').innerHTML = score;
  }
  if (snake.x >= gameBoard.width) {
    alert("game over");
    snake.x = 192;
    snake.y = 192;
    snake.body = [];
    snake.size = 3;
    snake.dx = grid;
    snake.dy = 0;
    berry.x = 80;
    berry.y = 160;
    score = 0;
    document.getElementById('score').innerHTML = score;
  }
  // reset the game on edge of screen
  if (snake.y < 0) {
    alert("game over");
    snake.x = 192;
    snake.y = 192;
    snake.body = [];
    snake.size = 3;
    snake.dx = grid;
    snake.dy = 0;
    berry.x = 80;
    berry.y = 160;
    score = 0;
    document.getElementById('score').innerHTML = score;
  }
  if (snake.y >= gameBoard.height) {
    alert("game over");
    snake.x = 192;
    snake.y = 192;
    snake.body = [];
    snake.size = 3;
    snake.dx = grid;
    snake.dy = 0;
    berry.x = 80;
    berry.y = 160;
    score = 0;
    document.getElementById('score').innerHTML = score;
  }

  //WorkSited: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
  snake.body.unshift({x: snake.x, y: snake.y});
  if (snake.body.length > snake.size) {
    snake.body.pop();
  }

  //draw berry on canvas
  ctx.fillStyle = "red"; //fill berry cell with red
  ctx.fillRect(berry.x, berry.y, grid - 1, grid - 1);

  //draw snake on canvas
  ctx.fillStyle = "white"; //fill snake body cells with white
  snake.body.forEach((body, index) =>
  {
    ctx.fillRect(body.x, body.y, grid - 1, grid - 1);

    if(body.x === berry.x && body.y === berry.y) //if snake at berry location
    {
      snake.size++;
      score++;
      if(score > scoreH)
      {
        scoreH = score;
        document.getElementById('high').innerHTML = scoreH;
      }
      document.getElementById('score').innerHTML = score;
      berry.x = random(0, 25) * grid;
      berry.y = random(0, 25) * grid;
    }
    for (var i = index + 1; i < snake.body.length; i++)
    {
      // snake occupies same space as a body part. reset game
      if (body.x === snake.body[i].x && body.y === snake.body[i].y)
      {
        alert("game over");
        snake.x = 192;
        snake.y = 192;
        snake.body = [];
        snake.size = 3;
        snake.dx = grid;
        snake.dy = 0;
        berry.x = 80;
        berry.y = 160;
        score = 0;
        document.getElementById('score').innerHTML = score;
      }
    }
  });
}

document.addEventListener('keydown', (e)=>
{
  // if press left arrow key
  if (e.which === 37 && snake.xSpeed === 0) {
    snake.xSpeed = -grid;
    snake.ySpeed = 0;
  }
  // if press right arrow key
  else if (e.which === 39 && snake.xSpeed === 0) {
    snake.xSpeed = grid;
    snake.ySpeed = 0;
  }
  // if press up arrow key
  else if (e.which === 38 && snake.ySpeed === 0) {
    snake.ySpeed = -grid;
    snake.xSpeed = 0;
  }
  // if press down arrow key
  else if (e.which === 40 && snake.ySpeed === 0) {
    snake.ySpeed = grid;
    snake.xSpeed = 0;
  }

});
requestAnimationFrame(game);
