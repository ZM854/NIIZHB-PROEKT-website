import HeroSection from "../../sections/HeroSection/HeroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import Footer from "../../sections/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.state?.scrollTo;

    if (!id) return;

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navigate(".", {
        replace: true,
        state: null,
      });
    });
  }, [location.state, navigate]);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default HomePage;
