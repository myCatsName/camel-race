import { useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  playCamelSoundAtRandom,
  playMainTheme,
  stopMainTheme,
} from "../sound/music";

export default function YouTubeScreen({ onClose }) {
  useEffect(() => {
    stopMainTheme();
    playCamelSoundAtRandom();
    const backgroundImage = document.querySelector(".title-background");
    backgroundImage.classList.add("extra-blur");
    return () => {
      backgroundImage.classList.remove("extra-blur");
      playMainTheme();
      playCamelSoundAtRandom();
    };
  }, []);
  useEffect(() => {
    function handleClose(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleClose);
    return () => window.removeEventListener("keydown", handleClose);
  }, []);

  return (
    <>
      <CancelIcon
        id="video-cancel-icon"
        sx={{ fontSize: 80 }}
        onClick={() => onClose()}
      />
      <iframe
        id="youtube-iframe"
        style={{
          aspectRatio: "315/560",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        width="50%"
        height="50%"
        src="https://www.youtube.com/embed/zoyxmSF7CFY?si=EjuSqjXOHAiua1Om"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen="true"
      ></iframe>
    </>
  );
}
