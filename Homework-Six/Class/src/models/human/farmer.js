import Human from "./human.js";

export default class Farmer extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.kopac = false;
    }

    rmbaj(assigment) {
        if (this.kopac) {
            assigment = 'Pocnuvaj so rmbanje'
        } else {
            assigment = 'fakaj se za kopacot i rmbaj'
        }
        console.log(assigment);

    }

}