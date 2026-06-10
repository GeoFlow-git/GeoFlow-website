// import React from 'react';
// import './HeroSection.css'; // Puedes personalizar estilos aquí

// function HeroSection() {
//   return (
//     <section className="hero d-flex align-items-center justify-content-center text-center text-white">
//       <div className="container">
//         <h1 className="display-4 fw-bold">Bienvenido a GeoFlow</h1>
//         <p className="lead">Soluciones energéticas sostenibles para un futuro más limpio</p>
//         <a href="#servicios" className="btn btn-primary btn-lg mt-3">Explora nuestros servicios</a>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React, { useEffect, useRef } from "react";
import "./HeroSection.css";

function HeroSection() {
  const basePath = import.meta.env.BASE_URL;
  const imageRef = useRef(null);

  // Detecta cuando la imagen entra al viewport
  useEffect(() => {
    const img = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.classList.add("zoom-in");
          } else {
            img.classList.remove("zoom-in");
          }
        });
      },
      { threshold: 0.3 },
    );

    if (img) observer.observe(img);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="lol row align-items-center">
          {/* Texto a la izquierda */}
          <div className="lol_2 texto col-md-3 text-center text-md-start ms-auto">
            <h1 className="hero-title">
              <span className="hero-title-small">SIMULACIÓN Y MODELADO DE</span>

              <div className="hero-title-main">
                <span className="hero-title-large_1">SISTEMAS</span>

                <span className="hero-title-large_2">GEOENERGÉTICOS</span>
              </div>
            </h1>

            <div className="hero-title-divider">
              <div className="hero-line-long"></div>
              <div className="hero-line-short"></div>
            </div>

            <ul className="hero-list">
              <li>Simulación de yacimientos</li>
              <li>Estudios CFD</li>
              <li>Transferencia de calor</li>
              <li>Modelado hidrogeológico</li>
              <li>Sistemas geotérmicos</li>
            </ul>

            <a href="#servicios" className="btn btn-lg hero-button">
              Conocer más
            </a>
          </div>

          {/* Imagen a la derecha */}
          <div className="col-md-7 hero-image-wrapper">
            <img
              ref={imageRef}
              src={`${basePath}Hero_image.png`}
              alt="Energía geotérmica"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
