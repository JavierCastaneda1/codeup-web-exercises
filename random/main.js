/**
 * Write your solutions here
 */

$(document).ready(function(){


// TODO 1:When the box with the id of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'

$(`.dbl-click-box`).click(function(){
    alert(`BOX DOUBLE-CLICKED`);
})

//TODO 2:Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT: changes should be applied to the body of the HTML.

$(`#dark-mode-btn`).click(function(){
    $(`body`).toggleClass(`dark-mode`);
})

//TODO 3:When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it, in lowercase, in the span with the id of lowercase (<span id="lowercase">).

// when the span with the id of uppercase is entered with mouse...
$(`#uppercase`).mouseenter(function(){
    let upper = $(this).text();  //declare variable that sets text. upper will = the text.
    $(`#lowercase`).text(upper.toLowerCase()) //throw in variable declared to lowercase.
})

$(`#uppercase`).mouseleave(function(){
    $(`#lowercase`).text(``);
})

//TODO 4:The span with an id of counter should increment by one every second.

let counter = 0;
setInterval(function () {
    $(`#counter`).text(counter)
    counter ++;
}, 1000)

//TODO 5:When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed in the input field (<input id="characters">), and output each individual character as a separate list item within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.

$(`#list-chars-btn`).click(function(e){
    e.preventDefault();
    $(`#characters-list`).empty();
    let input = $(`#characters`).val().split(``);


    input.forEach(function(char){
        if(char === ` `){
            $(`#characters-list`).append(`</ul><br> <ul>`)
        }
        else {
            $(`#characters-list`).append(`<li>${char}</li>`);
        }
    })
})


// TODO 6:When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list item that has a class (<li class="animal-list-item">) should be concatenated to the list item that immediately follows it.


$(`#clean-animal-list-btn`).click(function(){
    $(`.animal-list-item`).each(function(){
        let current = $(this).text();
        let next = $(this).next().text();

        $(this).next().text(`${next} ${current}`);
        $(this).remove();
    })});



// $(`#clean-animal-list-btn`).click(function(){
//     // let allLis = $(`.animal-list-item`);
//     // console.log(allLis[0].text());
//     // for (let i=0; i< allLis.length; i++){
//     //     let str = allLis[i].text();
//     //     let nextEl = allLis[i].next();
//     //     let nextText = nextEl.text();
//     //     nextEl.text(`${str} ${nextText}`);
//     //     allLis[i].remove();
//     // }
//     $(`.animal-list-item`).each(function (){
//         let str = $(this).text();
//         let next = $(this).next().text();
//         $(this).text(` ${next} ${str}`);
//         $(this).next().remove();
//     })
// });


//TODO 7: When hovering over the divs within the div with a class of hidden-letters, a letter will become visible in a span within the div being hovered over.

//


$('div.hidden-letters > div').hover(function() {
    $(this).children('span').css('visibility', 'visible')
})


})