import { useEffect } from "react";
import Camel from "../classes/camel";
import CamelCard from "./CamelCard";
import MenuButton from "./MenuButton";

export default function CamelSelector({ onClose, chooseCamel }) {
  const camelChoices = [];
  while (camelChoices.length < 3) {
    const camel = new Camel();
    if (!camelChoices.some((picked) => picked.name === camel.name)) {
      camelChoices.push(camel);
    }
  }

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
      <span id="cyo-camel">Choose your Camel</span>
      {camelChoices.map((camel) => {
        return (
          <div className="camel-choices" key={camel.id}>
            <CamelCard camel={camel} />
            <MenuButton content={"Choose"} onClick={() => chooseCamel(camel)} />
          </div>
        );
      })}
    </>
  );
}
