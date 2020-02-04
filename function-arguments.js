function fullName(firstName, lastName) {
    return lastName.toUpperCase() + ", " + firstName.toUpperCase()
}



console.log(fullName('kelsey', 'hawker'))

function name(firstName, lastName, language) {
    language = language || 'English'                         // || means OR this line is setting a default value for the argument language
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + ' - ' + language
}

console.log(name('kelsey', 'hawker'))
