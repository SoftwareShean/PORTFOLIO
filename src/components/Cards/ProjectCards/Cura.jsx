import React from "react";
import "./Cura.css";
import CuraIcon from "../../../assets/CuraLogo.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons";
import ReactIcon from "../../../assets/react.png";
import RailsIcon from "../../../assets/rails.png";
import RubyIcon from "../../../assets/ruby.png";

function Cura(props) {
  return (
    <div className="cura card fadein">
      <div className="main">
        <div className="overview">
          <h1>CURA</h1>

          <p>
            CURA is your digital content manager. With a daily timeline, add
            links with rich data, upload photos, and add notes. Manage each day
            with CURA and never forget a memory. With API integrations fro the
            NYT you wont miss any of the latest top stories.
          </p>
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
              <a
                href="https://passthespatula.com/"
                target="_blank0"
                title="View the site"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
              <button className="btn">
                <a
                  href="https://cura-app.netlify.app/"
                  target="_blank0"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </button>
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className="card-title projectIcons">
      <img src={ReactIcon} />
            <img src={RubyIcon} />
            <img src={RailsIcon} />
        <img src={CuraIcon} alt="" />
      </div>
    </div>
  );
}

export default Cura;
