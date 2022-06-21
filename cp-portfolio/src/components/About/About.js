import "./About.css";
import me from "../../assets/me.jpeg";

function About() {
  return (
      <section id="about">
        <div class="circle">
          <img src={me} alt="Poonkodi"></img>
          <div class="content">
            <h1>ABOUT ME</h1>
            <p>
              Enthustatic Frontend developer, re-kick started my IT career recently. Interested in Animations. Currently getting training from Integrify, Helsinki.
            </p>
          </div>
        </div>
      </section>
  );
}

export default About;
