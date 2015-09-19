$(document).ready(function(){
for (i=0; i<4; i++){
    $('table').append('<tr><td></td><td></td><td></td><td></td></tr>');	   
}

$("td").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "yellow");
});

test = function(){
x= prompt("how many grid blocks? try 1-50");
    $("tr").remove();    
    
    for (i=0; i<x; i++){
    $('table').append('<tr></tr>');
    }
        for(i=0; i<x; i++){
        $('tr').append('<td></td>');
        }


$("td").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "yellow");
});
}

$('button').click(test);

});