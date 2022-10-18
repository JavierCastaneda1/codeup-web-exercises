"use strict";

// var car = new Object();
// console.log(car);
// //object
//
// var car = {};
// console.log(typeof car);
//object
//these two blocks of code are the same
//most people will not declare object in this manner.


// var car = {};

//use dot notation to assign a "make" property
//do this


//car.make = "Toyota";


//use array notation to assing a "model" property
//this is the model that is not as common.
//try to not do this


// car["model"] = "Camry";

//to assign properties to an aobject when created


// let car = {
//     make:"Toyota",
//     model:"Camry"
// };





//good example of a object with two
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";

// use array notation to access "make" property
// console.log("The car make is: " + car["make"]);

// use dot notation to access "model" property
// console.log("The car model is: " + car.model);


//NESTED VALUES

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

//assigning functionality
"use strict";

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();