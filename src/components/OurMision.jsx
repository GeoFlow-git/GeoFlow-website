import React from "react";
import "./OurMision.css";

function OurMision() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="_our-mission" className="mission-section">
      <div className="container">
        <div className="row align-items-center">
          {/* ================================================= */}
          {/* COLUMNA IZQUIERDA */}
          {/* ================================================= */}

          <div className="col-lg-6">
            <h2 className="mission-heading">
              Nuestra
              <span> misión.</span>
            </h2>

            <div className="mission-divider"></div>

            <p className="mission-description">
              En GeoFlow Technologies buscamos mejorar el futuro a través de el
              modelado y la simulación de sistemas geoenergéticos. Nuestro
              objetico es ser una empresa lider en el sector y contribuir al
              avance científico para un mundo más sostenible.
            </p>
          </div>

          {/* ================================================= */}
          {/* COLUMNA DERECHA */}
          {/* ================================================= */}

          <div className="col-lg-6 text-center">
            <img
              src={`${basePath}Logo_BW.png`}
              alt="GeoFlow"
              className="mission-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMision;
