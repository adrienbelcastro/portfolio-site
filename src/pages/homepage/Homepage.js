import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Splash from "../../components/splash/SplashScreen";
import Particles from "../../components/particles/Particles";
import "../homepage/Homepage.scss";
import Projects from "../../components/projects/Projects";
import About from "../../components/about/About";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <div>
          <Particles id="tsparticles" />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
}

export default HomePage;
