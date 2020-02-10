class Instructor {
    constructor({ name, role = 'assistant' }) {     // role = 'assistant' is the default. if role is not called, assistant will be used
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        return `${this.name}: ${this.role}`
    }
}

const kels = new Instructor({ name: 'kelsey hawker' });
const sadie = new Instructor({ name: 'sadie hawker', role: 'teacher'});


console.log(kels.renderDetails());   // returns kelsey hawker: assistant
console.log(sadie.renderDetails());   // returns sadie hawker: teacher



// ANOTHER EXAMPLE
class Car {
    constructor({ year, brand, poweredBy = 'gas' }) {
        this.year = year;
        this.brand = brand;
        this.poweredBy = poweredBy;
    }

    carSpecs() {
        return (`The ${this.year} ${this.brand} runs on ${this.poweredBy}`);
    }
}

const model3 = new Car({ year: 2019, brand: "Tesla", poweredBy: "electricity" });

model3.carSpecs();