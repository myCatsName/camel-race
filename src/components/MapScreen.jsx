import CancelIcon from "@mui/icons-material/Cancel";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

export default function MapScreen({ onClose }) {
  function handleClick() {}

  return (
    <div id="map-screen">
      <img
        className="map-background"
        src="./Australian_Vegetation.webp"
        alt="a map of Australia"
        onClick={handleClick}
      />
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
