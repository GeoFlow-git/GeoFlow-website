import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const servicios = [
  {
    id: 1,
    titulo: "Simulación de yacimientos",
    descripcion: `
      Modelado avanzado de sistemas geológicos para optimizar la producción y gestión de recursos energéticos:
- 📊 Análisis numérico de flujo multifásico en medios porosos
- 🧠 Integración de datos de campo, registros geofísicos y modelos de reservorio
- 🔁 Evaluación de escenarios de explotación, recuperación mejorada y pronóstico de comportamiento dinámico
- 🛢 Aplicación en petróleo, gas, geotermia y acuífero

    `,
    imagen: "reservoir.png",
    posicion: "left",
  },
  {
    id: 2,
    titulo: "Estudios CFD",
    descripcion: ` Simulación de procesos térmicos, hidráulicos y de transporte para mejorar el diseño y operación de sistemas energéticos:
- 🔬 Modelado de transferencia de calor, turbulencia y reacciones en geometrías complejas
- 🧪 Optimización de intercambiadores, pozos geotérmicos, ductos y sistemas de ventilación
- ⚙️ Desarrollo de soluciones personalizadas con herramientas como OpenFOAM, ANSYS Fluent y Python
- 📈 Validación con datos experimentales y escalamiento de resultado
`,
    imagen: "pipeflow.png",
    posicion: "right",
  },
  {
    id: 3,
    titulo: " Inteligencia Artificial y Ciencia de Datos",
    descripcion: `Aplicación de algoritmos inteligentes para extraer valor de datos técnicos y operativos:
🤖 Machine Learning para clasificación, regresión y detección de anomalías
🧮 Análisis estadístico y visualización de datos geocientíficos y energéticos
🔍 Automatización de procesos, predicción de variables críticas y generación de modelos explicativos
🧠 Integración de IA con simulaciones físicas para toma de decisiones informad
`,
    imagen: "red_neuronal.png",
    posicion: "left",
  },
];

export default function ServiciosAnimados() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
        padding: "2rem",
      }}
    >
      {/* 🔹 Título de la sección */}

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#e07918ff",
          marginTop: "5rem",
          marginBottom: "0rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Nuestros Servicios
      </motion.h2>

      {servicios.map((servicio) => (
        <ServicioItem key={servicio.id} {...servicio} />
      ))}
    </div>
  );
}

function ServicioItem({ titulo, descripcion, imagen, posicion }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: posicion === "left" ? -50 : 50 });
    }
  }, [controls, inView, posicion]);

  const isLeft = posicion === "left";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "center",
        minHeight: "60vh",
        gap: "10rem",
      }}
    >
      {/* Imagen */}
      <div style={{ flexShrink: 0, width: "700px", height: "400px" }}>
        <img
          src={imagen}
          alt={titulo}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Texto animado */}
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "600px",
          backgroundColor: "rgba(51, 51, 51, 1.0)",
          padding: "1rem",
          borderRadius: "0.5rem",
          textAlign: "justify",
        }}
      >
        <h3
          style={{
            fontSize: "3rem",
            backgroundColor: "rgba(51, 51, 51, 1.0)",
            fontWeight: "bold",
            color: "#0cf1deff",
          }}
        >
          {titulo}
        </h3>
        <p
          style={{
            fontSize: "1.5rem",
            backgroundColor: "rgba(51, 51, 51, 1.0)",
            color: "#ffffffff",
          }}
        >
          {descripcion}
        </p>
      </motion.div>
    </div>
  );
}
