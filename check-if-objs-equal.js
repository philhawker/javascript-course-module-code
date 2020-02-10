const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false;
        }
    }

    return true;
};

const obj1 = {
    name: "Kristine",
    age: 13,
    favorites: {
        food: "Pizza",
        vacation: "Disneyland"
    }
};
const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
        food: "Pizza",
        vacation: "Disneyland"     // ****nested objects will return false, regardless of them being identical**** USE LODASH FOR THIS SITUATION
    }
};


// obj1 == obj2;  doesnt work

console.log(isEqual(obj1, obj2));
