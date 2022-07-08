import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/COVID.scss";
import CSS3 from "../../../assets/css3.png"
import JS from "../../../assets/javascript.png"
import HTML5 from "../../../assets/html5.png"
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function CURA() {
  return (
    <div className="new-card slideup covid">
      <div className="heading">
        <div className="project-title">
          <a href="https://cura-app.netlify.app/">
            <h1>COVIData</h1>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <MouseParallaxContainer>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-1">
                <img src={CSS3} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-2">
                <img src={JS} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.09} factorY={0.09}>
              <div className="project-icons-3">
                <img src={HTML5} />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="project-description">
        CoviData was built at the beginning of the Covid-19 global pandemic as a means of tracking the latest news as well as infection rates and death tolls with data provided from The Covid Tracking Project. Disperate APIs were interpreted to provide unique data visualizations by State.
        </div>
      </div>
    </div>
  );
}
