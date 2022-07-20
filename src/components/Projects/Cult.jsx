import React from "react";
import "./styles/Cult.scss";
import ReactIcon from "../../assets/react.png";
import SassIcon from "../../assets/Sass.jsx";
import NodeIcon from "../../assets/nodejs.png";
import MongoIcon from "../../assets/mongodb.png";
import { Parallax } from "react-scroll-parallax";


export default function Cult() {
  return (
    <div className="cult">
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
          <div className="project-icons-1">
            <Parallax speed={-5}>
              <img src={ReactIcon} />
            </Parallax>
          </div>
          <div className="project-icons-2">
            <Parallax speed={-5}>
              <SassIcon />
            </Parallax>
          </div>

          <div className="project-icons-3">
            <Parallax speed={-5}>
              <img src={NodeIcon} />
            </Parallax>
          </div>

          <div className="project-icons-4">
            <Parallax speed={-5}>
              <img src={MongoIcon} />
            </Parallax>
          </div>
        </div>
        <div className="project-description">
          <p>
            Based on a passion project from 2014, CultCatalogue is an API for
            biographies and works of contemporary global artists.
            <br />
            <br />
            Inspired by the book This Will Have Been: Art, Love, and Politics in
            the 1980's, CultCatalogue aims to provide a free and open API for
            art lovers and aficionados alike. Click the title above to view the
            projects documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
