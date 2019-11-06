var gameBoard = document.getElementById('board'); //Get DOM object
if (canvas.getContext) //check availability of canvas
{
  var ctx = canvas.getContext('2d'); //return context of canvas

  var grid = 10; // moving speed variable
  var count = 0;

  //snake object
  var snake
  {
    //initialize snake position on the board
    x: 100, //initial x position
    y: 100, //initial y position

    //initialize snake moving speed
    xSpeed: grid,
    ySpeed: 0,

    //initial size of snake
    size: 3,

    //snake body, array of grid
    body: []
  };

  //berry object
  var berry
  {
    //initialize first berry location
    x: 250,
    y: 400
  };

  //function for generating random number with lower and upper bound
  //WorkSited: https://stackoverflow.com/a/1527820/2124254
  random = (min, max)=>
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //start implementation of game
  game = ()=>
  {
    //tell browser that you wish to perform an animation
    //WorkSited: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    requestAnimationFrame(game);
    
}
