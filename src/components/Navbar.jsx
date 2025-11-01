// Navbar.jsx
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  // Revisar si hay usuario logueado y obtener su nombre
  const logged = isLoggedIn();
  const username = logged ? localStorage.getItem("username") : null;

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/Iniciar_sesion");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid custom-container">
        <div
          className="collapse navbar-collapse custom-navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-nav-list">
            {/* ICONO HOME */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link icono-navbar"
                aria-current="page"
              >
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>

            {/* ENLACES GENERALES */}
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>

            {/* ICONO PERFIL + DROPDOWN */}
            <li className="nav-item dropdown ms-3 d-flex align-items-center">
              {/* ICONO DE PERFIL (dispara dropdown) */}
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </span>

              {/* NOMBRE DE USUARIO */}
              {isLoggedIn() && (
                <span className="nombre-usuario ms-2">
                  {localStorage.getItem("username")}
                </span>
              )}

              {/* DROPDOWN */}
              <ul className="dropdown-menu dropdown-menu-end">
                {!isLoggedIn() && (
                  <li>
                    <Link className="dropdown-item" to="/Iniciar_sesion">
                      Iniciar sesión
                    </Link>
                  </li>
                )}
                {isLoggedIn() && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/perfil">
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("username");
                          window.location.reload();
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Cerrar sesión
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
