"use strict";

//TODO: Write a function names isPositive that accepts a number and returns true or false based on wherther the input is negative.

function isPositive(number){
    return number > 0;
}

console.log(isPositive(-2));         //input number will determine true of false.


//TODO:Write a function named isFortyTwo that accepts a number and returns a boolean that indicates whether that number is equal to 42.

function isFortyTwo(x){
    if(x === 42){
        return true;
    } else {
        return false;
    }
}

console.log(isFortyTwo(43));     //input number will show true or false if 42 or not 42

//TODO: Write a function named countEvens that accepts an array of numbers and returns the number of even numbers in the array.
// iterate through the array
// checking if there is a remainder of zero
// return the count
// this is an example of a foreach



let arr= [1,2,3,4,5,6,7,8,9,10]

// this one will return an array of all even numbers.
function countEvens(arr){
    let evens = [];
    arr.forEach(function(element){
        if(element % 2 === 0){
            evens.push(element);
        }
    })
    return evens;
}

console.log(countEvens(arr));

//this one will return just the number of even numbers in the array.


function countEvenstwo(arr){
    let count = 0;
    arr.forEach(function(item){
        if(item % 2 === 0){
            count ++;
        }
    })
    return count;
}
console.log(countEvenstwo(arr));


//Second Assessment Walk through

//write a function named isNegative that accepts a number and returns true of false based on if the input is negative


function isNegative(arg){
    return arg < 0;
}

//write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10

function isTen(ten){
    return ten === 10;
}

//Write a function named double that accepts a number and returns the number doubled

function double(dub){
    return dub * 2;
}

//Write a function  named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.

function remove9s(arr){
    let finalArr = [];
    for (let num of arr){
        if (num !== 9){
            finalArr.push(num);
        }
    }
    return finalArr;
}

//Write a function named average that accepts an array of numbers and returns the average of those numbers.

function average(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    }
    return total / arr.length;
}

//Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.

function countOdds(arr){
    let count = 0;
    for (let num of arr){
        if (num % 2 !== 0){
            count++;
        }
    }
    return count;
}

//Write a function named averageSales that accepts an array of objects where each objects represents a person and has a 'sales' property. the function should return the average of every objects 'sales' property

function averageSales(arr){
    let total = 0;
    for(let person of arr) {
        total += person.sales;
    }
    return total / arr.length;
}

//Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character and returns an object with properties 'firstName' and 'lastName'

function convertNameToObject(name){
    let splitName = name.split(" ");
    return {
        firstName: splitName[0],
        lastName: splitName[1]
    };
}

//Write a function named countVowels that accepts a string and returns the number of vowels in that string.

function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    const splitString = str.toLowerCase().split("");
    let count = 0;
    for (let char of splitString){
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//Write a function named analyzeWord. It should take in a string and return and object with information about the input word. The object returned should have the following properties. 'word' the original word that was passed into the function. 'numberOfLetter' the number of letters in the word. 'numberOfVowels' the number of vowels in the word.

function analyzeWord(word){
    return{
        word:word,
        numberOfLetters:word.length,
        numberOfVowels: countVowels(word)
    };
}

//Write a function named capitalizeName that accepts a string that is a first and last name separated by a space and returns a string that has the first and last named capitalized

function capitalizeName(name){
    let splitName = name.split(" ");
    for (let i = 0; i < splitName.length; i++){
        splitName[i] = splitName[i].substring(0,1).toUpperCase() + splitName[i].substring(1).toLowerCase();
    }
    return splitName.join(" ");
}