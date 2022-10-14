"use strict"
//EXERCISE 1
//Create a file named for_loops.js inside the js directory and link it to your loops.html file.
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

function showMultiplicationTable(x){
    for (let i = 1; i <= 10; i++){
        console.log(`${x} x ${i} = ${x*i}, is your answer`);
    }
    console.log(`Im done`)
}

showMultiplicationTable(7);


for (var x=Math.floor(Math.random() * 10); x<=20; x++) {
    if (x === 0) {
        console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}






