(function() {
    let testArray = [];

    let instructors = ["David" ,"Cody", "Codey The Duck"];

    const falsyValues = [false, null, "", 0, undefined, NaN];

    console.log(instructors.length);
    console.log(falsyValues.length)
    console.log([].length);
    console.log(instructors[0]);

    instructors[0] = "'Lord Megatron' David";
    instructors[1] = "'Emperor Starscream' Cody";
    console.log(instructors[0]);
    console.log(falsyValues[falsyValues.length] - 1);   //to get the last element from an array ez

    let randomIndex = Math.floor( Math.random() * instructors.length);
    alert("One of your instructors is named " +instructors[randomIndex]);

    console.log(instructors);

//next example

    // for(let i = 0; i <= instructors.length - 1; i++) {
    //     console.log("One of your instructors is named "+instructors[i]);
    // }

//next example
    instructors.forEach(function (instructor){
        console.log("One of your instructors is named: "+ instructor);
    });

    function logInfo(info){        //this is reusable
        console.log(info);
    }

    falsyValues.forEach(logInfo);
    instructors.forEach(logInfo);

//example of a for of loop below

    for(let instructor of instructors){
        console.log("One of your instructors will be "+instructor);
    }


})();