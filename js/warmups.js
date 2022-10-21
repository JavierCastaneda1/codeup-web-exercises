"use strict";

////warm up 10/20/22************

// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”



function getPrice(obj){
    return obj.price;
}

let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};

console.log(getPrice(potatoes))




//warm up 10/21/22*************
// Write a function that when passed an array will return the longest string from the array.
//     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”



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
function getLongest(arr){
    let longestString = ""
    for (let str of arr) {
        if (str.length > longestString.length){
            longestString = str;
        }
    }
    return longestString;
}
const colors = ["Green", "Blue", "Periwinkle"];
console.log(getLongest(colors));





