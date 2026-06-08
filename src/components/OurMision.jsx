import React from "react";
import "./OurMision.css";

function OurMision() {
  return (
    <section id="_our-mission" className="text-center">
      {/* SVG decorativo superior */}
      <svg className="d-none d-lg-block svg-top" viewBox="0 0 1000 80">
        <rect width="100%" height="100%" fill="#ffffffff" />
        <path
          d="M 0 0 L 0 150 L 1000 150 L 1000 0 L 500 80 L 0 0Z"
          //   d="M 0 80 L 500 0 L 1000 80 L 1000 150 L 0 150 Z"
          fill="#ff7300"
        ></path>
      </svg>

      <div className="container-fluid m-0 p-0">
        <div className=" our-mission row justify-content-center">
          <div className=" our-mission_2 col-12 mt-2 mt-md-5">
            <h3 className="our-mission_3 gradient-blue d-inline">Misión</h3>
            <p className=" our-mission_4 w-75 mx-auto mt-3">
              En GeoFlow tenemos la misión de comprender y representar con
              precisión el comportamiento del subsuelo mediante modelos
              numéricos avanzados, con el propósito de apoyar al sector
              energético y ambiental en la toma de decisiones informadas,
              sostenibles y estratégicas. Nuestro compromiso es transformar
              datos complejos en conocimiento útil y accionable, contribuyendo a
              un futuro energético más equilibrado, transparente y sustentable.
            </p>
          </div>
        </div>
      </div>

      {/* SVG decorativo inferior */}
      <svg className="d-none d-lg-block" viewBox="0 0 1000 80">
        <rect width="100%" height="100%" fill="#ff7300" />

        <path
          d="M 0 0 L 0 150 L 1000 150 L 1000 0 L 500 80 L 0 0Z"
          //   d="M 0 80 L 500 0 L 1000 80 L 1000 150 L 0 150 Z"
          fill="#ffffffff"
          stroke="#currentColor"
        ></path>
      </svg>
    </section>
  );
}

export default OurMision;
