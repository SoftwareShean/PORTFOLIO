import React, { useState } from "react";
import Cura from "../ProjectCards/Cura";
import PassTheSpatula from "../ProjectCards/PassTheSpatula";
import CultCatalogue from "../ProjectCards/CultCatalogue";
import Covidata from "../ProjectCards/Covidata";
import Mission from "../ProjectCards/Mission";
import "./Developer.css";
import { FaTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Developer() {
  const [showCard, setShowCard] = useState("");

  const setPopover = (e) => {
    setShowCard(e);
  };

  if (showCard === "mission")
    return (
      <div className="buttonOverlay">
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
          <button
            onClick={() => {
              setShowCard("");
            }}
          >
            <FaTimesCircle />
          </button>
        </IconContext.Provider>
        <Mission />
      </div>
    );
  if (showCard === "pts")
    return (
      <div className="buttonOverlay">
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
          <button
            onClick={() => {
              setShowCard("");
            }}
          >
            <FaTimesCircle />
          </button>
        </IconContext.Provider>
        <PassTheSpatula />
      </div>
    );
  if (showCard === "cc")
    return (
      <div className="buttonOverlay">
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
          <button
            onClick={() => {
              setShowCard("");
            }}
          >
            <FaTimesCircle />
          </button>
        </IconContext.Provider>
        <CultCatalogue />
      </div>
    );
  if (showCard === "covid")
    return (
      <div className="buttonOverlay">
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
          <button
            onClick={() => {
              setShowCard("");
            }}
          >
            <FaTimesCircle />
          </button>
        </IconContext.Provider>
        <Covidata />
      </div>
    );
  if (showCard === "cura")
    return (
      <div className="buttonOverlay">
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
          <button
            onClick={() => {
              setShowCard("");
            }}
          >
            <FaTimesCircle />
          </button>
        </IconContext.Provider>
        <Cura />
      </div>
    );
  return (
    <div className="developerCard fadein">
      <div className="cardHeader">
        <Link to="/">
          <h1>DEVELOPER</h1>
        </Link>
      </div>
      <div className="cardDescription">
        <p>
          Since 2020 I've worked as a web developer and software engineer. Most
          recently I was with Verizon as a part of their digital sales team. My
          specialty is MERN stack applications.<br /> I am always taking on clients
          independently, feel free to use the links below to get in touch. A few
          samples of my work are available in the app previews below.
        </p>
      </div>
      <div className="apps">
        <div className="appIcon pts" onClick={() => setPopover("pts")}></div>
        <div className="appIcon cc" onClick={() => setPopover("cc")}></div>
        <div
          className="appIcon curaApp"
          onClick={() => setPopover("cura")}
        ></div>
        <div
          className="appIcon covid"
          onClick={() => setPopover("covid")}
        ></div>
        <div
          className="appIcon mission"
          onClick={() => setPopover("mission")}
        ></div>
      </div>
    </div>
  );
}
