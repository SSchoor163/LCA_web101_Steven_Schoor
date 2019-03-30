$(document).ready(function(){
   let $section = $('p');
   let $p = $('p');
   $p.click(function(){
        this.innerHTML = "puggggg";
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
            curBtn = btn
             }
            }
