var age = 15

if (age <= 10) {
    console.log('You CAN eat from the kids menu')
    console.log('You are NOT old enough to drive')
    console.log('You are NOT old enough to rent a car')
} else if (age >= 16 && age < 25) {                                // && means AND
    console.log('You can NOT eat from the kids menu');
    console.log('You ARE old enough to drive');
    console.log('You are NOT old enough to rent a car')
} else if ( age >= 25) {
    console.log('You can NOT eat from the kids menu');
    console.log('You ARE old enough to drive');
    console.log('You ARE old enough to rent a car')
} else if (age > 16 && age < 10) {
    console.log('You can NOT eat from the kids menu');
    console.log('You are NOT old enough to drive');
    console.log('You are NOT old enough to rent a car')
}

