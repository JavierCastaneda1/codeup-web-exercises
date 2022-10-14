"use strict"
//EXERCISE 1
//Create a file named for_loops.js inside the js directory and link it to your loops.html file.
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

// function showMultiplicationTable(x){
//     for (let i = 1; i <= 10; i++){
//         console.log(`${x} x ${i} = ${x*i}, is your answer`);
//     }
//     console.log(`Im done`)
// }
//
// showMultiplicationTable(7);

//*example work*
// for (var x=Math.floor(Math.random() * 10); x<=20; x++) {
//     if (x === 0) {
//         console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     else {
//         console.log(x + " is odd");
//     }
// }
// *the following code is exercise 3
//
// function randomEvenAndOdd(){
//     for(let i = 0; i < 10; i++) {
//         let random = Math.floor( (Math.random()) * 200 + 20);
//         let sign = (random % 2 > 0) ? 'is odd' : 'is even';
//         console.log(`${random} ${sign}`);
//     }
}

//exercise 4
let output = '1';
for (let i = output; i<=9; i++)
{
    output = i;
    for (let j = 1; j < i; j++)
    {
        output += i.toString();
    }
    console.log(output);
}

//exercise 5 **incomplete**
//
// let setNum = '100';
//     for (let i = setNum; i > 0; i--)
//     {
//
//     }






