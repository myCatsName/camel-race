import { Howl } from "howler"
import acousticMP3 from "../sound/acoustic-guitar-by-skiwyy-14k.mp3"
import bushWalkMP3 from "../sound/bushwalk-by-jecky-14k.mp3"
import camelMP3 from "../sound/annakstedt_camel14k.mp3"

 const acousticFast = new Howl({
    src: [acousticMP3],
    volume:0.05,
    rate:.8,
    loop:true
})
 const acousticSlow = new Howl({
    src: [acousticMP3],
    volume:0.15,
    rate:0.7,
    loop:true
})
 const bushWalkSounds = new Howl({
    src: [bushWalkMP3],
    volume:1.45,
    rate:0.8,
    loop:true
})

const camelSound = new Howl({
src: [camelMP3],
sprite: {
    grunt1: [0,4000],
    grunt2: [6000,6000]
}
})

export function playMainTheme(){
    acousticFast.play();
    acousticSlow.play();
    bushWalkSounds.play();
}

export function playCamelSoundAtRandom(){
    Math.random() < .5
    ? camelSound.play('grunt1')
    : camelSound.play('grunt2')
}
