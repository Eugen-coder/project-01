import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import Card from "./components/Card/Card";
import { Counter } from "./components/Counter/Counter";
import Demo from "./components/Demo";
import GenderResponse from "./components/GenderResponse/GenderResponse";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import ThankYou from "./components/ThankYou/ThankYou";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import Registration from "./components/pages/Registration.tsx/Registration";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import MainLayout from "./layout/MainLayout";
import { ROUTES } from "./constants/routes";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path="/gender-predictor" element={<GenderResponse />} />
            <Route path="/age-predictor" element={<AgePredictor />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Contact/>
      <About />
      <GenderResponse />
      <AgePredictor />
      <Demo />
      <WeightCalculator />
      <Counter />
      <PersonalGreeting />
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
      <SpaceMissionForm />
    </>
  );
}

export default App;
