/*This javascript will simulate the game tictactoe by referncing the p tags in the html and their value
sequence of events
ask which marker player 1 will choose
display turn player 1
player 1 choose a square
ensure square is not already used
displayer player 2
ensure square is not already used
player 2 choose a square
check victory conditions
repeat until victory conditions are met.
when victory conditions are met display player number and ask if they would like to player again
displayer a Y and a N
if yes clear board and start over 
*/
var space = ["", "", "" , "" , "" , "", "", "", "", "" ];
var turn;
var player1 = 'true';
var player1Marker;
var player2 = 'false';
var player2Marker;
var victory;

function setBoard(){
   turn = 0;
   player1 = 'true';
   player1Marker = undefined;
   player2 = 'false';
   player2Marker = 'p';
   victory = false;
   document.getElementById('mark1').style.visibility='visible';
    document.getElementById('mark2').style.visibility='visible';
   var gridID = null;
   space = ["", "", "" , "" , "" , "", "", "", "", "" ];
   for(var x=1;  x < 10; x++){
       gridID = "grid"+ x;
        document.getElementById(gridID).innerHTML="";
}  
   display('Player 1 Choose a marker!');
}

function display(text){
    document.getElementById('display').innerHTML= text;
}



function playerMarkerChoice(choice){
    var x = choice;
    if(x == "X")
        {
            player1Marker = "X";
            player2Marker = "O";
        }
    else{
        player1Marker = "O";
        player2Marker = "X";
    }
    document.getElementById('mark1').style.visibility='hidden';
    document.getElementById('mark2').style.visibility='hidden';
    display('Game Start. Player 1 choose a square!')
}
function currentGrid(choice){
    gridSpace = document.getElementById(choice).innerHTML;
    if(player1Marker == undefined )
        {
            display('Player 1 must choose a Marker first.')
            return
        }
    else if(gridSpace == "X" || gridSpace == "O")
    {
        display('That square is already choosen. Choose again!');
    }
    else if(victory==true){
        return
    }
    else
    {
        gridSpace = document.getElementById(choice);
        if (player1 == 'true' ){
            gridSpace.innerHTML=player1Marker;
            space[gridSpace.getAttribute("title")] = player1Marker;
            if(victoryConditions() == true) return;
            player1='flase';
            player2='true';
            display('Player 2 choose a square!')
            
        }
        else{
            gridSpace.innerHTML=player2Marker;
            space[gridSpace.getAttribute("title")] = player2Marker;
            if(victoryConditions() == true) return;
            player1='true';
            player2='false';
            display('Player 1 choose a square!')
            
        }
    }
}
function displayVictor(){
    if(player1=='true'){
        display('You win Player 1. Would you like to play again?');
    }else{
        display('You win Player 2. Would you like to play again?');
    }
}

function victoryConditions(){
    if (turn == 9){
        display('Game is a tie!')
        return true;
    }
    if(player1 == 'true'){
        // if(     (space[1]==player1Marker&&space[2]==player1Marker&&space[3]==player1Marker) ||
        //         (space[1]==player1Marker&&space[4]==player1Marker&&space[7]==player1Marker) || 
        //         (space[1]==player1Marker&&space[5]==player1Marker&&space[9]==player1Marker) || 
        //         (space[2]==player1Marker&&space[5]==player1Marker&&space[8]==player1Marker) || 
        //         (space[3]==player1Marker&&space[6]==player1Marker&&space[9]==player1Marker) ||
        //         (space[3]==player1Marker&&space[5]==player1Marker&&space[7]==player1Marker) ||
        //         (space[4]==player1Marker&&space[5]==player1Marker&&space[6]==player1Marker) ||
        //         (space[7]==player1Marker&&space[8]==player1Marker&&space[9]==player1Marker)) 
        for( var x = 1; x< 8; x = x+3){
            if(space[x] == space[x+1]  
                && space[x+1] == space[x+2]
                && space[x] != ""){display('You win Player 1. Would you like to play again?');
                return true;}
        }
        for(var x = 1; x< 4; x++){
            if(space[x] == space[x+3]  
                && space[x+3] == space[x+6]
                && space[x] != ""){display('You win Player 1. Would you like to play again?');
                return true;}}
        if(space[1] == space[5]  
            && space[5] == space[9]
            && space[1] != "" ){
                display('You win Player 1. Would you like to play again?');
                return true; 
            }
            if(space[3] == space[5]  
                && space[5] == space[7]
                && space[3] != "" ){
                    displayVictor();
                    return true; 
                }   
        
    }

    
        
        
    turn += 1;
}

