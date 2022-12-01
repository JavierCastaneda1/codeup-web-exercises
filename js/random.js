$(document).ready(function(){

    $(`.acePara`).hide();
    $(`.special`).hide();

    $(`#aceDiv`).on(`click`, function() {
        $(`.acePara`).toggle();
    });

    $(".pinkButton").on("click",function() {
        setTimeout(function() {
            $('.container').css(`background-color`, 'pink');}, 3000);
    });

});
