//preload the website
$(document).ready(function(){   
// set welcome to front of page on load
    display('welcome', 'welBtn');


let $todo = $('#tooDo') // $todo set to todo list container
let $newTodo = $('#newItemForm');   //$newTodo set to item creation form

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





    

   