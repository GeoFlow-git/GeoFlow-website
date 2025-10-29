import React from 'react';
import './Slider.css';

function Slider() {
  return (

    /* Contenedor del slider para centrarlo y limitar su ancho */
    <div className="slider-wrapper">


          
          <div id="geoSlider" className="carousel slide mb-5" data-bs-ride="carousel">



          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="geothermal_2.jpg" className="d-block w-100" alt="Energía Geotérmica"  />
              <div className="carousel-caption d-none d-md-block">
                <h5>Energía Geotérmica</h5>
                <p>Explora cómo la energía del subsuelo puede alimentar ciudades enteras.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="oil_2.jpg" className="d-block w-100" alt="Oil and Gas"  />
              <div className="carousel-caption d-none d-md-block">
                <h5>Oil and Gas</h5>
                <p>Avances en tecnologías de extracción de petróleo y gas.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="aquifer_2.png" className="d-block w-100" alt="Manejo de acuíferos"  />
              <div className="carousel-caption d-none d-md-block">
                <h5>Manejo de acuíferos</h5>
                <p>Gestión sostenible de recursos hídricos subterráneos.</p>
              </div>
            </div>
          </div>






          {/* Controles */}
          <button className="carousel-control-prev" type="button" data-bs-target="#geoSlider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#geoSlider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

  );
}

export default Slider;