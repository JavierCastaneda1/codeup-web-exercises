"use strict"

// function sellIceCream(){
//     let allCones = Math.floor(Math.random() *50) + 50;
//     do{
//         let conesBought = Math.floor(Math.random() * 5) + 1;
//         if (conesBought > allCones) {
//             console.log(`Sorry, can no sell you ${conesBought}, we only have ${allCones}...`)
//         } else {
//             allCones -= conesBought;
//             console.log (`${conesBought} cones were bought.`)
//         }
//     }
//     while(allCones > 0);
//     console.log(`yay! we sold them all `);
// }
//
// sellIceCream()


//cody's example (Do While Loop)
//exercise 1

// let i = 1;
// let j = 0;
//
// while(j < 16){
// i *= 2;
// j++
//     console.log(i)
// }

//exercise 2
// TODO An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.

let allCones = Math.floor(Math.random() * 50) + 50;

do{

    let conesBuy = Math.floor(Math.random() * 5) + 1;

    if((allCones - conesBuy) < 0) {
        console.log("Cannot sell you " + conesBuy + "cones i only have" + allCones + "...");
    }else{
        console.log("S of cones before purchase: "+ allCones);
        allCones -= conesBuy;


    }
}




    ]



