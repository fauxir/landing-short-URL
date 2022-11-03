
import HeroSection from "./components/heroSection";
import ShortUrl from "./components/ShortUrl";
import AdvancedStats from "./components/AdvancedStats";
import BoostLink from "./components/BoostLink";
import ShortFooter from "./components/ShortFooter";
import NavBar from "./components/NavBar";

function App() {
  return <div>
    <NavBar />
    <HeroSection />
    <ShortUrl />
    <AdvancedStats />
    <BoostLink />
    <ShortFooter />
  </div>;
}

export default App;
