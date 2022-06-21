import "./Footer.css";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Copyright &copy; Poonkodi
          </a>
          <div>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/">
                  <FaLinkedinIn />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
