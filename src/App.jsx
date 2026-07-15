import FinalVideo from "./components/FinalVideo";
import FirstVideo from "./components/FirstVideo";
import Hero from "./components/Hero";
import Jason from "./components/Jason";
import Lucia from "./components/Lucia";
import Navbar from "./components/Navbar";
import Outro from "./components/Outro";
import PostCard from "./components/PostCard";
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

      <PostCard />

      <FinalVideo />
      <Outro />
    </main>
  );
};

export default App;
