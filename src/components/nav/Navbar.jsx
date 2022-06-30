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
        <h1>SOFTWARESHEAN</h1>
      </Link>
      <div className="icons">
        <IconContext.Provider
          value={{
            style: {
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "3vh",
              fontSize: "35px",
              color: "#FFFFFF",
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
          <a href="mailto:csheanjohnson@gmail.com">
            <FaEnvelope />
          </a>
          <a href="tel:+19174742061">
            <FaPhone />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/softwareshean"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/softwareshean"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/softwareshean"
          >
            <FaTwitter />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}
