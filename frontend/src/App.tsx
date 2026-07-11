import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import AboutSection from "./sections/AboutSection/AboutSection";
import Footer from "./sections/Footer/Footer";
import HeroSection from "./sections/HeroSection/HeroSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";

function App() {
  return (
    <ThemeProvider>
      <HeroSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <ProjectsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
