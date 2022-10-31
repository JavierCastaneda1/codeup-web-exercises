"use strict";

////warm up 10/20/22************
//TODO: Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”



// function getPrice(obj){
//     return obj.price;
// }
//
// let potatoes = {
//     name: "Potatoes",
//     quantity: 2,
//     price: "$7.89"
// };
//
// console.log(getPrice(potatoes))




//warm up 10/21/22*************
// TODO: Write a function that when passed an array will return the longest string from the array.
//     Ex. const arr = [“Green”, “Blue”, “Periwinkle”]; getLongestString(arr) // Returns “Periwinkle”



// function longestArray(arra)
// {
//     let maxStr = arra[0].length;
//     let longestStr = arra[0];
//     for (let i = 1; i < arra.length; i++) {
//         let maxi = arra[i].length;
//         if (maxi > maxStr) {
//             longestStr = arra[i];
//             maxStr = maxi;
//         }
//     }
//     return longestStr;
// }
//
// console.log(longestArray(["Green", "Blue", "Periwinkle"]));

//David's Example
// function getLongest(arr){
//     let longestString = ""
//     for (let str of arr) {
//         if (str.length > longestString.length){
//             longestString = str;
//         }
//     }
//     return longestString;
// }
// const colors = ["Green", "Blue", "Periwinkle"];
// console.log(getLongest(colors));

//10/26/22 warm up (how to find the tallest hamster and return entire object)
// TODO: Write a function that takes in an array of objects and returns the object with the largest height property.


// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
//
// getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
//
// function getTallestHamster(arr){
//     let tallest = {heightInMM: 0} ;     //start with establishing a height
//     arr.forEach(function(el){
//         if (el.heightInMM > tallest.heightInMM){
//             tallest = el;
//         }
//     });
//     return tallest;
// }
// console.log(getTallestHamster(hamsters));




// Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.

// let f = "Fizz";
// let b = "Buzz";
// for (let num = 1; num <=100 ; num++) {
//     if (num% 3 === 0 && num % 5 ===0){
//         console.log(f + b);
//     }
//     else if (num % 5 === 0){
//         console.log(b);
//     }
//     else if (num % 3 === 0){
//         console.log(f);
//     }
//     else {
//         console.log(num);
//     }
// }


//FizzBuzz Cody example
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();