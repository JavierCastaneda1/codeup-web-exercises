"use strict";

//first ask
console.log("Hello from external JavaScript");

//exercise 1
alert("Welcome to my Website!");

//exercise 2

let userInput = prompt("What is your favorite color?");
alert("Great, " +userInput+ " is my favorite color too!");

//exercise 3
//part 1 (movies question)

let userPick = prompt("How many days would you like to rent The Little Mermaid?");
console.log("The user entered: "+userPick);

let userPick2 = prompt("How many days would you like to rent Brother Bear?");
console.log("The user entered: "+userPick2);

let userPick3 = prompt("How many days would you like to rent The Hercules?");
console.log("The user entered: "+userPick3);

let total = ((parseFloat(userPick) + parseFloat(userPick2) + parseFloat(userPick3)) * 3);
alert("This transaction will be $"+total+" dollars.");

//exercise 3
//part 2 (Amazon, Facebook, Google question)

let userPix = prompt('How many hours did you work for Google?');
console.log('The user entered: ' + userPix);

let userPix2 = prompt('How many hours did you work for Amazon?');
console.log('The user entered: ' + userPix2);

let userPix3 = prompt('How many hours did you work for Facebook?');
console.log('The user entered: ' + userPix3);

let paygoogle = 400
let payG = (paygoogle * userPix)
console.log(payG)

let payamazon = 380
let payA = (payamazon * userPix2)
console.log(payA)

let payfacebook = 350
let payF = (payfacebook * userPix3)
console.log(payF)

let result = payG + payA + payF
alert("This transaction will be "+result+" dollars");

//exercise 3
//part 3 (student enrolled question)

let classNotfull = true;               // change these boolean values to get different results
let classNoconflict = true;            // change these boolean values to get different results

function scheduleEnroll(cFull, cConflict){
    if(cFull && cConflict){
        return 'Enrolled for class!';
    } else {
        return 'Cannot enroll for class';
    }
}

scheduleEnroll(classNotfull, classNoconflict);



//exercise 4


let premium = prompt("How many items are you buying?");

let numberofitems = parseFloat(prompt("How many items in cart?"));

let offervalid = confirm("If your offer valid?");

alert("Customer can have discount: " +(offervalid && (premium || numberofitems > 2)));












