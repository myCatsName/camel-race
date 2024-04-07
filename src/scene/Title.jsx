import { useState } from "react";
import MenuButton from "../components/MenuButton";
import MapScreen from "../components/MapScreen";

export default function TitleScreen() {
  const [shown, setShown] = useState("");
  console.log("v.001");

  return (
    <>
      <img
        className="title-background"
        src="./Racing_Camel_by_fullyreclined.jpg"
        alt="a camel and rider"
      />
      <span className="title-title">Camels Across The Outback</span>
      <div id="title-buttons">
        <MenuButton
          id={"map-button"}
          content={"Map"}
          onClick={() => {
            document.startViewTransition(() => setShown("mapScreen"));
          }}
        />
        <MenuButton id={"new-race-button"} content={"New Race"} />
        <MenuButton id={"continue-race-button"} content={"Continue Race"} />
      </div>
      {shown === "mapScreen" && (
        <MapScreen
          onClose={() => {
            document.startViewTransition(() => {
              setShown(null);
            });
          }}
        />
      )}
    </>
  );
}
