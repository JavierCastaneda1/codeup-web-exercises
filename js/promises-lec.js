"use strict";

(() => {
    const messageArea = document.getElementById("message-here");
    const input = document.getElementById("pokemon-name");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {


        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(resp => resp.json())
            .then(data => console.log(data))
        console.log(data);
        messageArea.innerText = "Request successful! Check console for your information"
            .catch(error => {
                console.log("Oops something goofed up.");
                console.log(error);
                messageArea.innerText = "Request failed! Check console for error details";
            });
    });

    let weather = "sunny"

    const myPromise = new Promise((resolve, reject) => {
        if (weather === "sunny") {
            resolve();
        } else {
            reject();
        }

    });

    myPromise
        .then(() => alert("Promise resolved!"))
        .catch(() => alert("Promise failed..."));

})();

