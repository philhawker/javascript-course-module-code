// USED MOSTLY WHEN COMMUNICATING WITH AN OUTSIDE API

const sleepyGreeting = new Promise((resolve, reject) => {      //instantiating right here. Promise() is a class within js. 
    setTimeout(() => {                                                          // a promise thinks to itself: expects to work, or expects an error
        resolve('hello...')
    }, 2000)

    setTimeout(() => {
        reject(Error('Too sleepy...'))
    }, 2000)
})

sleepyGreeting
    .then(data => {    // must pass in keyword ".then"
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })


//RETURNS 'HELLO...'





const sleepyGreetingTwo = new Promise((resolve, reject) => {      
    // setTimeout(() => {
    //     resolve('hello...')
    // }, 2000)

    setTimeout(() => {
        reject(Error('Too sleepy...'))
    }, 2000)
})

sleepyGreetingTwo
    .then(data => {    
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })

//RETURNS ERROR 'TOO SLEEPY....'