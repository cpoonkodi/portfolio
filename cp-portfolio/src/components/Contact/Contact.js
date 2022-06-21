import "./Contact.css";
import contact from "../../assets/contact.jpeg";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div class="container mb-5">
          <div class="row">
            <div class="col-lg-7 col-12">
              <img src={contact} alt="Keyboard typing in laptop" />
            </div>
            <div class="col-lg-5 col-12">
              <form>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input class="form-control" type="text" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input class="form-control" type="email" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Enter your message</label>
                  <textarea class="form-control" rows="6"></textarea>
                </div>
                <button class="btn btn-primary">Send a message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
