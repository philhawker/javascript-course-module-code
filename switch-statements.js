const dataPoint = 'Hi there'

switch (typeof dataPoint) {
    case 'string':
        console.log('It is a string')
        break                                       // break means skip all the rest of the code and be done
    case 'number':
        console.log('It is a number')
        break
    case 'boolean':
        console.log('It is a boolean')
        break
    default:
        console.log('No matches')       // default does not need a break
}