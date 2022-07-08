import React, { useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Parallax.scss";
import PTS from "../Cards/ProjectCards/PTS";
import CC from "../Cards/ProjectCards/CC";
import CURA from "../Cards/ProjectCards/CURA";
import COVID from "../Cards/ProjectCards/COVID";

export default function Parallax() {
  const ref = useRef(null);

  const handleClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <div className="section">
        <div className="landing">
          <h1>SOFTWARE SHEAN</h1>
          <h2>SAAF-TWEHR SHH-IAN</h2>
          <button onClick={handleClick}>view projects</button>
        </div>
      </div>
      <div className="section" ref={ref}>
        <div className="fixed">
          <PTS />
        </div>
      </div>
      <div className="section">
        <div className="fixed">
          <CC />
        </div>
      </div>
      <div className="section">
        <div className="fixed">
          <CURA />
        </div>
      </div>
      <div className="section">
        <div className="fixed">
          <COVID />
        </div>
      </div>
      <div className="section">
        <div className="fixed mission">
          <h2>
            I am committed to making a positive impact. At my root, I am a
            builder and creator. My work experience is diverse and varied which
            provides me with a unique skillset. I am action oriented and
            independent, organized, creative, and most importantly, deeply
            passionate about my work and the things I create.
          </h2>
          <div className="footer">
            <IconContext.Provider
              value={{
                style: {
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "4vh",
                  fontSize: "35px",
                  color: "blue",
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
      </div>
    </div>
  );
}