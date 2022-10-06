/*
//console.log('Hello from external JavaScript!');

//var userInput = prompt('What is your favorite color?');
//console.log('The user entered: ' + userInput);

//alert("Cool my favorite color is "+userInput+" too");



// the following is question # 3 part 1
//var userInput = prompt('How many days would you like to rent The Little Mermaid?');
console.log('The user entered: ' + userInput);

//var userInput = prompt('How many days would you like to rent Brother Bear?');
console.log('The user entered: ' + userInput);

//var userInput = prompt('How many days would you like to rent Hercules');
console.log('The user entered: ' + userInput);

//var total = (userInput * 3)

//alert("This transaction will be "+total+" dollars");


//the following is question #3 part 2

var userInput = prompt('How many hours did you work for Google?');
console.log('The user entered: ' + userInput);

var userInput = prompt('How many hours did you work for Amazon?');
console.log('The user entered: ' + userInput);

var userInput = prompt('How many hours did you work for Facebook?');
console.log('The user entered: ' + userInput);

var paygoogle = 400

var pay2g = (paygoogle * userInput)

var payamazon = 380

var pay2a = (payamazon * userInput)

var payfacebook = 350

var pay2f = (payfacebook * userInput)

var result = pay2g + pay2a + pay2f

alert("This transaction will be "+result+" dollars");


 */
/*
alert("Hello welcome to Codeup! We're going to try to see if we have room for you to attend class ");
let checkavailability = prompt ('First, lets check availability, How many days out of the week are you available?)

let seating = Math.floor(x:Math.random() * 30);
if (seating < 20 && checkAvailability >= 3)
{
    alert("Welcome to Codeup, Happy to have you join us!");
    console.log("Welcome to Codeup");
}
else if (seating > 20)
{
    alert("We're so sorry bu the class if full at the moment");
    console.log("Not accepted in , due to class size");
}
else if (checkAvailability < 3)
{
    alert("Sorry but we need at least 3 days to be successful in this class");
    console.log('Not accepted in, due to your Availability');
}
    alert("Okay here's our last of questions i promise");

//this is the end of bullet point 3
*/
//question 4

let premium = prompt("How many items are you buying?");

let numberofitems = parseFloat(prompt("How many items in cart?"));

let offervalid = confirm("If your offer valid?");

alert("Customer can have discount: " +(offervalid && (premium || numberofitems > 2)));












