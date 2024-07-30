import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h2>About Me</h2>
    <p>I have proficient in HTML ,CSS and Javascript also adept with react Library</p>
    <img src={image} alt="I made this"/>
  </div>);
}

export default About;
