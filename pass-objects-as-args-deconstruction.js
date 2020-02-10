const user = {
    name: 'Kelsey',
    email: 'kelsey@gmail.com'
}

const renderUser = ({name, email}) => {
    return `${name}: ${email}`
}

console.log(renderUser(user))