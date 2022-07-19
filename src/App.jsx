import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./App.module.scss";
import "./App.scss";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useEffect } from "react";
import Pts from "./components/Cards/Pts";
import Cc from "./components/Cards/Cc";
import Cura from "./components/Cards/Cura";
import Covid from "./components/Cards/Covid";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const { ref: myRef, inView: elementVisible } = useInView();
  const { ref: pstRef, inView: ptsVisible } = useInView();
  const { ref: ccRef, inView: ccVisible } = useInView();
  const { ref: curaRef, inView: curaVisible } = useInView();
  const { ref: covidRef, inView: covidVisible } = useInView();

  const { ref: landingRef, inView: landingIsVisible } = useInView();

  const clickRef = useRef(null);

  const handleClick = () =>
    clickRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {});
  return (
    <ParallaxProvider>
      <div className="App">
        <section ref={landingRef}>
          <div className="landing">
            <span
              className={`${styles.landingHeading} ${
                landingIsVisible ? styles.animateLandingHeading : ""
              }`}
            >
              <h1>SOFTWARE SHEAN</h1>
            </span>
            <h2>SAAF-TWEHR SHH-IAN</h2>
            <button onClick={handleClick}>view projects</button>
          </div>
        </section>
        <section ref={clickRef}>
          <Pts />
        </section>
        <section>
          <Cc />
        </section>
        <section>
          <Cura />
        </section>
        <section>
          <Covid />
        </section>
        <section>
          <div className="mission">
            <h1>
              I am committed to making a positive impact. I am a builder and
              creator. My experience is diverse and varied which provides me
              with a unique skillset.
              <br />
              <br />I am action oriented, independent, organized, creative, and
              most importantly, deeply passionate about my work and the things I
              create.
            </h1>
          </div>
        </section>
        <div className="app-footer">
          <IconContext.Provider
            value={{
              style: {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "4vh",
                fontSize: "35px",
                color: "black",
                paddingLeft: "10px",
                paddingRight: "20px",
                margin: "0 auto",
              },
            }}
          >
            <a
              href="https://www.linkedin.com/in/softwareshean/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/softwareshean"
            >
              <FaGithub />
            </a>
            <a href="mailto:csheanjohnson@gmail.com">
              <FaEnvelope />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
