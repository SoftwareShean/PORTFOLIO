import React from "react";
import "./styles/Pass.scss";
import { Parallax } from "react-scroll-parallax";
import ReactIcon from "../../assets/react.png";
import FirebaseIcon from "../../assets/FirebaseIcon";
import ShopifyIcon from "../../assets/shopify_icon.png";
import DraftJsLogo from "../../assets/DraftJsLogo";
import SassIcon from "../../assets/Sass.jsx";
import PTSIcon from "../../assets/passthespatula.png";
import styles from "../../App.module.scss";

export default function Pass() {
  return (
      <div className="pass">
        <div className="heading">
          <div className="project-title">
            <a href="https://www.passthespatula.com" target="_blank">
              <h1>www.passthespatula.com</h1>
            </a>
            <div className="app-icon"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="project-icons">
            <div className="project-icons-1">
              <Parallax speed={-5}>
                <img src={ReactIcon} />
              </Parallax>
            </div>
            <div className="project-icons-2">
              <Parallax speed={-5}>
                <FirebaseIcon />
              </Parallax>
            </div>
            <div className="project-icons-3">
              <Parallax speed={-5}>
                <img src={ShopifyIcon} />
              </Parallax>
            </div>
            <div className="project-icons-4">
              <Parallax speed={-5}>
                <DraftJsLogo />
              </Parallax>
            </div>
            <div className="project-icons-5">
              <Parallax speed={-5}>
                <SassIcon />
              </Parallax>
            </div>
          </div>

          <div className="project-description fadein">
            <p>
              Pass The Spatula is a youth led culinary program from the Food
              Education Fund based out of New York City. I created a new website
              for the launch of their second magazine issue.
              <br />
              <br /> The platform is built with the React library, hosted and
              deployed on Firebase, with a custom backend blog component built
              using DraftJS from Facebook. Shopify's SDK is also integrated,
              which facilitated sales of the new issue.
            </p>
          </div>
        </div>
      </div>
  );
}
