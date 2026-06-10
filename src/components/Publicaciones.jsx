import React from "react";
import "./Publicaciones.css";
import { ArrowRight } from "lucide-react";

function Publicaciones() {
  return (
    <section className="publicaciones-section">
      <div className="publicaciones-content">
        {/* Texto */}
        <div className="publicaciones-text">
          <span className="publicaciones-label">PUBLICACIONES</span>

          <h2>
            Conocimiento que
            <br />
            impulsa soluciones.
          </h2>

          <p>
            Explora nuestras publicaciones sobre simulación y modelado de
            sistemas geoenergéticos.
          </p>

          <a href="/publicaciones" className="publicaciones-link">
            Ver todas las publicaciones
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Imagen */}
        <div className="publicaciones-image">
          <img src="/Publish.png" alt="Publicaciones GeoFlow" />
        </div>
      </div>
    </section>
  );
}

export default Publicaciones;
