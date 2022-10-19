"use strict";

//*example of console.log taking "user input" from prompt.*
//var userInput = prompt('Please type something:');
//console.log('The user entered: ' + userInput);

//*example of a "box pop up" type alert on a website. Note: has a "ok" button.*
//alert("Welcome to my website!");

//*example of a prompt that logs the user's input*
// var userInput = prompt('What is your favorite color?');
// console.log('The user entered: ' + userInput);


//*example of a function and how to invoke it*
// let name = "Javier";
//
// function logThis() {
//     console.log('Hey ')
//     console.log('whats ')
//     console.log('up!')
// }
//
// logThis();

// *example of a function that takes in two numbers and adds them*

// function adder(num1, num2) {
//     console.log(num1 + num2);
// }
//
// adder(5,10);

//*Practice Assessment*
//
//TODO 1: Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// function isBoolean(input) {
//     return typeof input == "boolean";
// }
//
//TODO 2: Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// function isString(str) {
//     return typeof str === "string";
// }
//


// function isNotString(str) {
//     return !isString(str);
// }
//
// function isEmptyString(str) {
//     return str === "";
// }
//
// function isNotANumber(num) {
//     return typeof num !== "number";  // return isNaN(parseFloat(num));
// }
//
// function isNegative(num) {
//     return num < 0;
// }
//
// function isPositive(num) {
//     return num > 0;     //zero is not negative or positive
// }
//
// function isZero(zero) {
//     return zero == 0;
// }
//
// function isArray(arr) {
//     return Array.isArray();   //this is the question that will make you go Google
// }
//
// function upperCase(str) {
//     if (isString(str)) {
//         return str.toUpperCase();
//     } else {
//         return false;
//     }
// }

//*end of answers for the first assessment*

//*use of .toUpperCase*
// upperCase(input){
//     If (typeof input === “string”){
//         Return input.toUpperCase
//     }else {
//         Return false
//     }



// **Convert a string to a number
// Use parseInt, or Parsefloat
// Let myNumber = 42;
// parseInt(my number);
// parseInt(myNumber);

//Second assessment STUDY SHEET

// TODO 1: Define a function named isANumber that takes in a value and returns true if the input is numeric, or false if the input is not numeric. Numeric strings should not be considered as numbers in this function, and should return false.


function isANumber(input){
    return typeof input === "number";
}



// TODO 2: Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

//DAVID'S SOLUTION
// function increment(num){
//     if(!isNaN(parseFloat(num))){
//         return parseFloat(num) + 1;
//     } else {
//         return false;
//     }
// }


function increment(num) {
    let parsedInput = parseFloat(num);
    if(isNaN(parsedInput)){
        return false;
    } else {
        return parsedInput + 1;
    }
}


//TODO 3: Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.

function decrement(num) {
    let parsedInput = parseFloat(num);
    if(isNaN(parsedInput)){
        return false;
    } else {
        return parsedInput - 1;
    }
}

//TODO 4:Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.



function getHighestNumber(a,b,c){
    if(isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))) {
        return false;
    } else {
        return Math.max(a,b,c);
    }
}


//TODO 5: Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.


function parseNumber(input) {
    return parseFloat(input);
}


//TODO: 6: Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.

function add(x, y) {
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    } else{
        return parseFloat(x) + parseFloat(y);
    }
}


//TODO 7: Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

function multiply(x, y) {
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    } else{
        return parseFloat(x) * parseFloat(y);
    }
}

//TODO 8: Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

function square(x) {
    return multiply(x, x);
}



//TODO 9: Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfSquares(x,y) {
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return false;
    } else{
        return Math.pow(x, 2) + Math.pow(y, 2);
    }
}


//TODO 10:Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.

function isPalindrome(str) {
    if(typeof str === "string") {
        let lowRegStr = str.toLowerCase()
        let reverseStr = lowRegStr.split(``).reverse().join(``);
        return lowRegStr === reverseStr;
    } else {
        return false;
    }
}



//IF ELSE CONDITIONALS EXAMPLE TO PLAY AROUND WITH!

let x = 55;
let y = 60;

if(x == 10 || y < 20) {
    console.log("This if stuff");
} else if (x > 50 && y > 50) {
    console.log("This else if stuff ")
} else {
    console.log("That else stuff");
}






