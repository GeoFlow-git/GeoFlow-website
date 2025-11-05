// import './Tecnologias.css';

// function Tecnologias() {

//   const basePath = import.meta.env.BASE_URL;

//   return (
//     <section id="tecnologias" className="tecnologias-section my-5">
//       <h2 className="text-center mb-4">Tecnologías que utilizamos</h2>
//       <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4">
//         <img src={`${basePath}${"ANSYS_logo.png"}`}  alt="ANSYS Fluent" className="tech-logo" />
//         <img src={`${basePath}${"CMG.png"}`}  alt="CMG" className="tech-logo" />
//         <img src={`${basePath}${"MRST.png"}`}  alt="MRST" className="tech-logo" />
//         <img src={`${basePath}${"DARTS.png"}`}  alt="DARTS" className="tech-logo" />
//         {/* Agrega más logos según tus herramientas */}
//       </div>
//     </section>
//   );
// }

// export default Tecnologias;

import React from "react";
import { motion } from "framer-motion";
import "./Tecnologias.css";

export default function Tecnologias() {
  const basePath = import.meta.env.BASE_URL;

  const categorias = [
    {
      nombre: "Software de Yacimientos",
      icono: "",
      tecnologias: [
        { nombre: "", logo: "tough.png" },
        { nombre: "", logo: "DARTS.png" },
        { nombre: "", logo: "MRST.png" },
        { nombre: "", logo: "CMG.png" },
      ],
    },
    {
      nombre: "Software CFD",
      icono: "",
      tecnologias: [
        { nombre: "", logo: "open_foam.png" },
        { nombre: "", logo: "ANSYS_logo.png" },
        { nombre: "", logo: "gmsh.png" },
        { nombre: "", logo: "paraview.png" },
      ],
    },
    {
      nombre: "Lenguajes de Programación",
      icono: "",
      tecnologias: [
        { nombre: "", logo: "248484.png" },
        { nombre: "", logo: "react.png" },
        { nombre: "", logo: "java.png" },
        { nombre: "", logo: "Matlab.png" },
      ],
    },
    {
      nombre: "Herramientas Numéricas",
      icono: "",
      tecnologias: [
        { nombre: "", logo: "scikit.png" },
        { nombre: "", logo: "tensorflow.png" },
        { nombre: "", logo: "scipy.png" },
        { nombre: "", logo: "numpy.png" },
        ,
      ],
    },
  ];

  return (
    <section id="Tecnologias" className="tecnologias-section">
      <h2 className="titulo-seccion">Tecnologías y Herramientas</h2>

      <div className="categorias-grid">
        {categorias.map((cat, index) => (
          <motion.div
            key={index}
            className="categoria-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="categoria-titulo">
              <span className="icono">{cat.icono}</span> {cat.nombre}
            </h3>
            <div className="tecnologias-grid">
              {cat.tecnologias.map((tec, i) => (
                <motion.div
                  key={i}
                  className="tecnologia-item"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={`${basePath}${tec.logo}`}
                    alt={tec.nombre}
                    className="tecnologia-logo"
                  />
                  <p>{tec.nombre}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
