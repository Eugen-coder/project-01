import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";


function App() {
  return (
    <>
      <Greeting name={"Evgenii"} age={18}/>
      <ThankYou />
      <Card url={"https://kor.ill.in.ua/m/610x385/2722809.jpg"} alt="cat"/>
    </>
  );
}

export default App;
