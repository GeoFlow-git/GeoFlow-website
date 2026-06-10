import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <footer className="footer-geoflow">
      <div className="container">
        <div className="row align-items-center">
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <img
              src={`${basePath}Logo_Color.png`}
              alt="GeoFlow Technologies"
              className="footer-logo"
            />
          </div>

          {/* ================================================= */}
          {/* INFORMACIÓN */}
          {/* ================================================= */}

          <div className="col-lg-8">
            <div className="row justify-content-center justify-content-lg-end">
              {/* Columna izquierda */}
              <div className="col-auto d-flex flex-column align-items-start gap-3">
                <a
                  href="https://www.linkedin.com/in/luis-armando-garcia-navarrete-bb393a209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icono-footer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon me-2" />
                  LinkedIn
                </a>

                <div className="icono-footer">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="fa-icon me-2"
                  />
                  Benito Juárez, CDMX, México
                </div>
              </div>

              {/* Columna derecha */}
              <div className="col-auto d-flex flex-column align-items-start gap-3">
                <a
                  href="mailto:ar.garcia.navarrete@gmail.com"
                  className="icono-footer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon me-2" />
                  Contacto
                </a>

                <a
                  href="https://github.com/GeoFlow-git/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icono-footer"
                >
                  <FontAwesomeIcon icon={faGithub} className="fa-icon me-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* COPYRIGHT */}
        {/* ================================================= */}

        <div className="footer-bottom text-center">
          <p>
            &copy; {new Date().getFullYear()} GeoFlow Technologies. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
