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
                    In this weather report users can get the weather information for a given city. The weather information is shown beautifully in images. Weather information is received using accuweather API. 
                  </p>
                  <a class="btn btn-primary px-5" href="https://cpoonkodi-weatherapi.netlify.app">View</a>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h3>Countries</h3>
                  <p>
                    <span class="text-muted">React</span>
                  </p>
                </div>
                <div class="card-body">
                  <p>
                    It displays list of countries in the world. We can list the countries by continent wise. We can search the country by country name.
    We can see the  capital city, population, flag, area for a given country. Also This site is made to resemble an E-commerce website. 
                  </p>
                  <button class="btn btn-primary px-5">View</button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h3>Online Library Management System</h3>
                  <p>
                    <span class="text-muted">Reactjs, RestAPI, Expressjs, MongoDB</span>
                  </p>
                </div>
                <div class="card-body">
                  <p>
                    This displays list of all books in the libary. The user can search the book(s) by title, author, status and categories. The user can lend the book from library and return the book to library.
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
