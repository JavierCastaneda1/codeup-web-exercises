"use strict";

function myLastCommit (username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': gitKey}})
        .then(response => response.json())
        .then(responseObject => console.log(responseObject[0].created_at))
}

myLastCommit('JavierCastaneda1')