$(document).ready(function(){
// HIDES PARAGRAPH
    $(`p`).hide();
// SELECTED DIV ON CLICK WILL TOGGLE
    $(`#godDiv`).on(`click`, function() {
        $(`#godPara`).toggle();
    })
    // $( "#submitButton" ).click(function() {
    //   $(`#special`).delay(800).toggle();
    // })
    $("#submitButton").on("click",function() {
        setTimeout(function() {
            $('.container').css(`background-color`, 'pink');}, 3000);
    });

});
