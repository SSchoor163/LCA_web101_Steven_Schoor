$(document).ready(function(){

    $('#btnTo').click(function(e){
        e.preventDefault();
       let translate = $('#toPig').val();
        
        let drop = translate.split('');
        let take = drop.shift()+"ay";
        take = take.split('');
        drop = drop.concat(take);
       
        drop = drop.join('');
        translate = drop;
       $('#toLatin').text(translate);
    });
    $('#btnFrom').click(function(e){
        e.preventDefault();
        let translate = $('#fromPig').val();
        translate = translate.slice(0, translate.length-2);
        let just = translate.substr(-1);
        translate = translate.slice(0, translate.length-1);
        translate = just.concat(translate);
        
       $('#fromLatin').text(translate);
    });


});