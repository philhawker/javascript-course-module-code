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