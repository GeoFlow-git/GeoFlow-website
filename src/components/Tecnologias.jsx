import './Tecnologias.css';

function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias-section my-5">
      <h2 className="text-center mb-4">Tecnologías que utilizamos</h2>
      <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4">
        <img src="/ANSYS_logo.png" alt="ANSYS Fluent" className="tech-logo" />
        <img src="/CMG.png" alt="CMG" className="tech-logo" />
        <img src="/MRST.png" alt="MRST" className="tech-logo" />
        <img src="/DARTS.png" alt="DARTS" className="tech-logo" />
        {/* Agrega más logos según tus herramientas */}
      </div>
    </section>
  );
}

export default Tecnologias;