import React from "react";
import "./OurMision.css";

function OurMision() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="_our-mission" className="mission-section">
      <div className="mission-container">
        {/* Logo */}
        <img
          src={`${basePath}Logo_BW.png`}
          alt="GeoFlow Logo"
          className="mission-logo"
        />

        {/* Encabezado */}
        <div className="mission-header">
          <img
            src={`${basePath}GeoFlow_Name.png`}
            alt="GeoFlow Technologies"
            className="company-name"
          />

          <div className="mission-line"></div>

          <h2 className="mission-title">
            Nuestra <span>misión.</span>
          </h2>
        </div>

        {/* Texto */}
        <p className="mission-text">
          En GeoFlow buscamos contribuir a un mundo más sostenible y liderar la
          transición energética global mediante el aprovechamiento responsable
          de la energía del subsuelo. A través del modelado numérico, la
          simulación y el análisis de datos, generamos conocimiento y soluciones
          que permiten desarrollar recursos energéticos de manera segura,
          eficiente y responsable.
        </p>

        {/* Firma */}
        <img
          src={`${basePath}Firma.png`}
          alt="Firma"
          className="mission-signature"
        />

        {/* Nombre */}
        <div className="mission-author">
          <p>M.Eng. Luis Armando García Navarrete</p>
          <span>Director general</span>
        </div>
      </div>
    </section>
  );
}

export default OurMision;
