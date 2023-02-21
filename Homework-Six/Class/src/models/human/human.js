import Mammal from "../mammal.js";

export default class Human extends Mammal {

    static humanRace = {
        white: 'white',
        black: 'nigga',
        hispanic: 'hispanic',
    }

    constructor(name, age, gender) {
        super(name, age, gender)
        this.employed = false;
        this.masculanity = false;
        this.married = false;
    }
    checkTopG(topG = 'You are weak') {
        if (this.masculanity === true && this.married === false) {
            topG = 'My Unmatched Perspicacity Coupled With My Sheer Indefatigability Makes Me a Feared Opponent in Any Realm of Human Endeavor'
        }
        console.log(topG);
    }


}

