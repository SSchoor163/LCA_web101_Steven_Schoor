$('document').ready(function(e){

$('button').click(function(e){
    e.preventDefault();
    let tries = 1;
    let min = 1;
    let max = 1000;
    let compGuess = max/2;
    var compOutput;
    var userGuess = $('#userNumber').val();
while(compGuess != userGuess){
  compOutput = "<li>Round " + tries + " Computer guesses " + compGuess + "</li>";

 if(compGuess <= userGuess) // top half case
 { 
    min = compGuess;
    compGuess = Math.round(min+((max-min)/2)); 
    $('#outPut').append(compOutput);}
else if (compGuess >= userGuess) //lower half case
{
    max = compGuess;
    compGuess = Math.round(min+((max-min)/2));
    $('#outPut').append(compOutput);
}
  tries++;
    
    
        
        
    }
    $('#outPut').prepend("<li> Computer guessed " + userGuess + " correctly on round " + tries + "</li>");



} );

});