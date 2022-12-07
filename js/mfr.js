const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
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

const numbers  = [1,2,3,4,5];

// .map() - will change every element of the array , and return a new array of the same length.

// const names = [];
// for (let hamster of hamsters) {
//     names.push(hamster.name);
// }

const names = hamsters.map(hamster => hamster.name);

const doubledNumbers = numbers.map(num => num * 2);

// const doubledNumbers = numbers.map((num) => {
//     return num * 2;
// });

console.log(names);
console.log(doubledNumbers);

// .filter() - will return a new array that is (potentially) shorter than the original array, but cannot change the elements of the array.

const findEvenNumber = num => num % 2 === 0;


const evenNumbers = numbers.filter(findEvenNumber)//return for the inner function MUST BE a boolean value
const evenDoubledNumbers = doubledNumbers.filter(findEvenNumber);
console.log(evenNumbers);
console.log(evenDoubledNumbers);

const tallHamsters = hamsters.filter(hamster => hamster.heightInMM >= 100);
console.log(tallHamsters);

const tallHamstersNames = hamsters.filter(hamster => hamster.heightInMM >= 100).map(hamster => hamster.name);
console.log(tallHamstersNames);


// .reduce() - changes an array into a single value. 2 arguments: 1st is a function expression with two parameters(accumulation, elementATOI) 2nd is the starting value of the accumulation/result. (we decide what that something is)

let sumInTheBeforeTimes = 0;
for (let number of numbers) {
    sumInTheBeforeTimes += number;
}
console.log(sumInTheBeforeTimes);


const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

console.log(sum);


