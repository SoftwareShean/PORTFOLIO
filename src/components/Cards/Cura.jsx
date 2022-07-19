import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/Cura.scss";
import ReactIcon from "../../assets/react.png";
import RailsIcon from "../../assets/rails.png";
import RubyIcon from "../../assets/ruby.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { useInView } from "react-intersection-observer";
import styles from "../../App.module.scss";
import transitions from "./Styles/pts.module.scss";
import { Parallax } from "react-scroll-parallax";

export default function Cura() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: iconRef, inView: iconVisible } = useInView();

  return (
    <div className="new-card slideup cura">
      <div className="heading">
        <div className="project-title" ref={headerRef}>
          <a href="https://cura-app.netlify.app/">
              <h1>CURA</h1>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <div className="project-icons-1" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={ReactIcon} />
            </Parallax>
          </div>

          <div className="project-icons-2" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={RailsIcon} />
            </Parallax>
          </div>

          <div className="project-icons-3" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={RubyIcon} />
            </Parallax>
          </div>
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
