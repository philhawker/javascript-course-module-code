// CLASSES ARE JUST BLUEPRINTS. THEY DO NOTHING UNLESS USED
class Instructor {
    constructor({name}) {   // constructors are always objects ({}) and are basically functions
        this.name = name
    }
}

// THIS IS INSTANTIATION
const kels = new Instructor({name: 'kelsey hawker'})
console.log(kels);                                                          // returns.... Instructor { name: 'kelsey hawker' }
console.log(kels.name);                                                 // returns.... kelsey hawker