"use strict"

function sellIceCream(){
    let allCones = Math.floor(Math.random() *50) + 50;
    do{
        let conesBought = Math.floor(Math.random() * 5) + 1;
        if (conesBought > allCones) {
            console.log(`Sorry, can no sell you ${conesBought}, we only have ${allCones}...`)
        } else {
            allCones -= conesBought;
            console.log (`${conesBought} cones were bought.`)
        }
    }
    while(allCones > 0);
    console.log(`yay! we sold them all `);
}

sellIceCream()
