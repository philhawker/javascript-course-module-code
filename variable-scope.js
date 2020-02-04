
const userObj = {
    email: 'kelsey@gmail.com',   // This variable will be overwritten by the same variable name in the funciton below
    fullName: 'Kelsey Hawker'
}

function dashboardGreeting() {
    const userObj = {
        email: 'phil@gmail.com',
        fullName: 'Phil Hawker'
    }
    console.log('Hi there, '.concat(userObj.fullName))   //in javascript, you can call functions from outside of the code block
}

console.log(dashboardGreeting())