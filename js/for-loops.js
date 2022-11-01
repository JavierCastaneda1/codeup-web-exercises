//TODO 1:
// Create a file named for_loops.js inside the js directory and link it to your loops.html file. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)For example, showMultiplicationTable(7) should output

function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}
showMultiplicationTable(7);


//SECOND EXAMPLE OF EXERCISE 1

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));
//
// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {
//
//     // multiply i with number
//     const result = i * number;
//
//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }


//*exercise 3* copied example on walk-through

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() *(max -min) + min);    //this will generate a random number
}
console.log(getRandomArbitrary(20,200));     //sets parameter for which numbers to check for (20-200)

for(let i = 1; i <= 10; i++) {
    let randNum = getRandomArbitrary(20, 200);
    if (randNum % 2 === 0) {
        console.log(randNum + " is even");
    } else {
        console.log(randNum +" is odd");
    }
}

// *the following code is another example for exercise 3

function randomEvenAndOdd() {
    for (let i = 0; i < 10; i++) {
        let random = Math.floor((Math.random()) * 200 + 20);
        let sign = (random % 2 > 0) ? ' is odd' : ' is even';
        console.log(`${random} ${sign}`);
    }
}

randomEvenAndOdd();



//exercise 4


let output = '1';
for (let i = output; i <= 9; i++) {
    output = i;
    for (let j = 1; j < i; j++) {
        output += i.toString();
    }
    console.log(output);
}


function pyramidNumbers() {
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}

pyramidNumbers();

//exercise 5
//this loop goes in descending order (by 5) ex: from 100, 95, 90, etc.
for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}