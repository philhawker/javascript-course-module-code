// Hoisted
name = 'Kelsey';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 29;    //declaration AND assigning (var something = ) together will return undefined