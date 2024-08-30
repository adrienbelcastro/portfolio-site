import background from "../../assets/images/coffee-circle.jpg";
import { useState, useEffect } from "react";
import "../projects/Projects.scss";
import { Link } from "react-router-dom";

export default function CoffeeShop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1279);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects__video-container">
        <img
          src={background}
          className="projects__video"
          alt="coffee shop background"
        />

        <div className={`projects__overlay ${isDesktop ? "" : "active"}`}>
          <h2 className="projects__title">Coffee Shop</h2>
          <p className="projects__description">
            Coffee Shop is designed and developed a dynamic and modern coffee
            shop website using cutting-edge technologies to showcase my
            versatility and commitment to continuous learning. Leveraging
            Next.js for its robust React framework and server-side rendering
            capabilities, I incorporated TypeScript to enhance code
            maintainability and catch potential errors early in the development
            process. The user interface is styled with the highly efficient
            Tailwind CSS, ensuring a sleek and responsive design. Additionally,
            I integrated Supabase as the backend, harnessing its seamless
            database capabilities for efficient data management. This project
            not only demonstrates my proficiency in the specified tech stack but
            also showcases my ability to create a fully functional and
            aesthetically pleasing web application for a real-world scenario.
            The project is constantly being improved as I build my skills with
            this tech stack Currently I am working on Version 2.0 will include
            features such as a working cart, a robust login and sign-up system
            along with security features such as encrypting keys using salts.
          </p>
          <div className="projects__stack-container">
            <h2 className="projects__stack-title">Tech Stack:</h2>
            <img src="https://img.shields.io/badge/-Nextjs-black?style=flat-square&logo=Next.js" />
            <img src="https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript" />
            <img src="https://img.shields.io/badge/-tailwindcss-black?style=flat-square&logo=tailwindcss" />
            <img src="https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql" />
            <img src="https://img.shields.io/badge/-Supabase-black?style=flat-square&logo=supabase" />
          </div>
          <Link to="https://coffee-shop-red-five.vercel.app/">
            <button className="projects__button-link">Go To Coffee Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
