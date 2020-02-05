// or looping through dictionaries

const student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
};

for (const key in student) {
    console.log(key + ' => ' + student[key])      // .key will return the keys but values of undefined. [key] need to be used to render the value of the key
}