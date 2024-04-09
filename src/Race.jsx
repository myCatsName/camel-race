import { useEffect, useRef, useState } from "react";
import CamelSelector from "./components/CamelSelector";
import Interview from "./scene/Interview";
import { GameProvider } from "./context/GameContext";

export default function Race({ onClose }) {
  const chosenCamel = useRef(null);
  const [scene, setScene] = useState("CamelSelector");

  useEffect(() => {
    const backgroundImage = document.querySelector(".title-background");
    backgroundImage.classList.add("extra-blur");
    return () => backgroundImage.classList.remove("extra-blur");
  }, []);

  function chooseCamel(choice) {
    chosenCamel.current = choice;
    setScene("Interview");
  }

  return (
    <GameProvider>
      <div id="race-game">
        {scene === "CamelSelector" && (
          <CamelSelector onClose={onClose} chooseCamel={chooseCamel} />
        )}
        {scene === "Interview" && (
          <Interview chosenCamel={chosenCamel.current} />
        )}
      </div>
    </GameProvider>
  );
}
