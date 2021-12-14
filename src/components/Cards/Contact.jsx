import React from 'react';
import './Contact.css';
import Portrait from '../../assets/Portrait.jpg';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperclip,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Contact(props) {
  return (
    <div className="contact card">
      <div className="main">
      <IconContext.Provider
          value={{
            style: {
              width: "100%",
              fontSize: "75px",
              color: "#000000",
              paddingLeft: "10px",
              paddingRight: "10px",
              filter: "drop-shadow(3px 2px 10px #bfbfbf)"
            },
          }}
        >
          <a href="https://www.linkedin.com/in/sheanj/" target="_blank"
          rel="noopener noreferrer">
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
          <a target="_blank"
          rel="noopener noreferrer" href="https://instagram.com/softwareshean">
            <FaInstagram />
          </a>
          <a target="_blank"
          rel="noopener noreferrer" href="https://twitter.com/softwareshean">
            <FaTwitter />
          </a>
          </IconContext.Provider>
      </div>
      <div className="card-title">

        <h1>Hi, I'm Shean.</h1>
        <img src={Portrait} alt="" />
      </div>
    </div>
  );
}

export default Contact;