import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/CC.scss";
import ReactIcon from "../../../assets/react.png";
import SassIcon from "../../../assets/Sass.jsx";
import NodeIcon from "../../../assets/nodejs.png";
import MongoIcon from "../../../assets/mongodb.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function CC() {
  return (
    <div className="new-card slideup cc">
      <div className="heading">
        <div className="project-title">
          <a href="https://cultcatalogue.netlify.app/">
            <h1>cultcatalogue</h1>
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
                <SassIcon />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-3">
                <img src={NodeIcon} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-4">
                <img src={MongoIcon} />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="project-description">
          Based on a passion project from 2014, CultCatalogue is an API for
          biographies and works of contemporary global artists. Click the icons
          below to view the deployed project and its code.
        </div>
      </div>
    </div>
  );
}
