"use strict";

//TODO EXERCISE 3:
// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let userInput = prompt("How many days would you like to rent The Little Mermaid?");
console.log("The user entered: "+userInput);
let userInput2 = prompt("How many days would you like to rent Brother Bear?");
console.log("The user entered: "+userInput2);
let userInput3 = prompt("How many days would you like to rent Hercules?");
console.log("The user entered: "+userInput3);
let total = ((parseFloat(userInput) + parseFloat(userInput2) + parseFloat(userInput3)) * 3);
alert("The total for your rentals is $"+total+" dollars.");

//TODO: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googleHours = prompt("How many hours did you work for Google?");
alert(`You have worked for ${googleHours} hours.`);

let amazonHours = prompt("How many hours did you work for Amazon?");
alert(`You have worked for ${amazonHours} hours.`);

let facebookHours = prompt("How many hours did you work for Facebook?");
alert(`You have worked for ${facebookHours} hours.`);

let googlePay = 400;
let googleTotal = (googlePay * googleHours);
alert("You got $"+googleTotal+" dollars from Google");

let amazonPay = 380;
let amazonTotal = (amazonPay * amazonHours);
alert("You got $"+amazonTotal+" dollars from Amazon");

let facebookPay = 350;
let facebookTotal = (facebookPay * facebookHours);
alert("You got $"+facebookTotal+" dollars from Facebook");

let finalResult = googleTotal + amazonTotal + facebookTotal
alert("You got $"+finalResult+" dollars total! Thank you for all your hard work!");

//NOTE: made a ton of extra alerts to make this more visual.

//TODO: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.


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

