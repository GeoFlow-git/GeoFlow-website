import React, { useState } from "react";
import "./Publicaciones.css";

function Publicaciones() {
  const basePath = import.meta.env.BASE_URL;

  // Datos de ejemplo (puedes ampliar o cargar dinámicamente desde un JSON o API)
  const publicaciones = [
    {
      id: 1,
      titulo:
        "Benchmarking TOUGH2 and DARTS for the simulation of transport in porous-fractured media",
      anio: 2025,
      descripcion:
        "Comparación entre los códigos TOUGH2 y DARTS para simulación de transporte en medios porosos fracturados. Aplicación en sistemas geotérmicos mejorados (EGS).",
      portada: "guia_darts.png",
      archivo: "Benchmarking_TOUGH2_DARTS.pdf",
    },
    // {
    //   id: 2,
    //   titulo:
    //     "Numerical Modeling of Geothermal Reservoirs under Complex Fracture Networks",
    //   anio: 2024,
    //   descripcion:
    //     "Modelado numérico de reservorios geotérmicos con redes de fracturas complejas usando aproximaciones de simulación acoplada flujo-calor.",
    //   portada: "pub_geothermal.png",
    //   archivo: "Geothermal_Modeling.pdf",
    // },
  ];

  // Agrupar publicaciones por año
  const publicacionesPorAnio = publicaciones.reduce((acc, pub) => {
    (acc[pub.anio] = acc[pub.anio] || []).push(pub);
    return acc;
  }, {});

  // Años ordenados de mayor a menor
  const anios = Object.keys(publicacionesPorAnio).sort((a, b) => b - a);

  return (
    <section className="publicaciones-section py-5" id="publicaciones">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          Publicaciones y Documentación
        </h2>

        {anios.map((anio) => (
          <div key={anio} className="anio-section mb-5">
            <h3 className="anio-titulo mb-4">{anio}</h3>

            <div className="row g-4">
              {publicacionesPorAnio[anio].map((pub) => (
                <div className="col-md-4" key={pub.id}>
                  <div className="card h-100 shadow-sm publication-card">
                    <img
                      src={`${basePath}${pub.portada}`}
                      alt={pub.titulo}
                      className="card-img-top portada-img"
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{pub.titulo}</h5>
                      <p className="card-text flex-grow-1">{pub.descripcion}</p>
                      <a
                        href={`${basePath}${pub.archivo}`}
                        className="btn btn-primary mt-3"
                        download
                      >
                        📥 Descargar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publicaciones;
