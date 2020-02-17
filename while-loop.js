array = [3, 8, 2, 4]

function whileLoop(arr) {
    let a = 0;
    let num = 0;
    do {
        num = num + arr[a];
        a++;
    } while (a < arr.length);
    return num;
}

console.log(whileLoop(array));