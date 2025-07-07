import "./App.css";
import Card from "./components/Card/Card";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <>
      <Greeting name={"Evgenii"} age={18} />
      <Goodbye />
      <ThankYou />
      <Card url={"https://kor.ill.in.ua/m/610x385/2722809.jpg"} alt="cat" />
      <ProfileCard
        avatar={
          "https://img.asmedia.epimg.net/resizer/v2/GAADKECXSVGIHIZYASJXJQF72Q.jpg?auth=ae3f2f56b04863387458dbb878b20f5f75a25a6c11762fb7baa6121efe7107b3&width=1200&height=1200&smart=true"
        }
        name="Jeyms Bond"
        description="Agent007"
      />
    </>
  );
}

export default App;
