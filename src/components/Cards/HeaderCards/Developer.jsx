import React, { useState } from "react";
import Cura from "../ProjectCards/Cura";
import PassTheSpatula from "../V2/PassTheSpatula";
import CultCatalogue from "../ProjectCards/CultCatalogue";
import Covidata from "../ProjectCards/Covidata";
import Mission from "../ProjectCards/Mission";
import "./Developer.css";
import { FaTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Developer() {
  return (
    <div className="developerCard">
      <div className="cardHeader dev-appear">
        <Link to="/">
          {/* <h1>Developer</h1> */}
        </Link>
      </div>
      <div class="slides fadein">
        <PassTheSpatula />
        <CultCatalogue />
        <Cura />
        <Covidata />
        <Mission />
      </div>
      {/* <div className="dev-card-apps">
      </div> */}
    </div>
  );
}
