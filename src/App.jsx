import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Parallax from "./components/Parallax/Parallax.jsx";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      <Parallax />
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
  );
}

export default App;
