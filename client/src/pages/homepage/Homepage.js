import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Splash from "../../components/splash/SplashScreen";
import Particles from "../../components/particles/Particles";
import "./Homepage.scss";
import Projects from "../../components/projects/Projects";

import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Experience from "../../components/experience/Experience";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3800);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="homepage">
          <Particles id="tsparticles" />
          <Splash isLoading={isLoading} />
        </div>
      ) : (
        <main className="homepage__content">
          <Particles id="tsparticles" />
          <Hero />
          <About />
          <Experience />
          <Projects />

          <Contact />
        </main>
      )}
    </>
  );
}

export default HomePage;
