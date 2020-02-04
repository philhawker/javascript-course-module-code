// Question ? True : False     basic layout of ternary operator


function ageVerification(age) {
    // if (age > 25) {
    //     console.log('can rent a car');
    // } else {
    //     console.log('is not old enough');
    // }
    let answer = age > 25 ? 'can rent a car' : 'can not rent a car'  // colon : acts the same as stating ELSE
    console.log(answer)    // This ternary operator is the same as the above commented out code
}

console.log(ageVerification(5))

function doYouRock(age) {
    let answer = age > 25 ? 'You rock bruh' : 'You dont rock, sorry bruh'
    console.log(answer)
}
console.log(doYouRock(24))
console.log(doYouRock(25))
console.log(doYouRock(26))