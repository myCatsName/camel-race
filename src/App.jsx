import "./App.css";
import Camel from "./classes/camel";
import TitleScreen from "./scene/Title";

const yak = new Camel();
const cow = new Camel("red", "gerta");
const carrot = new Camel();

console.log(yak, cow, carrot);

function App() {
  return <TitleScreen />;
}

export default App;
