function adminControls(user) {
    // if (user) {         // using just if(user), javascript assumes you expect a true or false value
    //     if (user.admin) {
    //         console.log('showing admin controls') 
    //     } else {
    //         console.log('you need to be an admin')
    //     }
    // } else {
    //     console.log('you need to be logged in')
    // }

    let response = user ? (user.admin ? 'showing admin controls...' : 'you need to be an admin...') : 'you need to be logged in...'
    return response
}



let userOne = {
    name: 'phil',
    admin: true
}

let userTwo = {
    name: 'Kelsey',
    admin: false
}



console.log(adminControls(userOne))
console.log(adminControls(userTwo))