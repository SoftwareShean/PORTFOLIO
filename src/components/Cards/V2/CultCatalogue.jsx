import React from 'react';
import './CultCatalogue.css';
import CCIcon from '../../../assets/cultcatalogueIcon.png';
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons";
import ReactIcon from "../../../assets/react.png";
import SassIcon from '../../../assets/Sass.jsx';
import NodeIcon from '../../../assets/nodejs.png';
import MongoIcon from '../../../assets/mongodb.png'


function Contact(props) {
  return (
    <div className="cultcatalogue card fadein">
      <div className="main">
        <div className="overview">
        <h1>CULTCATALOGUE</h1>
          <p>Based on a passion project from 2014, CultCatalogue is an API for biographies and works of contemporary global artists. Click the icons below to view the deployed project and its code.</p>
          <div className="projectIcons">
            
          </div>
        </div>
        <div className="project-buttons">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "35px",
                color: "#000000",
                paddingLeft: "8px",
                paddingTop: "5px",
                paddingRight: "8px",
              },
            }}
          >
            <button className="btn">
              <a href="https://cultcatalogue.netlify.app/" target="_blank0" title="View the site" rel="noopener noreferrer"><FaGlobe /></a>
            </button>
            <button className="btn">
              <a href="https://github.com/softwareshean/cultcatalogue" target="_blank0" rel="noopener noreferrer"><FaGithub /></a>
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className="card-title projectIcons">
      <img src={ReactIcon} />
            <SassIcon />
            <img src={NodeIcon} />
            <img src={MongoIcon} />
        <img src={CCIcon} alt="" />
      </div>
    </div>
  );
}

export default Contact;