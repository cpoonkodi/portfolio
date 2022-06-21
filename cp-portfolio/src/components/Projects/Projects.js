import "./Projects.css";

function Projects() {
  return (
    <div>
      <section id="projects">
        <div class="container text-center">
          <h2 class="text-center">Software Projects</h2>
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h3>Weather Report</h3>
                  <p>
                    <span class="text-muted">Reactjs</span>
                  </p>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta ad, quas reiciendis aut unde ullam illum rerum
                    nostrum, reprehenderit exercitationem mollitia laborum. Quis
                    esse, laborum nostrum dolor quam praesentium accusamus?
                  </p>
                  <button class="btn btn-primary px-5">View</button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h3>Portfolio</h3>
                  <p>
                    <span class="text-muted">HTML, CSS</span>
                  </p>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta ad, quas reiciendis aut unde ullam illum rerum
                    nostrum, reprehenderit exercitationem mollitia laborum. Quis
                    esse, laborum nostrum dolor quam praesentium accusamus?
                  </p>
                  <button class="btn btn-primary px-5">View</button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h3>Replicate Rens original</h3>
                  <p>
                    <span class="text-muted">Javascript</span>
                  </p>
                </div>
                <div class="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta ad, quas reiciendis aut unde ullam illum rerum
                    nostrum, reprehenderit exercitationem mollitia laborum. Quis
                    esse, laborum nostrum dolor quam praesentium accusamus?
                  </p>
                  <button class="btn btn-primary px-5">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
