// CLASSES ARE JUST BLUEPRINTS. THEY DO NOTHING UNLESS USED
class Instructor {
    constructor({name}) {   // constructors dont have to be objects ({})
        this.name = name
    }
}

// THIS IS INSTANTIATION
const kels = new Instructor({name: 'kelsey hawker'})
console.log(kels);                                                          // returns.... Instructor { name: 'kelsey hawker' }
console.log(kels.name);                                                 // returns.... kelsey hawker



//ANOTHER EXAMPLE
class Account {
    constructor({username, password}) {
        this.username = username
        this.password = password
    }
}

const user = new Account({username: 'kelsey', password: 'hawker'})