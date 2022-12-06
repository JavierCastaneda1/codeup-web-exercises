

$(document).ready(function(){

$("#change-heading").click(function(){
    $("#main-heading").html("Whats good man, i control the DOM");
})

$("#getInput").click(function(){
    let inputVal = $("#userInput").val();
        $("#showInput").html(inputVal);
})







$("li button").each(function(index){
    $(this).click(function(){
        $("li p").eq(index).html("You changed me!");
    })
})










})
