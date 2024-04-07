import "./App.css";
import Camel from "./classes/camel";
import TitleScreen from "./scene/Title";

import { playMainTheme } from "./sound/music";

const yak = new Camel();
const cow = new Camel("red", "gerta");
const carrot = new Camel();

console.log(yak, cow, carrot);

console.log("v.002");
playMainTheme();

function App() {
  return <TitleScreen />;
}

export default App;
