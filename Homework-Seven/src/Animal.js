export default class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(food) {
        if (food instanceof Animal) {
            if (this.type === 'herbivore') {
                console.log(`The ${this.name} is a herbivore and does not eat other animals.`);
            } else if (food.size <= this.size * 2) {
                food.isEaten = true;
                console.log(`The ${this.name} ate the ${food.name}.`);
            } else {
                console.log(`The ${this.name} tried to eat the ${food.name} but it was too large.`);
            }
        } else {
            console.log(`The ${this.name} is eating ${food}.`);
        }
    }
}