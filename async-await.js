const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...')
        }, 2000)
    })
}


const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login')
        }, 2000)
    })
}


// THIS IS WHAT ALLOWS YOU TO TO INSTRUCT THE ORDER ACTIONS ARE FIRED OFF
async function loginActivities() {
    const returnedLogin = await login()
    console.log(returnedLogin)

    const returnedUpdateAccount = await updateAccount()
    console.log(returnedUpdateAccount)
}

loginActivities()