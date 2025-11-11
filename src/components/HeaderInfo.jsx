// src/components/HeaderInfo.jsx
import "./HeaderInfo.css";

function HeaderInfo() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <header className="header-info">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Logos alineados a la izquierda */}
        <div className="d-flex align-items-center logos">
          <img
            src={`${basePath}${"Logo_letras.png"}`}
            alt="GeoFlow Logo"
            width="200"
            height="75"
            className="me-3"
          />
          <img
            src={`${basePath}${"logo_hero.png"}`}
            alt="GeoFlow Icon"
            width="75"
            height="75"
            className="me-3"
          />
        </div>

        {/* Contacto alineado a la derecha */}
        <div className="text-end contacto">
          <p className="mb-0">
            📧{" "}
            <a href="mailto:ar.garcia.navarrete@gmail.com">
              armando.garcia@geoflow.com.mx
            </a>
          </p>
          <p className="mb-0">
            📞 <a href="tel:+525541409846">+52 5541409846</a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeaderInfo;
