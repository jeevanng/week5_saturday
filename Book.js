// Destructured variable = module.exports 
const {Media} = require("./Media");


// Inheritance 
class Book extends Media {
    constructor(newName){
        // Triggers the constructor in the parent class - super()
        super(newName);

        // Not needed because all Media types will have a name
        // this.name = newName;
    }
}

let someBook = new Book("Shopify Tutorial");
console.log(someBook.name);


module.exports = {
    Book
}