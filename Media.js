// Media class as common starting point for 
// things like DVDs, books, vinyls etc

// Blueprint of data
class Media {
    constructor(){
        this.name = "Default generic media"

        Media.count++;
    }

    // Count of all media that exist
    static count = 0

    getMediaName(){
        return this.name;
    }

    // static keyword makes it belong to class
    // On the static class 
    static version(){
        return "class version 0.0.1";
    }

    version(){
        return "prototype version 0.0.1"
    }
}

// Instance of blueprint
let someMedia = new Media();
let someMoreMedia = new Media();
// Get name of the instance, which will be the default
console.log(someMedia.name);
// Using the function/method in the class 
console.log(someMedia.getMediaName());

// Change name of the instance
someMedia.name = "Cool generic media"
console.log(someMedia.name);
// Using the function/method in the class 
console.log(someMedia.getMediaName());

console.log(Media.version());
console.log(Media.prototype.version());
console.log(`We have ${Media.count} items`);