const allTopics = document.querySelectorAll('.topics')

allTopics

copy(allTopics)

const topicsToArray = Array.prototype.slice.call(allTopics)

copy(topicsToArray)

topicsToArray[0]

topicsToArray[0].textContent

const topicList = topicsToArray.map(e => e.textContent)

copy(topicList)

topicList