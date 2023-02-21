import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Mammal from "./models/mammal.js";
import Human from "./models/human/human.js";
import Farmer from "./models/human/farmer.js";
import Musician from "./models/human/musician.js";
import Worker from "./models/human/worker.js";



const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);

console.log(starZenskiSarplaninec);


const Andrew = new Human('Andrew', 30, 'Male')
Andrew.masculanity = true;
console.log(Andrew);
Andrew.checkTopG();
// console.log(Andrew);

Andrew.printSpecs();

const Kiril = new Farmer('Kiril', 24, 'Male')
Kiril.kopac = true;
Kiril.rmbaj()

const Tasko = new Musician('Tasko', 22, 'Female')
Tasko.turboStar();

const Stole = new Worker('Stole', 44, 'Male')
Stole.wrench = true;
Stole.workingPosition();
