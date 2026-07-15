import FirstVideo from "./components/FirstVideo";
import Hero from "./components/Hero";
import Jason from "./components/Jason";
import Lucia from "./components/Lucia";
import Navbar from "./components/Navbar";
import SecondVideo from "./components/SecondVideo";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />
    </main>
  );
};

export default App;
