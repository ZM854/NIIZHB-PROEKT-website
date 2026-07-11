import "./App.css";
import AboutSection from "./sections/AboutSection/AboutSection";
import Footer from "./sections/Footer/Footer";
import HeroSection from "./sections/HeroSection/HeroSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
