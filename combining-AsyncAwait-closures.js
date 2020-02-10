const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 3000);    // same as 3 seconds
    });
};


const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login');
        }, 3000);
    });
};


// USING THIS "CLOSURE" TECHNIQUE MAKES THE CONSOLE WAIT UNTIL EVERYTHING IS DONE BEFORE RESULTS ARE DISPLAYED FOR EVERYTHING

async function loginActivities(login, updateAccount) {  //naming these arguments can be whatever
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount())

