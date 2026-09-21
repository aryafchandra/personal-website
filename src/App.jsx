import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Scoreboard from "./components/Scoreboard";
import Profile from "./components/Profile";
import AcademyHistory from "./components/AcademyHistory";
import CareerHistory from "./components/CareerHistory";
import TrainingGround from "./components/TrainingGround";
import Playbook from "./components/Playbook";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Scoreboard />
      <Profile />
      <AcademyHistory />
      <CareerHistory />
      <TrainingGround />
      <Playbook />
      <Contact />
    </>
  );
}
