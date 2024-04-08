import brown_camel from "/Brown_Camels.webp";
import bw_camel from "/camel_portrait.webp";
import white_camel from "/White_Camels.webp";

export default function CamelCard({ camel }) {
  const portrait =
    camel.furColor === "white"
      ? white_camel
      : camel.furColor === "grey"
      ? bw_camel
      : brown_camel;

  return (
    <div className="camel-card">
      <img src={portrait} />
      <ul>
        <li className="camel-name">{camel.name}</li>
        <div className="camel-stats">
          <li>
            <span>Fur: {camel.furColor}</span>
          </li>
          <li>
            <span>Eyes: {camel.eyes}</span>
          </li>
        </div>
      </ul>
    </div>
  );
}
