import React, { useRef } from "react";
import styles from "./App.module.scss";
import "./App.scss";

import Pass from "./components/Projects/Pass";
import Cult from "./components/Projects/Cult";
import CuraNew from "./components/Projects/CuraNew";
import CovidNew from "./components/Projects/CovidNew";
import Mission from "./components/Projects/Mission";

import { useInView } from "react-intersection-observer";
import { ParallaxProvider } from "react-scroll-parallax";
import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const { ref: landingRef, inView: landingIsVisible } = useInView();

  const clickRef = useRef(null);

  const handleClick = () =>
    clickRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <ParallaxProvider>
        <div className="App bottom-margin">
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
          <div className="scroll" ref={clickRef}></div>
          <section >
            <Pass />
          </section>
          <section>
            <Cult />
          </section>
          <section>
            <CuraNew />
          </section>
          <section>
            <CovidNew />
          </section>
          <section>
            <Mission />
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
    </>
  );
}

export default App;
