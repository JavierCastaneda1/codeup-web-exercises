"use strict";

/* ########################################################################## */

/**
 * TODO:1
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//  function analyzeColor(color =prompt("What is your favorite color?").toLowerCase()){
//     if (color === "blue") {
//         return "The sky is " +color+ ".";
//     } else if (color === "red") {
//         return "Strawberries are " +color+ ".";
//     } else if (color === "cyan") {
//         return "I dont know anything about " +color+ ".";
//     } else {
//         return " i dont know about the color" +color;
//     } }
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('red'));
// console.log(analyzeColor('cyan'));
// console.log(analyzeColor('random'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:2
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));



/**
 * TODO:3
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let analyzeSwitch = prompt("What is your color?")
// switch(analyzeSwitch) {
//    case "blue":
//        alert("Blue is the color of the sky!");
//        break;
//    case "red":
//        alert("Strawberries are red!");
//        break;
//    case "cyan":
//        alert("I don't know anything about Cyan.");
//        break;
//    default:
//        alert(analyzeSwitch + " is not a cool color.");
//        break;
// }

/**
 * TODO:4
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// let userInput = prompt('what is your color?');
// alert(analyzeColor(userInput));







/* ########################################################################## */

/**
 * TODO:5
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    let discountedPrice;
    if (luckyNumber === 0) {
        discountedPrice = total;
    } else if (luckyNumber === 1) {
        discountedPrice = total - (total * .1);
    } else if (luckyNumber === 2) {
        discountedPrice = total - (total * .25);
    } else if (luckyNumber === 3) {
        discountedPrice = total - (total * .35);
    } else if (luckyNumber === 4) {
        discountedPrice = total - (total * .5);
    } else if (luckyNumber === 5) {
        discountedPrice = total - (total * .5);
    }

    return discountedPrice;
}

console.log(calculateTotal(1,100));
console.log(calculateTotal(2,100));
console.log(calculateTotal(3,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));

// let discountedPrice;
// let luckyNumbers = ['0','1','2','3','4','5'];
// let randomLuckyNumber = luckyNumbers[Math.floor(Math.random() * luckyNumbers.length)];
// function calculateTotal(randomLuckyNumber, total) {
//     if (randomLuckyNumber == 1) {
//         let totalCost = total - (total * .1);
//         return totalCost;
//     } else if (randomLuckyNumber == 2) {
//         let totalCost = total - (total * .25);
//         return totalCost;
//     } else if (randomLuckyNumber == 3) {
//         let totalCost = total - (total * .35);
//         return totalCost;
//     } else if (randomLuckyNumber == 4) {
//         let totalCost = total - (total * .50);
//         return totalCost;
//     } else if (randomLuckyNumber == 5) {
//         let totalCost = total - total;
//         return totalCost;
//     } else {
//         return discountedPrice;
//     }
// }
// console.log(randomLuckyNumber);
// console.log(calculateTotal(randomLuckyNumber, 100)); // discount of random number
// console.log(calculateTotal(0,100)); // returns 100
// console.log(calculateTotal(4,100)); // returns 50
// console.log(calculateTotal(5,100)); // returns 0

/**
 * TODO:6
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// let userInput = prompt('What is your total bill?');
//
// //calculateTotal(luckyNumber, userInput);
// alert("your lucky number was is" +luckyNumber+ " your price before discount is" +userInput+ "price with discount is" +calculateTotal(luckyNumber, userInput));
//



/**
 * TODO:7
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// if(confirm("would you like to enter a number?")){
//    let pickedNumber = parseInt(prompt('Please enter a number'));
//    console.log(typeof userInput);
//
//    if(!isNaN(pickedNumber)) {
//
//
//        if (pickedNumber % 2 === 0) {
//            alert(pickedNumber + ' is even.');
//        } else {
//            alert(pickedNumber + ' is odd.');
//        }
//
//        alert('Your number + 100 = ' + (pickedNumber + 100));
//
//        if (pickedNumber > 0) {
//            alert('Your number is positive');
//        } else {
//            alert('Your number is negative');
//        }
//
//    } else {
//         alert("Yout did not enter a number. Please enter a number next time");
//    }
// }

// function promptUser(){
//
//
// }
//
// function isEven(){
//
// }
//
//
//
//
//
// if(confirm("would you like to enter a number?")){
//     let pickedNumber = parseInt(prompt('Please enter a number'));
//     console.log(typeof userInput);
//
//     if(!isNaN(pickedNumber)) {
//
//
//         if (pickedNumber % 2 === 0) {
//             alert(pickedNumber + ' is even.');
//         } else {
//             alert(pickedNumber + ' is odd.');
//         }
//
//         alert('Your number + 100 = ' + (pickedNumber + 100));
//
//         if (pickedNumber > 0) {
//             alert('Your number is positive');
//         } else {
//             alert('Your number is negative');
//         }
//
//     } else {
//         alert("Yout did not enter a number. Please enter a number next time");
//     }
// }

