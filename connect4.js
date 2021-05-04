var board = document.getElementById("board");
var context = board.getContext("2d");
var redDisk, blueDisk;

function startGame() {
    myGameArea.start();
    redPiece = new makeDisk(50,"red",70,75);
  }
  

function makeDisk(r,color, x, y) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, 1.5*Math.PI);
    context.stroke();
    
  }

  function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
  }