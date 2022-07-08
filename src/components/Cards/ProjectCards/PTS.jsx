import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/Pts.scss";
import ReactIcon from "../../../assets/react.png";
import FirebaseIcon from "../../../assets/FirebaseIcon";
import ShopifyIcon from "../../../assets/shopify_icon.png";
import DraftJsLogo from "../../../assets/DraftJsLogo";
import SassIcon from "../../../assets/Sass.jsx";
import PTSIcon from "../../../assets/passthespatula.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Pts() {
  return (
    <div className="new-card slideup pts">
      <div className="heading">
        <div className="project-title">
          <a href="www.passthespatula.com" target="_blank">
            <h1>www.passthespatula.com</h1>
          </a>
          <div className="app-icon">
          </div>
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
                <FirebaseIcon />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.09} factorY={0.09}>
              <div className="project-icons-3">
                <img src={ShopifyIcon} />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.09} factorY={0.09}>
              <div className="project-icons-4">
                <DraftJsLogo />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.09} factorY={0.09}>
              <div className="project-icons-5">
                <SassIcon />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>

        <div className="project-description">
          Pass The Spatula is a youth led culinary program from the Food
          Education Fund based out of New York City. I created a new website for
          the launch of their second magazine issue.
          <br />
          <br /> The platform is built on the React library, hosted and deployed
          on Firebase, with a custom backend blog component built using DraftJS
          from Facebook. Shopify's SDK is also integrated, which facilitated
          sales of the new issue.
        </div>
      </div>
    </div>
  );
}
