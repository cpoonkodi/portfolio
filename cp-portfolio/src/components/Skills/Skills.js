import "./Skills.css";
import { ProgressBar } from "react-bootstrap";

import cpp from "../../assets/c++.jpeg";
import html from "../../assets/html.png";
import css from "../../assets/css.jpeg";
import js from "../../assets/js.png";
import react from "../../assets/react.jpeg";

function Skills() {
  return (
    <div>
      <section id="skills">
        <h1 class="text-center">My Skills</h1>
        <div class="container">
          <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <li> HTML </li>
              <label> -- HTML</label>
              //<ProgressBar now={80} label={`${80}%`} />
            </div>
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <label>CSS</label>
              //<ProgressBar now={70} label={`${70}%`} />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <label>Javascript</label>
              //<ProgressBar now={60} label={`${60}%`} />
            </div>
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <label>React</label>
              //<ProgressBar now={50} label={`${50}%`} />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <label>Sass</label>
              <ProgressBar now={60} label={`${60}%`} />
            </div>
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <label>Animation</label>
              <ProgressBar now={60} label={`${60}%`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
