var user = {
    name: 'Phil',
    age: 29,
    city: 'Lehi',
    grades: {
        math: 90,
        science: 80,
        languageArts: 100,
    }
}

user.grades.coding = 99    // This adds coding to the grades library on the fly. using . is the same as using [] in python

console.log(user.grades);
console.log(user.grades.math);