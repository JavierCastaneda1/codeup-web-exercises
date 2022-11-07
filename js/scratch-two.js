"use strict";

//TODO: Write a function names isPositive that accepts a number and returns true or false based on wherther the input is negative.

function isPositive(number){
    return number > 0;
}

console.log(isPositive(-2));         //input number will determine true of false.


//TODO:Write a function named isFortyTwo that accepts a number and returns a boolean that indicates whether that number is equal to 42.

function isFortyTwo(x){
    if(x === 42){
        return true;
    } else {
        return false;
    }
}

console.log(isFortyTwo(43));     //input number will show true or false if 42 or not 42

//TODO: Write a function named countEvens that accepts an array of numbers and returns the number of even numbers in the array.
// iterate through the array
// checking if there is a remainder of zero
// return the count
// this is an example of a foreach



let arr= [1,2,3,4,5,6,7,8,9,10]

// this one will return an array of all even numbers.
function countEvens(arr){
    let evens = [];
    arr.forEach(function(element){
        if(element % 2 === 0){
            evens.push(element);
        }
    })
    return evens;
}

console.log(countEvens(arr));

//this one will return just the number of even numbers in the array.


function countEvenstwo(arr){
    let count = 0;
    arr.forEach(function(item){
        if(item % 2 === 0){
            count ++;
        }
    })
    return count;
}
console.log(countEvenstwo(arr));








