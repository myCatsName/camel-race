import MenuButton from "../components/MenuButton";

export default function TitleScreen({ changeView }) {
  return (
    <>
      <span className="title-title">Camels Across The Outback</span>

      <div id="title-buttons">
        <MenuButton
          id={"map-button"}
          content={"Map"}
          onClick={() => {
            changeView("mapScreen");
          }}
        />
        <MenuButton
          id={"new-race-button"}
          content={"New Race"}
          onClick={() => {
            changeView("raceScreen");
          }}
        />
        <MenuButton
          id={"youtube-button"}
          content={"Watch Video"}
          onClick={() => {
            changeView("videoIFrame");
          }}
        />
      </div>
    </>
  );
}
