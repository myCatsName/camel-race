import { useEffect, useState } from "react";
import Typewriter from "../components/Typewriter";
import MenuButton from "../components/MenuButton";
import weightedRandom from "../weightedRandom";
import Camel, { eyeColor } from "../classes/camel";

const wikiWinnerDialog = `Calculating these times into a 24‑hour period, then gaining an average of distance traveled daily equates to Gordon O'Connell taking 20 days in total time to complete, covering 168 km every 24 hours as the average. (This includes meals, sleeping and animal feeding)

Gordon O'Connell won The Great Australian Camel race by approximately 34 hours ahead of his nearest competitor. In addition to this the distance he won by had been reached by the second leg of the race. Gordon won the first four of the six legs, even when he was hospitalised with kidney failure from Shiguella on the second leg going into Boulia.

The army was the team organising the legs and were there for the safety of all competitors along with competing themselves. In addition to this they were the best equipped for the event with hundreds of support personnel and vehicles. The clear leaders throughout the race were the SASR and Gordon O'Connell.`;

export default function Interview({ chosenCamel }) {
  const [currentText, setCurrentText] = useState(`G'day MATE!`);
  const [showButtons, setShowButtons] = useState(false);
  const [showTrickQuestion, setShowTrickQuestion] = useState(false);

  const question1Dialog2 = ` 
    You must be excited to start your race
    -
    I understand you just met with your ride:
    ${chosenCamel.name}`;
  const question1Dialog3 = `can you tell us how you and ${chosenCamel.name} plan to start the race?`;

  //TODO: use a reducer to calc how long each type should be on screen, or rewrite typewriter fx
  useEffect(() => {
    setTimeout(() => {
      setCurrentText(question1Dialog2);
    }, 2500);
    setTimeout(() => {
      setCurrentText(question1Dialog3);
    }, 12000);
    setTimeout(() => {
      setShowButtons(true);
    }, 15000);
  }, []);

  function replyToQuestion(answer) {
    setCurrentText(`lol nice, mate! \n\n Good luck and we'll talk again soon`);
    setShowButtons(false);
    setTimeout(() => {
      setCurrentText(
        `oh, one more thing. can you tell us what color ${chosenCamel.name}'s eyes are?`
      );
      setShowTrickQuestion(true);
    }, 5000);
  }
  function replyToTrickQuestion(answer) {
    if (answer === "correct") setCurrentText(`well that sounds just beautiful`);
    if (answer === "wrong") setCurrentText(`focused on the race, I guess`);
    if (answer === `guess`)
      setCurrentText(`guess I should ask ${chosenCamel.name} lol`);
  }

  return (
    <div id="interview-screen">
      <div id="interviewer">
        <img id="interviewer-portrait" src="./pbs.webp" draggable="false" />
        <div id="interview-dialog">
          <Typewriter className="headline" text={currentText} delay={55} />
        </div>
      </div>
      {showButtons && (
        <div id="interview-button-group" className="button-group">
          <MenuButton onClick={() => replyToQuestion(`follow`)}>
            I'll follow {chosenCamel.name}'s pace
          </MenuButton>
          <MenuButton onClick={() => replyToQuestion(`go hard`)}>
            We'll go hard!
          </MenuButton>
          <MenuButton onClick={() => replyToQuestion(`slow`)}>
            Slow and Steady!
          </MenuButton>
        </div>
      )}
      {showTrickQuestion && (
        <div id="trick-button-group" className="button-group">
          <MenuButton onClick={() => replyToTrickQuestion(`wrong`)}>
            I really don't know
          </MenuButton>
          <MenuButton onClick={() => replyToTrickQuestion(`guess`)}>
            {weightedRandom(eyeColor)} maybe?
          </MenuButton>
          <MenuButton onClick={() => replyToTrickQuestion(`correct`)}>
            {chosenCamel.name}'s eyes are {chosenCamel.eyes}
          </MenuButton>
        </div>
      )}
    </div>
  );
}
