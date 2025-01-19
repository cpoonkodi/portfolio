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
              <img src={html} alt="HTML logo" />
            </div>
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <img src={css} alt="CSS logo" />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <img src={js} alt="Javascript logo" />
            </div>
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
              <img src={react} alt="React logo" />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row p-lg-3 p-0 mb-lg-3 mb-0">
            <div class="col-lg-6 col-12 pt-lg-0 pt-3">
            <img src={cpp} alt="C++ logo" />
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
