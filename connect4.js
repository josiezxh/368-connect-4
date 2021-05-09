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


var j;
  //check to see what is already in arrays and add where it is empty.
  outerloop: for(j = 0; j < 6; j++)
  {
    if(boardArr[i][j] == 0)
    {
      console.log("value =" + boardArr[i][j]);
      console.log("i =" + i);
      console.log("j =" + j);
      boardArr[i][j] = player;
      // for testing
      console.table(boardArr);

      //returns the y position to assign to circle element
      break outerloop;
    }
  }

  return(j);


}

function winCheck(){
 return(false);
}

function playTurn(col){
  var parent = document.getElementById(col);


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


  var yPos;
  // set x position of disc based off column clicked
  if(col == "colA")
  {
    disc.setAttribute("cx", "50");
    yPos = addToBoard("colA");
  }
  else if(col == "colB")
  {
    disc.setAttribute("cx", "150");
    yPos = addToBoard("colB");
  }
  else if(col == "colC")
  {
    disc.setAttribute("cx", "250");
    yPos = addToBoard("colC");
  }
  else if(col == "colD")
  {
    disc.setAttribute("cx", "350");
    yPos = addToBoard("colD");
  }
  else if(col == "colE")
  {
    disc.setAttribute("cx", "450");
    yPos = addToBoard("colE");
  }
  else if(col == "colF")
  {
    disc.setAttribute("cx", "550");
    yPos = addToBoard("colF");
  }
  else if(col == "colG")
  {
    disc.setAttribute("cx", "650");
    yPos = addToBoard("colG");
  }

  // assign y position to circle element
  if(yPos == 0)
  {
    disc.setAttribute("cy", "650");
  }
  else if(yPos == 1)
  {
    disc.setAttribute("cy", "550");
  }
  else if(yPos == 2)
  {
    disc.setAttribute("cy", "450");
  }
  else if(yPos == 3)
  {
    disc.setAttribute("cy", "350");
  }
  else if(yPos == 4)
  {
    disc.setAttribute("cy", "250");
  }
  else if(yPos == 5)
  {
    disc.setAttribute("cy", "150");
  }

  disc.setAttribute("r","40");
  disc.setAttribute("fill",color);
  disc.setAttribute("stroke",color);

  // check for win
  if(!winCheck()) // if no wins
  {
    //change the turn
    turn = !turn;

    //change colors and text depending on current player
    if(turn)
    {
      //change color of the discs
      document.querySelectorAll(".ghost").forEach(x => {
        x.setAttribute("fill", "#ff898a");
        x.setAttribute("stroke", "#ff898a");
      });

      document.querySelector(".currentTurn").innerHTML = "Player 1's";
    }
    else
    {
      //change color of the discs
      document.querySelectorAll(".ghost").forEach(x => {
        x.setAttribute("fill", "#cfeafa");
        x.setAttribute("stroke", "#cfeafa");
      });

      document.querySelector(".currentTurn").innerHTML = "Player 2's";
    }
    
  }

  // movement for disc, drop down, not working yet
  /*var anime = document.createElementNS("http://www.w3.org/2000/svg", 'animate');
  disc.appendChild(anime);
  anime.setAttribute("attributeName", "cy");
  anime.setAttribute("from", "50");
  //anime.setAttribute("to", "650");
  anime.setAttribute("speed", "3s");
  //anime.setAttribute("begin", "0s");
  anime.setAttribute("fill", "freeze");

  if(yPos == 0)
  {
    anime.setAttribute("to", "650");
  }
  else if(yPos == 1)
  {
    anime.setAttribute("to", "550");
  }
  else if(yPos == 2)
  {
    anime.setAttribute("to", "450");
  }
  else if(yPos == 3)
  {
    anime.setAttribute("to", "350");
  }
  else if(yPos == 4)
  {
    anime.setAttribute("to", "250");
  }
  else if(yPos == 5)
  {
    anime.setAttribute("to", "150");
  }*/
}