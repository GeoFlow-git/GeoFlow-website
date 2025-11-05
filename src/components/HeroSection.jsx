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
import "./HeroSection.css"; // Estilos personalizados

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
      { threshold: 0.3 } // se activa cuando el 30% es visible
    );

    if (img) observer.observe(img);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto a la izquierda */}
          <div className="texto col-md-5 text-center text-md-start ms-auto">
            <h1 className="display-5 fw-bold">
              Simulación numérica para un futuro sostenible.
            </h1>
            <p className="lead">
              Ayudamos a empresas del sector energético y ambiental a entender
              el subsuelo con simulaciones precisas y visualizaciones claras.
              Desde petróleo y gas, hasta acuíferos y geotermia, convertimos
              datos en decisiones.
            </p>
            <a href="#servicios" className="btn btn-primary btn-lg mt-3">
              Explora nuestros servicios
            </a>
          </div>

          {/* Imagen a la derecha */}
          <div className="col-md-7 text-center ms-auto">
            <img
              ref={imageRef}
              src={`${basePath}${"Hero_image.png"}`}
              // alt="Energía geotérmica"
              className="img-fluid rounded hero-img"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
