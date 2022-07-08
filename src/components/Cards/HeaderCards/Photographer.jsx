import React from "react";
import "./Photographer.css";
import { Link } from "react-router-dom";
import CAMI from "../../../assets/CAMI1.jpeg";
import DUEL from "../../../assets/DUEL1.jpeg";
import LIC from "../../../assets/LIC1.jpeg";

export default function Photographer() {
  return (
    <div className="photographerCard">
      <div className="cardHeader photo-appear">
        <Link to="/">
          <h1>PHOTOGRAPHER</h1>
        </Link>
      </div>
      <div className="cardDescription fadein">
        <p>
          I was given my first Minolta X700 when I was 12 years old. In 2012, I
          moved to New York and was fortunate to work with Mark Seliger and Jill
          Greenberg. I've maintained and grown my practice to include not only
          35mm but also 120, medium, and large formats; developing and printing
          my own images in my darkroom. My work is most often portraiture but
          also my own self exploration as a queer person raised in a catholic
          church in the desert.
        </p>
        <div className="imageStack">
          <img src={CAMI} />
          <img src={LIC} />
          <img src={DUEL} />
        </div>
      </div>
    </div>
  );
}
