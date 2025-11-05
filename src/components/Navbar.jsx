import { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));

  // Actualiza el username si cambia localStorage (registro o login)
  useEffect(() => {
    const handleStorageChange = () =>
      setUsername(localStorage.getItem("username"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setUsername(null);
    navigate("/Iniciar_sesion");
  };

  const logged = !!username;

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid custom-container">
        <div
          className="collapse navbar-collapse custom-navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link icono-navbar"
                aria-current="page"
              >
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
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
            <li className="nav-item">
              <a className="nav-link" href="#Sectores">
                Sectores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Tecnologias">
                Tecnologias
              </a>
            </li>

            {/* Icono Perfil + Dropdown */}
            <li className="nav-item dropdown ms-3 d-flex align-items-center">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </span>

              {logged && (
                <span className="nombre-usuario ms-2">{username}</span>
              )}

              <ul className="dropdown-menu dropdown-menu-end">
                {!logged && (
                  <li>
                    <Link className="dropdown-item" to="/Iniciar_sesion">
                      Iniciar sesión
                    </Link>
                  </li>
                )}
                {logged && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/Perfil">
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <span
                        className="dropdown-item"
                        onClick={handleLogout}
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
