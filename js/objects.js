(function() {
    "use strict";

    /**
     * TODO 1:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person2 = {};
    person2.firstName = "Javier";
    person2.lastName = "Castaneda";

    console.log("My first name is " + person2["firstName"] + ". My last name is " + person2["lastName"]);
    console.log(person2.firstName)
    console.log(person2.lastName)


    //cody's solution with "say hello added"

    let person = {
        firstname: "Cody",
        lastname: "Hastings",
        sayHello: function (){
            return "Hello from "+ person.firstname+ " " +person.lastname;
            }
        }
    console.log(person.firstname);
    console.log(person.lastname);



    /**
     * TODO 2:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    "use strict";

    console.log(person.sayHello());


    /** TODO 3:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200.
     *
     * If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that
     * Cameron bought $180, Ryan $250 and George $320.
     *
     * Your program will have to:
     * -display a line with the name of the person,
     * -the amount before the discount,
     * -the discount,
     * -and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper.
     *
     * Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
//first start by making a for each loop

    shoppers.forEach(function (shopper){
        console.log("Shopper: " +shopper.name);
        console.log("Amount before discount: " +shopper.amount);
        if(shopper.amount > 200){
            console.log("Hey you get a 12% discount!!!");
            shopper.amount = shopper.amount - (shopper.amount * .12)
            console.log("Amount after discount " +shopper.amount);
        }
        //MY EXAMPLE
        // let discount;
        // let discountAmount = (shopper.amount * .12)
        // let newTotal = shopper.amount - discountAmount

        // function discountApplies() {
        //     if (shopper.amount > 200) {
        //         discount = ' do apply for the 12% discount. Your discount is $' + discountAmount + '. Your new total is $' + newTotal + '.';
        //     } else {
        //         discount = ' do not apply for discount. Your total is still $' + shopper.amount + '.';
        //     }
        //     return discount;
        // }
        //
        // console.log(shopper.name + ' your total is $' + shopper.amount + '. You' +discountApplies(shoppers))
    })






    /** TODO 4:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: 'Professional Idiot', author: {firstName: 'Steven', lastName: 'Glover'}},
        {title: 'Harry Potter', author: {firstName: 'J.K', lastName: 'Rowling'}},
        {title: 'Death Note', author: {firstName: 'Some', lastName: 'Anime'}},
        {title: 'The Notebook', author: {firstName: 'Nicholas', lastName: 'Sparks'}},
        {title: 'It', author: {firstName: 'Stephen', lastName: 'King'}},
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    console.log(books[1].title);
    console.log(books[1].author.firstName);
    console.log(books[1].author.lastName);

    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);

    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);

    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);


    /**
     * TODO 5:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book){
        console.log('Book # ' + (books.indexOf(book)+1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
    })


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */




})();
