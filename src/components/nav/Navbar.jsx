import React from "react";
import "./Navbar.css";
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
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h1>SHEAN</h1>
      </Link>
      <div className="icons">
        <IconContext.Provider
          value={{
            style: {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "5vh",
              fontSize: "35px",
              color: "black",
              paddingLeft: "10px",
              paddingRight: "20px",
            },
          }}
        >
          <a
            href="https://www.linkedin.com/in/sheanj/"
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
