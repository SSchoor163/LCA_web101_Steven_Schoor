//preload the website
$(document).ready(function(){   

//variables
let $todo = $('#tooDo') // $todo set to todo list container
let $newTodo = $('#newItemForm');   //$newTodo set to item creation form
let claculatorDisplay = $('output'); // point to calculator output screen
let calculatorInput = 0; // stores calculator input

//functions
function calculatorPushToInput(){

}
function calculatorPushInputToDisplay(){

}
function calculatorEvaluateInput(){
  
}

//statements

display('welcome', 'welBtn'); // set welcome to front of page on load

// on click event when submit button is pressed. Will take the user input and create  list item with the text and a checkbox below the item creation form
$newTodo.on('submit', function(e){
    e.preventDefault();
    let text = $('input[type="text"]').val(); // set text to the user input
    let $section = "<section class='oldTodo'><button class='checkbox'></button><p>"+text+"</p></section>"; // the code and the user text to be inserted in the todo list
    $todo.append($section); // the statement that creates the todo item
    $('input[type="text"]').val(''); // clear the user input from the item creation field
});


//on click event. When checkbox is clicked delete todo item
$todo.on('click', 'button', function(){
   // point to parent of the checkbox
    let $this = $(this.parentElement);
    $this.remove(); //remove that parent
});

/*
Bubble pop code
When mouse is in game area, change to a needle Icon
Bubbles rise at an increasing rate and at 30 seconds begin a zig-zag pattern
Clicking a bubble removes the bubble and increases the players score by 1
When bubble reaches the top of the game area, end game, display score, and ask if they would like to play again
When play again button is pressed, reset game prompts
Bubbles generated choose randomly from 7 different images
Bubble spawn rate begins at 2 second intervals and decreases by .1 second every 10 seconds to a minimum of .1 seconds
Bubbles start of taking 3 seconds to reach the top and decreases at a rate of .1 sec every 10 seconds to a minimum of .5 seconds
Bubbles spawn 1 at a time and increase by 1 ev every 15 seconds
bubbles need to spawn at random coordinates along the x axis at the bottom of the screen 
*/
let randomBubble;
let bubbleCount = 0;
let bubbleSpawn = "<img class='bubble' id='bubble_"+bubbleCount+"' src='bubble_"+randomBubble+"'>";
let spawnAxis;
let bubbleSpeed;
let bubbleSpawnRate;
let bubbleSpawnNumber;
let bubblesPoped;
function bubbleGame(){

}
function spawnBubble(){
bubblecount++
randomBubble = Math.floor(Math.random()*7);
spawnAxis = Math.floor(Math.random()*350)+25;
$('#bubble_'+bubbleCount).style.left = spawnAxis;
$('#startZone').prepend(bubbleSpawn);
}
function clearBubbles(){

}



})

var current = 0;
var loc = document.getElementById("displayLocation");
var todo = document.getElementById("tooDo");
var oldToDo = document.getElementsByClassName("oldTodo");
var loc2 = $( "#displayLocation" );
var curBtn = 0;
function display(dis, btn){
    if(current != dis){
        document.getElementById(dis).style.visibility="visible";
        
    document.getElementById(btn).style.color= "yellow"
    if(current != 0) {
        document.getElementById(current).style.visibility="hidden";
        
        }
    if(curBtn != 0) {document.getElementById(curBtn).style.color="black";}
    current = dis; 
    curBtn = btn;
        }
    }
    function getLocation(){
        if(navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(displayLocation);
            }else{
                loc.innerHTML = "Unable to retreive Location. Please Enable Tracking to use this function."
            }
    }
    function displayLocation(position){
      
        loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude;
    }

    var map, infoWindow;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:  -101.94042879999999, lng: 33.589657599999995},
        zoom: 6
      });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
      
    }
    // var geoloccontrol = new klokantech.GeolocationControl(map);
    

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }





    

   