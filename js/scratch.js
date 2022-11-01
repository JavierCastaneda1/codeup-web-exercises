"use strict";


//example of a function I made that gets the area of an input(circle).
// function getArea(x){
//     let radiusCalc = Math.PI * (x * x);
//     return radiusCalc;
// }

//solution 2 for area of a circle
// function areaOfCircle(x) {
//     return Math.pow(x, 2) * Math.PI;
// }

//LOOPS

//basic loop

// for(let i = 1; i <= 5; i++){     //basic structure.
//     console.log('Loop ' + i);    //add i to make it count on terminal.
// }

//this loops prints out PRECISELY loop 1-5 on the console.
//im going to write this same loop in decrement mode.

// for(let i = 5; i > 0; i--){
//     console.log('Loop ' + i);
// }

//example of 'break' with the same loop.
//this loop will only loop downward till it reaches 3. (it breaks)

// for(let i = 5; i > 0; i--){
//     console.log('Loop ' + i);
//     if (i === 3) break;
// }

//loops with arrays  (for loop version)

// const names = ['Shin','Javier','Herby','Gonzalo'];
//
// for (let i = 0; i < names.length; i++){     //use names.length
//     console.log(names[i]);              //plug in index counter here
// }


//"for of" loop examples

// const names2 = ['Pikachu','Mew','Snorlax','Gengar'];

// for (name of names2) {      //name(creates variable) of names(array) iterates the whole array
//     console.log(name);
// }
//or (the short version) below

// for (name of names2) console.log(name);

// const user = { firstName: 'Lil', lastName: 'Wayne'};
// let users;                                    //weird interaction. had to define users first.
// for(users in user) console.log(user[users]);
//this is a for in loop.


//while loop. (this loop counts 1-10)
// let i = 1;
// while(i < 11) {
//     console.log(i);
//     i++;         //if you do not increment 'i' right here it creates an infinite loop.
// }

//same while loop but with a break AND continue example. This loop will try to count 1-10 but stop at 5.
// let i = 1;
// while(i < 10) {
//     console.log(i);
//     i++;
//     if(i > 5) break;             //swap out 'break' or 'continue' to get different functionality.
// }

//example of a do while loop

// let i = 0;
// do {
//     i++;
//     if (i === 5) continue;
//     console.log(i);
// } while (i < 10);
//
// //example of a for each loop
//
// const animals = ['Porcupine', 'Snail', 'Ostrich', 'Baboon','Chameleon'];
//
// animals.forEach( animal => {
//     console.log(animal);
// });
//this one is weird. fat arrow function that creates variable with weird syntax. Be careful with the ending.




//     if/else statement

//hour
//if hour is between 6am and 12pm: Good morning!
//if it is between 12pm and 6pm: Good afternoon!
//otherwise: Good evening!

// let hour = 19;    //change this number to make the if else do different stuff.
//
// if(hour > 6 && hour < 12){
//     console.log('Good morning');
// }
// else if (hour > 12 && hour < 18) {
//     console.log('Good afternoon!');
// }
// else
//     console.log('Good evening!');

//this working example returns greeting depending on what time you input on the top.





//Skate Trick loop!

// let kickflips = 3;            //number of kickflips spun.
// let shuv = 2;
//
// if(kickflips === 3 && shuv === 0){
//     console.log('TRIPLE FLIP WTF');
// }
// else if(kickflips === 2 && shuv === 0){
//     console.log('double flip, nice!');
// }
// else if(kickflips === 1 && shuv === 1){
//     console.log('nice Varial flip yo!');
// }
// else if(kickflips === 1 && shuv === 0){
//     console.log('Nice kickflip dude!');
// }
// else if(kickflips === 1 && shuv === 2){
//     console.log('TRE BOMB');
// }
// else if(kickflips >= 3 && shuv >= 2){
//     console.log('Circus trix');
// }
// else
//     console.log('illegal af! go home!');



//even number example
// for (let i = 1; i <= 25; i++) {
//     if (i % 2 !== 100) {
//         console.log('Here is a lovely EVEN number: '+ i++);
//     }
// }


//odd number example
// function isOdd(num) {
//     return num % 2;
// }
// console.log('1 is ' + isOdd(1));
// console.log('2 is ' + isOdd(2));
// console.log('3 is ' + isOdd(3));
// console.log('4 is ' + isOdd(4));

//the following are practice functions for the 2nd assessment.


// #LAO Review
// ##Questions
// 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.


let groceries = {
name: "Donuts",
quantity: "20",
totalPrice: "47"
};


function grabObject(){
}

grabObject();




// 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.




// 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.



// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.



// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. `string` which is to be set the to the argument passed into the function.
// 2. `numberOfWords` which is to be set to the number of words within the string.
// 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).

