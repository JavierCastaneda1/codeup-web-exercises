"use strict";


//example of a function I made that gets the area of an input(circle).
// function getArea(x){
//     let radiusCalc = Math.PI * (x * x);
//     return radiusCalc;
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
//     if(i > 5) break;             //swap out 'break' or 'continue';
// }

//example of a do while loop

let i = 0;
do {
    i++;
    if (i === 5) continue;
    console.log(i);
} while (i < 10);

//example of a for each loop

const animals = ['Porcupine', 'Snail', 'Ostrich', 'Baboon','Chameleon'];

animals.forEach( animal => {
    console.log(animal);
});
//this one is weird. fat arrow function that creates variable with weird syntax. Be careful with the ending.




//     if/else statement

//hour
//if hour is between 6am and 12pm: Good morning!
//if it is between 12pm and 6pm: Good afternoon!
//otherwise: Good evening!

let hour = 19;    //change this number to make the if else do different stuff.

if(hour > 6 && hour < 12){
    console.log('Good morning');
}
else if (hour > 12 && hour < 18) {
    console.log('Good afternoon!');
}
else
    console.log('Good evening!');

//this working example returns greeting depending on what time you input on the top.











