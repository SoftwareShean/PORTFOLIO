import React, { useState } from "react";
import "../Landing/Landing.css";
import "../Cards/card.css";
import "../Animations.css"
import { Link } from "react-router-dom";

export default function Landing() {
  const [overlay, setOverlay] = useState(null);

  const setOverlayComponent = () => {
    setOverlay("true");
  };

  return (
    <div className="landing slideup">
      <div className="points">
        <Link to="/developer">
          <div className="dev">
            <h1>DEVELOPER</h1>
          </div>
        </Link>
        {/* <div className="amper">
        <h1>&</h1>
        </div> */}
        <Link to="/photographer">
          <div className="photo">
            <h1>& PHOTOGRAPHER</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
