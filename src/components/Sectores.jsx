import React from "react";
import "./Sectores.css";

function Sectores() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="Sectores">
      <div className="Sectores-wrapper">
        <h2 className="Sectores-title">Sectores </h2>

        <div
          id="geoSectores"
          className="carousel slide mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={`${basePath}${"geothermal_2.jpg"}`}
                className="d-block w-100"
                alt="Energía Geotérmica"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Energía Geotérmica</h5>
                <p>
                  Explora cómo la energía del subsuelo puede alimentar ciudades
                  enteras.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={`${basePath}${"oil_2.jpg"}`}
                className="d-block w-100"
                alt="Oil and Gas"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Petróleo y gas</h5>
                <p>Avances en tecnologías de extracción de petróleo y gas.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={`${basePath}${"aquifer_2.png"}`}
                className="d-block w-100"
                alt="Manejo de acuíferos"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Manejo de acuíferos</h5>
                <p>Gestión sostenible de recursos hídricos subterráneos.</p>
              </div>
            </div>
          </div>

          {/* Controles */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#geoSectores"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#geoSectores"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sectores;
