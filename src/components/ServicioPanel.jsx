import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServiciosPanel.css"; // 👈 Importamos el CSS externo

const servicios = [
  {
    id: 1,
    titulo: "Simulación de yacimientos",
    descripcion:
      "Simulaciones avanzadas de yacimeintos incluyendo procesos termicos, composicionales y medios fracturados.",
    imagen: "reservoir.png",
  },
  {
    id: 2,
    titulo: "Estudios CFD",
    descripcion:
      "Análisis dinámico de transporte multifásico en tuberias y equipos superficiales.",
    imagen: "pipeflow.png",
  },
  {
    id: 3,
    titulo: "Inteligencia Artificial y Ciencia de Datos",
    descripcion:
      "Aplicación de modelos de machine learning y análisis estadístico para la interpretación de datos geocientíficos, optimización de procesos energéticos y generación de predicciones confiables.",
    imagen: "red_neuronal.png",
  },
  {
    id: 4,
    titulo: "Servicios de software",
    descripcion:
      "Desarrollo de soluciones personalizadas en ingeniería de software, incluyendo automatización de flujos técnicos, diseño de interfaces interactivas, dashboards especializados y herramientas científicas reproducibles.",
    imagen: "react_dashboard.png",
  },
];

export default function ServiciosPanel() {
  const [servicioActivo, setServicioActivo] = useState(null);
  const basePath = import.meta.env.BASE_URL;

  const handleClick = (id) => {
    setServicioActivo((prev) => (prev === id ? null : id));
  };

  return (
    <section id="servicios">
      <div className="servicios-panel">
        {/* Panel izquierdo */}
        <div className="servicios-menu">
          <h2 className="servicios-titulo">Nuestros Servicios</h2>
          <ul className="servicios-lista">
            {servicios.map((serv) => (
              <motion.li
                key={serv.id}
                onClick={() => handleClick(serv.id)}
                whileHover={{ scale: 1.05 }}
                animate={{
                  backgroundColor:
                    servicioActivo === serv.id ? "#0cf1de" : "#f2f2f2",
                  color: servicioActivo === serv.id ? "#000" : "#333",
                }}
                transition={{ duration: 0.3 }}
                className={`servicios-item ${
                  servicioActivo === serv.id ? "activo" : ""
                }`}
              >
                {serv.titulo}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Panel derecho */}
        <div className="servicios-detalle">
          <AnimatePresence>
            {servicioActivo && (
              <motion.div
                key={servicioActivo}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
                className="servicios-card"
              >
                <img
                  src={`${basePath}${
                    servicios.find((s) => s.id === servicioActivo).imagen
                  }`}
                  alt="Servicio"
                  className="servicios-imagen"
                />
                <h3 className="servicios-subtitulo">
                  {servicios.find((s) => s.id === servicioActivo).titulo}
                </h3>
                <p className="servicios-descripcion">
                  {servicios.find((s) => s.id === servicioActivo).descripcion}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
