import React, { Component } from "react";
import "../Landing/Landing.css";
import MyPortrait from "../../assets/me.jpeg";
// import { Link } from "react-router-dom";
import Card from "../Contact/Card";
import FadeIn from 'react-fade-in';
import Carrat from '../../assets/carrat.jsx'


export default class Landing extends Component {
  render() {
    return (
      <>
        <header>
          <Card />
        </header>
        <FadeIn>
        <viewport className="landing">
          <section className="greeting">
            <img src={MyPortrait} alt="pic" className="fade-in"/>
            <div className="about fade-in">
              <span><h1>
                Hello, World. <br /> My name is Shean && <br />
                I'm a software engineer in Brooklyn.
              </h1>
                <br />
                <br />
                  <Carrat />
              </span>
            </div>
          </section>
          <div className="project1">
            <h1>CURA</h1>
          </div>
          <div className="project2">
          <h1>COVIDATA</h1>
          </div>
          </viewport>
        </FadeIn>
      </>
    );
  }
}
