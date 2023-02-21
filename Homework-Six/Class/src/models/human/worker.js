import Human from "./human.js";

export default class Worker extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.wrench = false;
        this.fazomer = false;
    }
    workingPosition(position) {
        if (this.wrench) {
            position = `${this.name} is a plumber`
        } else if (this.fazomer) {
            position = `${this.name} is a electrician`
        } else {
            position = ` ${this.name}Poprava se i sesto . ..`
        }
        console.log(position);
    }
}