import React from "react";
import "./SobreMi.css";

function SobreMi() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* ========================================= */}
          {/* COLUMNA IZQUIERDA */}
          {/* ========================================= */}

          <div className="col-lg-2 about-content">
            <h2 className="about-title">
              ¿Quiénes
              <br />
              somos?
            </h2>

            <div className="about-divider"></div>

            <p className="about-text">
              Somos un equipo comprometido y apasionado por la simulación
              numérica y la energía.
            </p>

            <a href="/quienes-somos" className="about-link">
              ¡Conócenos!
              <span>→</span>
            </a>
          </div>

          {/* ========================================= */}
          {/* COLUMNA DERECHA */}
          {/* ========================================= */}

          <div className="col-lg-8 about-image-container">
            <img
              src={`${basePath}about_us.png`}
              alt="Equipo GeoFlow"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
