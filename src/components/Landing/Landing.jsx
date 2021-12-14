import React, { Component } from "react";
import "../Landing/Landing.css";
import '../Cards/card.css';
import Contact from "../Cards/Contact.jsx";
import PassTheSpatula from "../Cards/ProjectCards/PassTheSpatula.jsx";
import CultCatalogue from '../Cards/ProjectCards/CultCatalogue.jsx'
import Cura from '../Cards/ProjectCards/Cura.jsx';
import Covidata from "../Cards/ProjectCards/Covidata";
import Mission from "../Cards/ProjectCards/Mission";


export default class Landing extends Component {

  render() {
    return (
      <div className="stack">
        <Contact />
        <PassTheSpatula />
        <CultCatalogue />
        <Cura />
        <Covidata />
        <Mission />
      </div>
    );
  }
}
