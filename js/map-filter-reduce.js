const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//2 EXAMPLES

//EXAMPLE 1
// let threeLang = users.filter(function(user){
//     return user.languages.length >= 3;
// });


//EXAMPLE 2
//es6 method with fat arrow
const threeLang = users.filter((user) => user.languages.length >= 3)


console.log(threeLang);

//TODO: Use .map to create an array of strings where each element is a user's email address

let pplEmail = users.map(function(user){
    return user.email;
})

console.log(pplEmail);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let pplExp = users.reduce(function(total,user){
    return total + user.yearsOfExperience
},0);

console.log(pplExp);
console.log(pplExp / users.length);

// const totalYearsOfExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
//
// console.log(totalYearsOfExp);

//TODO:Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce(function (longEmail,user){
    if (user.email.length > longEmail.length)
        return user.email;
    else
        return longEmail;
}, '');

console.log(longestEmail);

//TODO:Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce(function(instructors, user, index){
    if (index !== users.length -1) {
        return instructors +  (user.name + ", ")
    }
    return instructors + (user.name + ".")
}, "Your instructors are: ");

console.log(instructors);