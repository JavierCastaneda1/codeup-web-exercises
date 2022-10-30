'use strict';
// var i = 1
// while (i < 10){
//     console.log('while loop iteration #' + i);
//
//     these lines are all the same thing.
//     ++i
//     i += 1
//     i = i * 1;
//
//     i += 5;
// }


// var i = 10
// while (i < 1) {
//     console.log('while loop iteration #' + i);
//     i--;
// }
//
//
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }




//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

//practice example of a while loop
// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }




// //loops notes//
// var i = 10;   //declare the variable first
// //do loop
// do {
//     console.log('while loop iteration #' + i);  //string plus concatenated value
//     i++;      //this adds a 1
// } while (i < 10);      //while loop

//for loop example
// for (var i = 0; i < 11; i++) {
//     console.log('for loop iteration #' + i);
// }

//for loop example with two variables on the first and thirds statements
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }


//for loops with a break
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }



//example of how to get a looping EVEN number
for (let i = 1; i < 50; i++) {
    if (i % 2 !== 100) {
        continue;
    }
    console.log('Here is a lovely EVEN number: ' + i);
}
