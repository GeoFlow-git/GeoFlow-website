
// src/components/Servicios.jsx
function Servicios() {
  return (
    /* el id "servicios" es para poder enlazar desde la navbar */
    <section id="servicios" className="container my-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="row text-center">
        <div className="col-md-4">
          <i className="bi bi-lightning-charge fs-1 text-primary"></i>
          <h5>Consultoría Energética</h5>
          <p>Optimización de recursos geotérmicos y solares para proyectos urbanos y rurales.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-droplet fs-1 text-info"></i>
          <h5>Gestión de Acuíferos</h5>
          <p>Monitoreo y modelado de sistemas hídricos subterráneos.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-bar-chart fs-1 text-success"></i>
          <h5>Visualización de Datos</h5>
          <p>Dashboards interactivos para análisis energético y ambiental.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;