let konamiCode = [];
let codeArray = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

// HIDE GIF ON PAGE LOAD
$("#gif-contra").hide();
$("#gif-gordon").hide();
$("#textUnder").hide();



//FUNCTION THAT TAKES KEY INPUT
$(document).keyup(function(e){

    konamiCode.push(e.key);
    console.log(konamiCode, codeArray);

    if (konamiCode.join("") === codeArray.join('')) {
        konamiCode =[];
        console.log("Cheats Activated");
        $('#gif-contra').slideDown('slow') && $("#textUnder").slideDown('slow)');
    }
    else if (konamiCode.length === codeArray.length ){
        $('#gif-gordon').slideDown('slow');
        konamiCode = [];
    }

});

$(document).ready(function(){
    $("button").click(function(){
        location.reload(true);
    });
})





