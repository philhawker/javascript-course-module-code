function hiThere() {
    console.log('hi there')   //console.log returns no value. it just shows stuff on the console. use RETURN
}

hiThere()


function hiThereTwo() {
    return 'hi there again'
}

console.log(hiThereTwo());



const storedText = hiThereTwo()

console.log(storedText)