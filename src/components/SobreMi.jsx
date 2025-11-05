import "./SobreMi.css";

function SobreMi() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="sobre-mi" className="sobre-mi-section my-5">
      {/* Título de la sección */}
      <h2 className=" sobre-mi-titulo">Sobre mí</h2>

      {/* Caja de Sobre Mi */}
      <div className="sobre-mi-box ">
        <div className="sobre-mi-contenido row g-0 align-items-center">
          {/* Texto y descripción */}
          <div className="sobre-mi-texto col-md-7 px-3 ">
            <h4 className="mb-3">M.I. Luis Armando García Navarrete</h4>
            <p className="sobre-mi-parrafo mb-0">
              Soy ingeniero en geociencias originario de México, apasionado por
              la simulación y el modelado de fenómenos físicos. He trabajado en
              el sector de petróleo y gas, así como en la industria geotérmica y
              en la gestión de acuíferos.
              <br />
              <br />
              Mi formación incluye una licenciatura en Ingeniería Petrolera,
              además de una maestría en Dinámica de Fluidos Computacional (CFD)
              realizada en Tarragona, España. También cuento con una
              especialización en modelado de yacimientos geotérmicos. Esta
              trayectoria me ha permitido integrar herramientas numéricas
              avanzadas en el estudio de fenómenos geofísicos y en la
              optimización de procesos energéticos.
              <br />
              <br />
              Poseo amplia experiencia como programador, desarrollando
              soluciones técnicas en diversos lenguajes y entornos. Soy
              entusiasta de las nuevas tecnologías y me motiva profundamente el
              aprendizaje constante, lo que me ha llevado a explorar áreas
              interdisciplinarias que combinan ciencia, ingeniería y
              automatización.
            </p>
          </div>

          <div className="sobre-mi-imagen col-md-5 text-center px-3 ">
            <img
              src={`${basePath}${"perfil.png"}`}
              alt="Luis"
              className="img-fluid "
              style={{ width: "300px", height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;

// className="img-fluid rounded-circle"
