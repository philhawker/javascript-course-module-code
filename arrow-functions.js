function fullName(fName, lName) {
    console.log(`${fName} ${lName}`)
}

fullName('kelsey', 'hawker')      // Basic way to format string interpolation


hello = () => {console.log('Hi there')}   // Basic format of an arrow function. to the right of the arrow is what you want to happen

hello()

firstName = fName => { console.log(fName.toUpperCase()); };   // example for just a single argument. when single, dont need parans around the argument fName

firstName('kelsey')

entireName = (fName, lName) => {
    console.log(`${fName} ${lName}`)      // Syntax for layout with 2 arguments
}

entireName('kelsey', 'hawker')