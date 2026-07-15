import FirstVideo from "./components/FirstVideo";
import Hero from "./components/Hero";
import Jason from "./components/Jason";
import Lucia from "./components/Lucia";
import Navbar from "./components/Navbar";
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
    </main>
  );
};

export default App;
