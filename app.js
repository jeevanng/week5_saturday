
// import Book and Library

// module.exports = {Book}
const {Book} = require("./Book");
// modules.exports = Library
const Library = require("./Library")
let {Media} = require("./Media");

// make a library

let newLibrary = new Library();

// make some books

let coolProgrammingBook = new Book("Cool JS things 2023");
let coolPokemonBook = new Book("How to Catch Them All! 2023 Edition");

// put books in library
newLibrary.books.push(coolProgrammingBook, coolPokemonBook);

console.log(newLibrary.books);
console.log(Media.count);