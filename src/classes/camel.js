import weightedRandom from "../weightedRandom"

const baseEndurance = 1
const baseSpeed = 1
const eyeColor = ['blue','brown','gold','green','grey', 'purple', 'red']
const eyeColorChance = [10,40,5,10,20,5,15]
const furColor = ['brown','grey','white']
const name = ['Buggy','Cherry', 'Dill','Gerta', 'Henk','Hula','Lunky','Mellow','Quartz','Puppy','Rinky','Simmy', 'Taytay','Virgo','Widget']

export default class Camel {
    constructor(nameChoice){
    this.endurance = baseEndurance;
    this.eyes = weightedRandom(eyeColor,eyeColorChance);
    this.furColor = weightedRandom(furColor);
    this.id = Math.random();
    this.name = nameChoice|| weightedRandom(name);
    this.speed = baseSpeed;
    }
}