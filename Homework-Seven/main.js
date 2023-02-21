import Animal from "./src/Animal.js";


const tiger = new Animal('tiger', 'carnivore', 5, 10);
const rabbit = new Animal('rabit', 'herbivore', 3, 5);
const morzh = new Animal('morzh', 'herbivore', 4, 8);
console.log(tiger,rabbit,morzh);

tiger.eat(morzh)
tiger.eat(rabbit)
morzh.eat(tiger)
morzh.eat(rabbit)
rabbit.eat(tiger)
rabbit.eat(morzh)