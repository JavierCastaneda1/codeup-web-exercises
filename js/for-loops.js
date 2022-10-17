
//EXERCISE 1
//Create a file named for_loops.js inside the js directory and link it to your loops.html file.
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}, is your answer`);
    }
}
    console.log(`Im done`)

    showMultiplicationTable(7);


//*exercise 2* copied example on walk-through

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() *(max -min) + min);
}
console.log(getRandomArbitrary(20,200));

for(let i = 1; i <= 10; i++) {
    let randNum = getRandomArbitrary(20, 200);
    if (randNum % 2 === 0) {
        console.log(randNum + "is Even");
    } else {
        console.log(randNum +"is Odd");
    }
}



// *the following code is exercise 3


    function randomEvenAndOdd() {
        for (let i = 0; i < 10; i++) {
            let random = Math.floor((Math.random()) * 200 + 20);
            let sign = (random % 2 > 0) ? 'is odd' : 'is even';
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

//exercise 5

for(let i = 100; i >= 5; i -= 5){
    console.log(i);
}






