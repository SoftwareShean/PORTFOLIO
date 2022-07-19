import React from "react";
import "./Styles/Newcard.scss";
import "./Styles/Covid.scss";
import CSS3 from "../../assets/css3.png";
import JS from "../../assets/javascript.png";
import HTML5 from "../../assets/html5.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { useInView } from "react-intersection-observer";
import styles from "../../App.module.scss";
import { Parallax } from "react-scroll-parallax";

export default function Covid() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: iconRef, inView: iconVisible } = useInView();

  return (
    <div className="new-card slideup covid">
      <div className="heading">
        <div className="project-title" ref={headerRef}>
          <a href="https://cura-app.netlify.app/">
            <span
              className={`${styles.cardHeader} ${
                headerVisible ? styles.animateCardHeader : ""
              }`}
            >
              <h1>COVIData</h1>
            </span>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <div className="project-icons-1" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={CSS3} />
            </Parallax>
          </div>

          <div className="project-icons-2" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={JS} />
            </Parallax>
          </div>

          <div className="project-icons-3" ref={iconRef}>
            <Parallax speed={-5}>
              <img src={HTML5} />
            </Parallax>
          </div>
        </div>
        <div className="project-description">
          CoviData was built at the beginning of the Covid-19 global pandemic as
          a means of tracking the latest news as well as infection rates and
          death tolls with data provided from The Covid Tracking Project.
          Disperate APIs were interpreted to provide unique data visualizations
          by State.
        </div>
      </div>
    </div>
  );
}
