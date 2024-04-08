import { useEffect, useRef } from "react";
import CamelSelector from "./components/CamelSelector";

export default function Race({ onClose }) {
  const chosenCamel = useRef(null);

  useEffect(() => {
    const backgroundImage = document.querySelector(".title-background");
    backgroundImage.classList.add("extra-blur");
    return () => backgroundImage.classList.remove("extra-blur");
  }, []);

  function chooseCamel(choice) {
    chosenCamel.current = choice;
    onClose();
  }

  return (
    <div id="race-game">
      <CamelSelector onClose={onClose} chooseCamel={chooseCamel} />
    </div>
  );
}
