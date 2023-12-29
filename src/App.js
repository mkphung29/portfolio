import NavBar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Databases from "./components/Databases";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Technologies />
      <Databases />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
