import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Splash from "../../components/splash/SplashScreen";
import Particles from "../../components/particles/Particles";
import "../homepage/Homepage.scss";
import Projects from "../../components/projects/Projects";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";

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
          <Contact />
        </div>
      )}
    </>
  );
}

export default HomePage;
