import "./VisionRol.css";

function VisionRol() {
  const basePath = import.meta.env.BASE_URL;
  return (
    <section className="vision-section">
      <div className="vision-header">
        <span className="vision-small-title">VISIÓN Y ROL</span>

        <h2>
          Impulsamos un futuro energético limpio,
          <br />
          <span className="texto-uno">sostenible</span>
          <span className="texto-dos"> y </span>
          <span className="texto-tres">responsable.</span>
        </h2>
      </div>

      <div className="vision-panels">
        {/* Panel Izquierdo */}

        <div className="vision-card">
          <img
            src={`${basePath}${"vision-geotermia.png"}`}
            alt="Energía geotérmica"
            className="vision-geotermia"
          />

          <div className="vision-overlay">
            <h3>
              Energía geotérmica
              <br />
              para un planeta saludable
            </h3>

            <p>
              Aprovechamos el poder natural de la Tierra para generar energía
              limpia, confiable y disponible 24/7.
            </p>

            <div className="vision-icons">
              <div>
                <span>🌿</span>
                <p>Cero emisiones</p>
              </div>

              <div>
                <span>♻️</span>
                <p>Recurso renovable</p>
              </div>

              <div>
                <span>⚡</span>
                <p>Energía confiable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo central */}

        <div className="vision-center-logo">
          <img
            src={`${basePath}${"logo-geoflow.png"}`}
            alt="GeoFlow Logo"
            className="logo-geoflow"
          />
        </div>

        {/* Panel Derecho */}

        <div className="vision-card">
          <img
            src={`${basePath}${"vision-city.png"}`}
            alt="Ciudad sostenible"
            className="vision-city"
          />

          <div className="vision-overlay">
            <h3>
              Energía que transforma
              <br />
              ciudades y comunidades
            </h3>

            <p>
              Desarrollamos soluciones energéticas sostenibles para construir
              ciudades más resilientes y eficientes.
            </p>

            <div className="vision-icons">
              <div>
                <span>🏢</span>
                <p>Calefacción limpia</p>
              </div>

              <div>
                <span>⚡</span>
                <p>Electricidad renovable</p>
              </div>

              <div>
                <span>👥</span>
                <p>Desarrollo responsable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-footer">
        <p>
          Nuestro rol es ser el puente entre la energía de la Tierra y un futuro
          sostenible.
        </p>
      </div>
    </section>
  );
}

export default VisionRol;
