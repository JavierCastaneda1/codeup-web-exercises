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
//     console.log('Reverse Loop ' + i);
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

//make another one

// const namesTwo = ['Mew', 'Mewtwo', 'Ryu', 'Charizard'];
//
// for (let i=0; i < namesTwo.length; i++){
//     console.log(namesTwo[i]);
// }


//"for of" loop examples

// const names2 = ['Pikachu','Mew','Snorlax','Gengar'];
//
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
//this one is weird. weird syntax. Be careful with the ending.




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






// Skate Trick loop!

let kickflips = 1;            //number of kickflips spun.
let shuv = 2;

if(kickflips === 3 && shuv === 0){
    console.log('TRIPLE FLIP WTF');
}
else if(kickflips === 2 && shuv === 0){
    console.log('double flip, nice!');
}
else if(kickflips === 1 && shuv === 1){
    console.log('nice Varial flip yo!');
}
else if(kickflips === 1 && shuv === 0){
    console.log('Nice kickflip dude!');
}
else if(kickflips === 1 && shuv === 2){
    console.log('TRE BOMB');
}
else if(kickflips >= 3 && shuv >= 2){
    console.log('Circus trix');
}
else
    console.log('illegal af! go home!');



//even number example
//This counts even numbers up to 25.
// for (let x = 1; x <= 25; x++) {
//     if (x % 2 === 0) {
//         console.log('Here is a lovely EVEN number: '+ x++);
//     }
// }





//the following are practice functions for the 2nd assessment.
//TODO:Write a function that takes in a grocery item object and returns a string representing the price per item for that object.
// example:
// let potatoes = {
// 	name: potatoes,
// 	quantity: 20,
// 	totalPrice: 47
// };
// getPricePerItem(potatoes) // returns "$2.35"


let potatoes = {        //Set the object up
name: "potato",
quantity: "20",
totalPrice: "47"
};

let cabbages = {        //and another object just for fun
    name: "cabbage",
    quantity: "40",
    totalPrice: "94"
};

//open the function
function getGrocery(item){    //item goes in here
    return "$"+(item.totalPrice/item.quantity);       //return here and add dollar sign
}
console.log(getGrocery(potatoes));
console.log(getGrocery(cabbages));


//TODO: 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.

function countOccurancesOfLetter(stringOne, letter){       //set up function to take two variables named whatever.
    let stringArr = stringOne.toLowerCase().split(``);    //this part checks for lowercase and splits the word into letters.
    let mySubString = letter.toLowerCase();
    let count = 0;                                   //we will now establish a count for 'letter' being checked for.
    stringArr.forEach(function(index){    //for each letter of the array we will be checking index
        if (index === mySubString){                  //if letter input is equal to letter in the array it...
            count += 1;                         //will count up (for every letter detected)
        }
    })                                          //take note of this syntax
    return count;
}


console.log(countOccurancesOfLetter(`Gengar`, `g`));;





//Nicks function
// function countOccurrencesOfLetter(string, letter){
//     let stringOne = string.toLowerCase();
//     let subString = letter.toLowerCase();
//     let count = stringOne.split(subString).length -1;
//     console.log(count);
//     return count;
// }

// countOccurrencesOfLetter(`Gengar`, `g`);
// countOccurrencesOfLetter('Broski','b');
// countOccurrencesOfLetter('parangarikutirimikuaro', 'a');
//
// console.log(countOccurrencesOfLetter("horseradish", "s")); // returns 2

// 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.

// const cart = [
//     {
//         name: "Kingsford Charcoal",
//         weightInGrams: 4535
//     }, {
//         name: "Krazy Glue",
//         weightInGrams: 5
//     }, {
//         name: "NVIDIA RTX 4090",
//         weightInGrams: 2186
//     }
// ];

// establish cart with objects.
// function highestWeight(cart){
//     let highest = 0              //establish a count for "highest".
//     cart.forEach(function(object){
//         if (object.weightInGrams >= highest){
//             highest = object.weightInGrams;
//         }
//
//     });
//     console.log(highest);
// }
// highestWeight(cart);             //this example will show the WEIGHT number of the hamster.



// second example: this one returns the WHOLE object!
// function highestWeighttwo(cart){
//     let tallest = {};
//     tallest.weightInGrams = 0;
//     cart.forEach(function(objectOne){
//         if (objectOne.weightInGrams >= tallest.weightInGrams){
//             tallest = objectOne;
//         }
//
//     });
//     console.log(tallest);
// }
// highestWeighttwo(cart);




// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.

// const arr1 = [24, 25, 26, 27, 29];
// const arr2 = [13, 26, 39, 52, 65];
// const arr3 = [0, 1, 2, 3, 4, 5];
//
//
// function by13(arr){
//     let total = [];                  //let the total become an array like this
//     arr.forEach(function(index){      //for each array run a function of checking the index
//         if(index !== 0 && index % 13 === 0){          //if the index is not 0 AND divisible by 13.....
//             total.push(index);                    //grab the total of indexes and make them into new array.
//         }
//     })
//     console.log(total);
// }
//
// by13(arr1);   //returns 26
// by13(arr2);  //returns 13, 26, 39, 52, 65
// by13(arr3);  //returns empty



// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. `string` which is to be set to the argument passed into the function.
// 2. `numberOfWords` which is to be set to the number of words within the string.
// 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).


// this function we will be building an object with properties.
function returnObject(string){
    let object = {};
    object.string = string;
    object.words = string.split(' ').length;
    object.eCount = countOccurancesOfLetter(string, "E");
    // console.log(object.eCount);           //console log to check work
    return object;
}

console.log(returnObject("Street Fighter EX3"));;








//This is a practice exercise for Looping over objects.

// let user = {
//     name: 'Javier',
//     age: 35,
//     occupation: 'Student',
//     gender: 'Male'
// };

//looping over object property names
//keys method will return an array
//this array will contain all the properties of passed object as its element.

// let properties = Object.keys(user);
// console.log(properties);
// console.log(properties.length);
//
// for(let prop of properties){
//     console.log(prop);
// }

//looping over property values to return array (contains all the property values and its element)
// let value = Object.values(user);
// console.log(value);
//
// for(let val of value){
//     console.log(val);
// }


//how to loop over both property name and property value

//
// let entries = Object.entries(user);
// console.log(entries);
//
// for(let entry of entries){
//     console.log(`${entry[0]}: ${entry[1]}`);
// }
//
// for(let [key, val] of entries){
//     console.log(`${key} is ${val}`);
// }









//TODO: Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase. else it should return false.

// function isAllLowerCase(string){
//     if(string === string.toLowerCase()){
//         return true;
//     } else {
//         return false;
//     }
// }

//TODO: Write a function that takes in a string and returns an object with the following properties:
// // 	1. `string` which is to be set the to the argument passed into the function.
// // 	2. `numberOfWords` which is to be set to the number of words within the string.
// // 	3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).





//Start Paul  review

// //todo #10: 5. Write a function that takes in an array of objects and returns the object from the array with the most colors in the color property.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 186,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function getMostColorful(arr){
    let mostColors = {fur:[]};
    console.log(mostColors.fur.length);
    arr.forEach(function(hamster){
        console.log(hamster.fur.length);
        if(hamster.fur.length > mostColors.fur.length){
            //( harmtaro.fur[2] > mostcolors.fur[0])
            mostColors = hamster
            // mostColors = hamtaro.fur[2];
        }
    });
    return mostColors;
}
console.log(getMostColorful(hamsters));









