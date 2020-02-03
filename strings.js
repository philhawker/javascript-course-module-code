const str = 'The quick brown fox jumped over the lazy dog'

console.log(str.length)
console.log(str.charAt(2))    // Returns e. Index starts at 0
console.log(str.charAt(200))  // Going over the index length returns an empty string (Null)    
console.log(str.concat(' again and again '))
console.log(str.includes('quick'));   // Will return a TRUE/FALSE if 'quick' is included
console.log(str.startsWith('quick'));
console.log(str.endsWith('quick'));
console.log(str.repeat(5))

newStr = str.concat(' again and again ')   //creating a new variable with the .concat will store the change to the original str
console.log(newStr);


console.log(str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)); // regular expression for a phone number. this returns null

console.log('(555) 555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)); 

const phone = '(555) 555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/); 
console.log(phone)    


console.log('hi, (555) 555-5555 is my number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)); 

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

messyString.trim(); // "Hi there" trims fron and end spaces

