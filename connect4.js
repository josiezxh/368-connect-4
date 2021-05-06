let turn = true; // true when p1 turn, false when p2 turn.

// boardArr keeps track of chip placement, each array is a column.
// each array goes bottom to top, example, boardArr[0,0] is bottom of colA, boardArr[6,5] is top of colG.
let boardArr = [[0,0,0,0,0,0], // colA
                [0,0,0,0,0,0], // colB 
                [0,0,0,0,0,0], // colC
                [0,0,0,0,0,0], // colD
                [0,0,0,0,0,0], // colE
                [0,0,0,0,0,0], // colF
                [0,0,0,0,0,0]];// colG

function playTurn(col){
var disc = document.getElementById("#colA");
disc.animate({})

}