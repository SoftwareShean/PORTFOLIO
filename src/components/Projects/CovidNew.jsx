import React from "react";
import './styles/Covid.scss'
import "./styles/Card.scss";
import CSS3 from "../../assets/css3.png";
import JS from "../../assets/javascript.png";
import HTML5 from "../../assets/html5.png";
import { Parallax } from "react-scroll-parallax";

export default function CovidNew() {
  return (
    <div className="covid-new card">
      <div className="heading">
        <div className="project-title">
          <a href="https://cura-app.netlify.app/">
            <span>
              <h1>COVIData</h1>
            </span>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <div className="project-icons-1">
            <Parallax speed={-5}>
              <img src={CSS3} alt="CSS icon"/>
            </Parallax>
          </div>

          <div className="project-icons-2">
            <Parallax speed={-5}>
              <img src={JS} alt="JS icon"/>
            </Parallax>
          </div>

          <div className="project-icons-3">
            <Parallax speed={-5}>
              <img src={HTML5} alt="JS icon"/>
            </Parallax>
          </div>
        </div>
        <div className="project-description">
          <p>
            CoviData was built at the beginning of the Covid-19 global pandemic
            as a means of tracking the latest news as well as infection rates
            and death tolls with data provided from The Covid Tracking Project.
            Disperate APIs were interpreted to provide unique data
            visualizations by State.
          </p>
        </div>
      </div>
    </div>
  );
}
