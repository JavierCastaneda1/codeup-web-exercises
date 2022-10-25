"use strict";

//*example of console.log taking "user input" from prompt.*
//var userInput = prompt('Please type something:');
//console.log('The user entered: ' + userInput);
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




// //*Practice Assessment*
// //TODO 1 :Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// // use typeof to convert string into boolean form
//
// function isBoolean(input){
//     return typeof input === 'boolean';
// }
//
// //TODO  2 :Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// function isString(input){
//     return typeof input == 'string';
// }
//
//
// // TODO 3 :Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.
//
// function isNotString(bruh){
//     return typeof bruh != 'string';
// }
//
// // TODO 4 :Define a function named isEmptyString that will return true when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
//
// function isEmptyString(myInput) {
//     return myInput === "";
// }
//
// // TODO 5 :Define a function named isNotANumber that accepts an input and returns true or false based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.
//
// function isNotANumber(num) {
//     return typeof num !== "number";
// }
//
// //TODO 6 : Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.
//
// function isNegative(num) {
//     return num < 0;
// }
//
// //TODO 9: Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
//
//
// function isArray(x) {
//     return Array.isArray(x);
// }
//
//
// // TODO 10: Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
//
// function upperCase(input){
//     if(typeof input === "string"){
//         return input.toUpperCase();
//     } else {
//         return false
//     }
// }
//
//
//
//
// //7 and 8 that got lost
// function isPositive(num) {
//     return num > 0;     //zero is not negative or positive
// }
//
// function isZero(zero) {
//     return zero == 0;
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

//using typeof to return a number (true)
//using typeof to check if input is numeric.(false)
//since input is not === "number" it comes back false.



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



// **RETAKE**
// //TODO 1: Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
//
// function lowerCase(input){
//     if(typeof input === "string"){
//         return input.toLowerCase();
//     } else {
//         return false
//     }
// }
//
// // TODO 2:Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.
//
//
//
// function isAllLowerCase(str){
//     if (str.toLowerCase() === str) {
//         return true;
//     } else if (str.toLowerCase() !== str) {
//         return false;
//     } else {
//         return false;
//     }
// }
//
//
//
//
// //TODO 3:Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.
//
// function isAllUpperCase(str){
//     if(typeof str.toUpperCase() === "boolean"){
//         return true;
//     } else {
//         return false
//     }
// }
//
// function isAllUpperCase(str){
//     if(typeof str === "string"){
//         return true;
//     } else {
//         return false
//     }
// }
//
// // function isAllUpperCase(str){
// //     if (str.toUpperCase() === str) {
// //         return true;
// //     } else if (str.toUpperCase() !== str) {
// //         return false;
// //     } else {
// //         return false;
// //     }
// // }
//
// //TODO 4: Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.
// //1
//
// function isNotPalindrome(str) {
//     if(typeof str === "string") {
//         let lowRegStr = str.toLowerCase()
//         let reverseStr = lowRegStr.split(``).reverse().join(``);
//         return lowRegStr === reverseStr;
//     } else {
//         return true;
//     }
// }
//
//
// //TODO 5:Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.
//
//
// function multiplyBy2(x) {
//     if (isNaN(parseFloat(x))) {
//         return false;
//     } else{
//         return parseFloat(x) * 2;
//     }
// }
//
// //TODO 6:Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
//
// function convertHourToSec(hours) {
//     if(hours != "number") {
//         return false;
//     } else {
//         return (hours * 60) * 60;
//     }
// }
//
//
//
// //TODO 7: Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
//
// function getLowestNumber(a,b,c){
//     if(isNaN(parseFloat(a)) || isNaN(parseFloat(b)) || isNaN(parseFloat(c))) {
//         return false;
//     } else {
//         return Math.min(a,b,c);
//     }
// }
//
//
//
//
// //TODO 8:Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
//
// function addStringLengths(x, y) {
//     if (x !== "string" || y !== "string")
//         return false; else{
//         return parseFloat(x.length + y.length);
//     }
// }
//
//
//
// //TODO 9:Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
//
// function subtract(x, y) {
//     if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
//         return false;
//     } else{
//         return parseFloat(x) - parseFloat(y);
//     }
// }
//
//
//
// //TODO 10:Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decimal places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
//
//
//
// function calculateChange(totalPaid,totalCost) {
//     if (isNaN(parseFloat(totalPaid)) || isNaN(parseFloat(totalCost))) {
//     }
// }





