// COMBINING ARRAYS
const shoppingCartOne = [345, 378, 764, 789]
const newItems = [223, 412, 213]

// shoppingCart.push(newItems)
console.log(shoppingCartOne);    // this is what is returned [ 345, 378, 764, 789, [ 223, 412, 213 ] ]

shoppingCartOne.push(...newItems);   // ...is the spread. PROPER WAY
console.log(shoppingCartOne);    // this is what is returned [ 345, 378, 764, 789, 223, 412, 213 ]


//COPYING ARRAY
const shoppingCartTwo = [345, 378, 764, 789];
const updatedShoppingCartTwo = [...shoppingCartTwo]
updatedShoppingCartTwo.push(5)

console.log(shoppingCartTwo);    //[ 345, 378, 764, 789 ]
console.log(updatedShoppingCartTwo);   // [ 345, 378, 764, 789, 5 ]



const orderTotals = [1, 5, 1, 10, 4, 13]
console.log(Math.max(...orderTotals))  // without ... it will return NaN. Not a Number



//OBJECT DECONSTRUCTION
const {starter, closer, ...relievers} = {   //...relievers is combining everything left over in the object and is assigning it to relievers 
    starter: 'kelsey',
    closer: 'sadie',
    relief_1: 'phil',
    relief_2: 'zach',
}

console.log(starter)
console.log(closer)
console.log(relievers)