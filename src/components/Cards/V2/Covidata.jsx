import React, { useState } from "react";
import "./Covidata.css";
import CovidIcon from "../../../assets/Covid.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons";

function Covidata(props) {
  return (
    <div className="covidata card fadein">
      <div className="main">
        <div className="overview">
          <div className="card-header">
            <h1>CoviData</h1>
          </div>
          <div className="card-body">
            <p>
              CoviData was built at the beginning of the Covid-19 global
              pandemic as a means of tracking the latest news as well as
              infection rates and death tolls with data provided from The Covid
              Tracking Project. Disperate APIs were interpreted to provide
              unique data visualizations by State.
            </p>
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
            </button>
            <button className="btn">
              <a
                href="https://cura-app.netlify.app/"
                target="_blank0"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className="card-title">
        <img src={CovidIcon} alt="" />
      </div>
    </div>
  );
}

export default Covidata;
