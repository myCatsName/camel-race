import { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

export default function MapScreen({ onClose }) {
  useEffect(() => {
    function handleClose(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleClose);
    return () => window.removeEventListener("keydown", handleClose);
  }, []);

  const wikiWinnerDialog = `In 1988 Gordon O'Connell won, taking 20 days in total to complete, covering 168 km every 24 hours as the average. (This includes meals, sleeping and animal feeding).

O'Connell won The Great Australian Camel race approximately 34 hours ahead of his nearest competitor. In addition, Gordon won the first four of the six legs, even when he was hospitalised with kidney failure on the second leg going into Boulia.

The army was the team organising the legs and were there for the safety of all competitors along with competing themselves. They were well equipped for the event with hundreds of support personnel and vehicles.`;

  return (
    <div id="map-screen">
      <img
        className="map-background"
        src="./Australian_Vegetation.webp"
        alt="a map of Australia"
      />
      <p id="map-text">{wikiWinnerDialog}</p>
      <CancelIcon
        id="map-cancel-icon"
        sx={{ fontSize: 80 }}
        onClick={() => onClose()}
      />
      <div id="location-flags">
        <FlagCircleIcon
          id="point-1-flag"
          sx={{ fontSize: 80, color: "black" }}
        />
        <FlagCircleIcon id="point-2-flag" sx={{ fontSize: 80 }} />
        <FlagCircleIcon id="point-3-flag" sx={{ fontSize: 80 }} />
        <FlagCircleIcon id="point-4-flag" sx={{ fontSize: 80 }} />
        <FlagCircleIcon id="point-5-flag" sx={{ fontSize: 80 }} />
        <FlagCircleIcon id="point-6-flag" sx={{ fontSize: 80 }} />
      </div>
    </div>
  );
}
