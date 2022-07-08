import React from "react";
import "./PassTheSpatula.css";
import PTSIcon from "../../../assets/passthespatula.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconContext } from "react-icons";
import FirebaseIcon from "../../../assets/FirebaseIcon";
import ReactIcon from "../../../assets/react.png";
import DraftJsLogo from "../../../assets/DraftJsLogo";
import ShopifyIcon from "../../../assets/shopify_icon.png";
import SassIcon from "../../../assets/Sass.jsx";

function PassTheSpatula(props) {
  return (
    <div className="pass-the-spatula card fadein">
      <div className="main">
        <div className="overview">
          <h1>PASS THE SPATULA</h1>
          <p>
            Pass The Spatula is a youth led culinary program from the
              Food Education Fund
            based out of New York City. I created a new website for the launch
            of their second magazine issue. The platform is built on the React
            library, hosted and deployed on Firebase, with a custom backend blog
            component built using DraftJS from Facebook. Shopify's SDK is also
            integrated, which facilitated sales of the new issue.
          </p>
        </div>
        <div className="project-buttons">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "35px",
                color: "#000000",
                paddingLeft: "8px",
                paddingTop: "5px",
                paddingRight: "8px",
              },
            }}
          >
            <button>
              <a
                href="https://passthespatula.com/"
                target="_blank0"
                title="View the site"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className="card-title projectIcons">
        <img src={PTSIcon} alt="" className="radius"/>
        <img src={ReactIcon} />
        <FirebaseIcon />
        <DraftJsLogo />
        <img src={ShopifyIcon} />
        <SassIcon />
      </div>
    </div>
  );
}

export default PassTheSpatula;