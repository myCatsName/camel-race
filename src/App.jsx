import "./App.css";
import { useState } from "react";
import TitleScreen from "./scene/Title";

import { playMainTheme } from "./sound/music";
import Race from "./Race";
import MapScreen from "./components/MapScreen";

console.log("v.022");
playMainTheme();

function App() {
  const [shown, setShown] = useState("titleScreen");

  function returnToTitle() {
    document.startViewTransition(() => {
      setShown("titleScreen");
    });
  }
  function changeView(destination) {
    document.startViewTransition(() => {
      setShown(destination);
    });
  }

  return (
    <>
      <img
        className="title-background"
        src="./Racing_Camel_by_fullyreclined.jpg"
        alt="a camel and rider"
      />
      {shown === "titleScreen" && <TitleScreen changeView={changeView} />}
      {shown === "mapScreen" && <MapScreen onClose={returnToTitle} />}
      {shown === "raceScreen" && <Race onClose={returnToTitle} />}
    </>
  );
}

export default App;
