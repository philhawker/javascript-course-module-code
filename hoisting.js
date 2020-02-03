// Hoisted
name = 'Kelsey';
console.log(name); 
var name;

// Initializers not hoisted
console.log(age);
var age = 29;    //declaration AND assigning (var something = ) together will return undefined