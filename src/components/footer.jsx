import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-geoflow py-4 mt-5">
      <div className="container text-center">
        




        <div className="row justify-content-center">


          {/* Columna izquierda */}
          <div className="col-auto  d-flex flex-column align-items-start gap-2">
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
              <FontAwesomeIcon icon={faLocationDot} className="fa-icon me-2" />
              Benito Juárez, CDMX, México
            </div>
          </div>




          {/* Columna derecha */}
          <div className="col-auto  d-flex flex-column align-items-end gap-2">
            <a href="mailto:ar.garcia.navarrete@gmail.com" className="icono-footer">
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




        {/* Derechos reservados */}
        <p className="mb-4">&copy; {new Date().getFullYear()} GeoFlow. Todos los derechos reservados.</p>
      
      </div>
    </footer>
  );
}

export default Footer;

