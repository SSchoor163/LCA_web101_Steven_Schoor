/*This javascript will simulate the game tictactoe by referncing the p tags in the html and their value
sequence of events
ask which marker player 1 will choose
display turn player 1
player 1 choose a square
displayer player 2
player 2 choose a square
check victory conditions
repeat until victory conditions are met.
when victory conditions are met display player number and ask if they would like to player again
displayer a Y and a N
if yes clear board and start over 
*/
var space1 = null;
var space2 = null;
var space3 = null;
var space4 = null;
var space5 = null;
var space6 = null;
var space7 = null;
var space8 = null;
var space9 = null;
var player1 = null;
var player2 = null;

function setBoard(){
   space1 = document.getElementById('one').innerHTML="";
   space2 = document.getElementById('two').innerHTML="";
   space3 = document.getElementById('three').innerHTML="";
   space4 = document.getElementById('four').innerHTML="";
   space5 = document.getElementById('five').innerHTML="";
   space6 = document.getElementById('six').innerHTML="";
   space7 = document.getElementById('seven').innerHTML="";
   space8 = document.getElementById('eight').innerHTML="";
   space9 = document.getElementById('nine').innerHTML="";
   display('Player 1 Choose a marker!');

}

function display(text){
    document.getElementById('display').innerHTML= text;
}

function playerMarkerChoice(choice){
    
    if(choice = 'X')
        {
            player1 = 'X';
            player2 = 'O';
        }
    else{
        player1 = 'O';
        player2 = 'X';
    }
    document.getElementById('mark1').style.visibility='hidden';
    document.getElementById('mark2').style.visibility='hidden';
    display('Game Start. Player 1 choose a square!')
}

function playerGridSelect(player){
    display(player+'choose a square!');

}

function victoryConditions(){

}

