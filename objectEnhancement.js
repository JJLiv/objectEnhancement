//ES2015 Versions


//same keys and values
function createInstructor(first, last){
    return {
        first,
        last
    }
}

//computed property names

let favoriteNumber = 42;
let instructor = {
    firstname: "Jeremy",
    [favoriteNumber]: "Thats my favorite"
}


//Computed Property Names
//Object Methods

let instructor1 = {
    firstname: "Jeremy",
    sayHi() {
        return "Hi";
    },
    sayBye(){
        return this.firstname + " says bye"
    },
}

//create animal function

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        },
    }
}