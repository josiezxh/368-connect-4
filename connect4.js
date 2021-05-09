let turn = true; // true when p1 turn, false when p2 turn.

// boardArr keeps track of chip placement, each array is a column.
// each array goes bottom to top, example, boardArr[0,0] is bottom of colA, boardArr[6,5] is top of colG.
// 0 is empty, 1 is player1 disc, 2 is player2 disc.
let boardArr = [[0,0,0,0,0,0], // colA
                [0,0,0,0,0,0], // colB 
                [0,0,0,0,0,0], // colC
                [0,0,0,0,0,0], // colD
                [0,0,0,0,0,0], // colE
                [0,0,0,0,0,0], // colF
                [0,0,0,0,0,0]];// colG

function addToBoard(col){
  // set which column to be added to based on where user clicked
  var i;
  if(col == "colA")
  {
    i = 0;
  }
  else if(col == "colB")
  {
    i = 1;
  }
  else if(col == "colC")
  {
    i = 2;
  }
  else if(col == "colD")
  {
    i = 3;
  }
  else if(col == "colE")
  {
    i = 4;
  }
  else if(col == "colF")
  {
    i = 5;
  }
  else if(col == "colG")
  {
    i = 6;
  }

  //set which player is placing
  if(turn)
  {
    var player = 1;
  }
  else{
    var player = 2;
  }

  //check to see what is already in arrays and add where it is empty.
  for(var j = 0; j < 6; j++)
  {
    if(boardArr[i][j] == 0)
    {
      boardArr[i][j] = player;
      break;
    }
  }

  console.table(boardArr);
}

function playTurn(col){
  var parent = document.getElementById(col);
  /*var anime = document.createElement("animate");
  disc.appendChild(anime);
  anime.id='newAnimation';
  var move = document.getElementById('newAnimation');
  move.setAttribute("attributeName", "cy");
  move.setAttribute("from", "50");
  move.setAttribute("to", "150");
  move.setAttribute("dur", "1s");
  move.setAttribute("begin", "0s");
  move.setAttribute("fill", "freeze");*/

  // set color of disc based off current player
  if(turn)
  {
    var color = "#ff383a";
  }
  else{
    var color = "#00a0ff";
  }

  // create the circle element, the disc
  var disc = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  document.getElementById("gamesvg").appendChild(disc);

  // set x position of disc based off column clicked
  if(col == "colA")
  {
    disc.setAttribute("cx", "50");
    addToBoard("colA");
  }
  else if(col == "colB")
  {
    disc.setAttribute("cx", "150");
    addToBoard("colB");
  }
  else if(col == "colC")
  {
    disc.setAttribute("cx", "250");
    addToBoard("colC");
  }
  else if(col == "colD")
  {
    disc.setAttribute("cx", "350");
    addToBoard("colD");
  }
  else if(col == "colE")
  {
    disc.setAttribute("cx", "450");
    addToBoard("colE");
  }
  else if(col == "colF")
  {
    disc.setAttribute("cx", "550");
    addToBoard("colF");
  }
  else if(col == "colG")
  {
    disc.setAttribute("cx", "650");
    addToBoard("colG");
  }

  disc.setAttribute("cy","650");
  disc.setAttribute("r","40");
  disc.setAttribute("fill",color);
  disc.setAttribute("stroke",color);

}