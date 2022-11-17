"use strict"
$(function() {

    // Use jQuery to select an element by the id. Alert the contents of the element.
    let listItemOne = $("#first").html();
    alert(listItemOne);
    // Update the jQuery code to select and alert a different id.
    let listItemTwo = $("#second").html();
    alert(listItemTwo);
    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    $(".codeup").css("border", "1px solid red");
    // Using jQuery, set the font-size of all li elements to 20px
    $("li").css("font-size", "20px");

    // $("h1").css("background-color", "green");
    // $("p").css("background-color", "green");
    // $("li").css("background-color", "green");

    // Craft selectors that highlight all the h1, p, and li elements.
    $("h1, p, li").css("background-color", "green");

    // Create a jQuery statement to alert the contents of your h1 element(s).
    let content = $("h1").html();
    alert(content);

});