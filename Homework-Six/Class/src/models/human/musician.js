import Human from "./human.js";

export default class Musician extends Human {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.turboFolk = false;
    }

    turboStar(song){
        const turboPesna = new Audio('../../../assets/dzej.mp3')
        if(this.turboFolk){
            turboPesna.play();
            song = 'Singing : Da si moja djevojcica . . . Sinan sakic fav artist'
        }else {
            song = 'Favourite video : Macedonian idol - Marjanco'
        }
        console.log(song);

    }

}