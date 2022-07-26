import React from "react";
import { Parallax } from "react-scroll-parallax";
import ReactIcon from "../../assets/react.png";
import RailsIcon from "../../assets/rails.png";
import RubyIcon from "../../assets/ruby.png";
import "./styles/Cura.scss";
import "./styles/Card.scss";


export default function CuraNew() {
  return (
    <div className="cura-new card">
      <div className="heading">
        <div className="project-title" >
          <a href="https://cura-app.netlify.app/">
            <h1>CURA</h1>
          </a>
          <div className="app-icon" alt="cura icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <div className="project-icons-1">
            <Parallax speed={-5}>
              <img src={ReactIcon} alt="react icon"/>
            </Parallax>
          </div>

          <div className="project-icons-2">
            <Parallax speed={-5}>
              <img src={RailsIcon} alt="rails icon"/>
            </Parallax>
          </div>

          <div className="project-icons-3">
            <Parallax speed={-5}>
              <img src={RubyIcon} alt="ruby icon"/>
            </Parallax>
          </div>
        </div>
        <div className="project-description">
          <p>
            CURA is your digital content manager. With a daily timeline, add
            links with rich data, upload photos, and add notes. Manage each day
            with CURA and never forget a memory. With API integrations fro the
            NYT you wont miss any of the latest top stories.
          </p>
        </div>
      </div>
    </div>
  );
}
