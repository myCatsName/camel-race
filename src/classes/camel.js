import weightedRandom from "../weightedRandom"

const baseDesire = 0.5
const baseEndurance = 1
const baseSpeed = 1
const eyeColor = ['blue','brown','gold','green','grey', 'purple', 'red']
const eyeColorChance = [10,40,5,10,20,5,20]
const name = ['Charolette', 'Dill','Gerta', 'Henk','Lunky','Mellow','Quartz','Puppy','Rinky','Simmy', 'Taytay','Virgo','Widget']

export default class Camel {
    constructor(eyeChoice, nameChoice){
    this.endurance = baseEndurance;
    this.eyes = eyeChoice|| weightedRandom(eyeColor,eyeColorChance);
    this.name = nameChoice|| weightedRandom(name)
    this.speed = baseSpeed;
    }
}