import { Howl } from "howler"
import acousticMP3 from "../sound/acoustic-guitar-by-skiwyy-14k.mp3"
import bushWalkMP3 from "../sound/bushwalk-by-jecky-14k.mp3"

export const acousticFast = new Howl({
    src: [acousticMP3],
    volume:0.05,
    rate:1,
    loop:true
})
export const acousticSlow = new Howl({
    src: [acousticMP3],
    volume:0.25,
    rate:0.8,
    loop:true
})
export const bushWalkSounds = new Howl({
    src: [bushWalkMP3],
    volume:1.25,
    rate:0.8,
    loop:true
})
export function playMainTheme(){
    acousticFast.play();
    acousticSlow.play();
    bushWalkSounds.play();
}
