const blog = {
    title: 'My great post',
    summary: 'Summary of my post'
};

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
    return `
    og-title=${title}
    og-description=${summary}
  `
};

console.log(openGraphMetadata(blog));     // og-title=My great post og - description=Summary of my post;
console.log(openGraphMetadata(blog));     


const user = {
    username: 'kelsey',
    status: 'away'
}

const loginEvent = ({username, status }) => {
    status = 'active'
    return `${username} is ${status}`
}

console.log(loginEvent(user))

