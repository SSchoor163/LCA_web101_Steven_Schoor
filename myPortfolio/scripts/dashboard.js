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
        var curBtn = 0;
            function display(dis, btn){
            if(current != dis){
                document.getElementById(dis).style.zIndex="1";
            document.getElementById(btn).style.color= "yellow"
            if(current != 0) {document.getElementById(current).style.zIndex="-1";}
            if(curBtn != 0) {document.getElementById(curBtn).style.color="black";}
            current = dis; 
            curBtn = btn;
             }
            }

        