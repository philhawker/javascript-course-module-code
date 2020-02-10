const greeting = new Promise((resolve, reject) => {
    resolve('hi')
    reject('oops')
})

const updateAccount = new Promise((resolve, reject) => {
    resolve('updating login...')
    reject('error updating account with login')
})


const loginActivities = Promise.all([greeting, updateAccount])   // .all has '.then' inside of it. so you can call '.then' on the line below

loginActivities.then(res => {
    res.forEach(activity => {
        console.log(activity)
    })
})

