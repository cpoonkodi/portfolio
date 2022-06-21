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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, asperiores fugit alias quas vero provident explicabo
              nulla sunt suscipit odio blanditiis! Saepe, assumenda sunt vitae
              voluptas, voluptatibus alias at, beatae quis corrupti rerum
              reprehenderit doloremque placeat dicta quos cupiditate repellendus
              quaerat laboriosam a eaque esse nam in nostrum. Quam, harum?
            </p>
          </div>
        </div>
      </section>
  );
}

export default About;
