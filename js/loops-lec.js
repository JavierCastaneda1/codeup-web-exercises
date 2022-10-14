
// var i = 1
// while (i < 10){
//     console.log('while loop iteration #' + i);
//
    // these lines are all the same thing.
    // ++i
    // i += 1
    // i = i * 1;
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



'use strict';

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}