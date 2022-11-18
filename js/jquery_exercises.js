"use strict"
$(function() {

    //TODO: Use jQuery to select an element by the id. Alert the contents of the element.

    let listItemOne = $("#first").html();
    alert(listItemOne);

    //TODO: Update the jQuery code to select and alert a different id.

    let listItemTwo = $("#second").html();
    alert(listItemTwo);

    // TODO:Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

    $(".codeup").css("border", "1px solid red");

    //TODO: Using jQuery, set the font-size of all li elements to 20px

    $("li").css("font-size", "20px");

    // $("h1").css("background-color", "green");
    // $("p").css("background-color", "green");
    // $("li").css("background-color", "green");

    //TODO: Craft selectors that highlight all the h1, p, and li elements.

    // $("h1, p, li").css("background-color", "green");

    //TODO: Create a jQuery statement to alert the contents of your h1 element(s).

    // let content = $("h1").html();
    // alert(content);

    //TODO:Add jQuery code that will change the background color of an h1 element when clicked.

     $("h1").click(function(){
         $(this).css("background-color","purple");
     })

    //TODO: Make all paragraphs have a font size of 18px when they are double clicked.

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    })
    //TODO: Set all li text color to red when the mouse is hovering; reset to black when it is not.

    $("li").hover(
        function(){
            $(this).css("color","red");
        },
        function(){
            $(this).css("color","black")
        }
    );

});