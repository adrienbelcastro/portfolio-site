import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Splash from "../../components/splash/SplashScreen";
import Particles from "../../components/particles/Particles";
import "../homepage/Homepage.scss";
import Projects from "../../components/projects/Projects";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import CoffeeShop from "../../components/projects/CoffeeShop";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash isLoading={isLoading} />
      ) : (
        <div>
          <Particles id="tsparticles" />
          <Hero />
          <About />
          <Projects />
          <CoffeeShop />
          <Contact />
        </div>
      )}
    </>
  );
}

export default HomePage;
