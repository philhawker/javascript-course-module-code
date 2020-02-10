const userOne = {
    firstName: 'kelsey',
    lastName: 'hawker'
}

const userTwo = {
    firstName: 'sadie',
    lastName: 'hawker'
}


const fullName = function() {
    return `${this.lastName}, ${this.firstName}`
}

const kelsey = fullName.bind(userOne)   // created new variables in order to acess the return value of fullName by using BIND
const sadie = fullName.bind(userTwo)

console.log(kelsey())
console.log(sadie())