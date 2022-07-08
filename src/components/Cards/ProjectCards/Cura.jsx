import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/Cura.scss";
import ReactIcon from "../../../assets/react.png";
import RailsIcon from "../../../assets/rails.png";
import RubyIcon from "../../../assets/ruby.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Cura() {
  return (
    <div className="new-card slideup cura">
      <div className="heading">
        <div className="project-title">
          <a href="https://cura-app.netlify.app/">
            <h1>CURA</h1>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <MouseParallaxContainer>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-1">
                <img src={ReactIcon} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-2">
                <img src={RailsIcon} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-3">
                <img src={RubyIcon} />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="project-description">
          CURA is your digital content manager. With a daily timeline, add links
          with rich data, upload photos, and add notes. Manage each day with
          CURA and never forget a memory. With API integrations fro the NYT you
          wont miss any of the latest top stories.
        </div>
      </div>
    </div>
  );
}
