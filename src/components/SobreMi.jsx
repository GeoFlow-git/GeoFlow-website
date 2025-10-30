import './SobreMi.css';

function SobreMi() {

  const basePath = import.meta.env.BASE_URL;

  return (

    <section id="sobre-mi" className="sobre-mi-section my-5">

      {/* Título de la sección */}
      <h2 className="text-center mb-4">Sobre mí</h2>

      {/* Caja de Sobre Mi */}
      <div className="sobre-mi-box p-4 rounded">
        <div className="sobre-mi-contenido row g-0 align-items-center">


          {/* Texto y descripción */}
          <div className="col-md-5 px-3 sobre-mi-texto">
            <h4 className="mb-3">M.I. Luis Armando García Navarrete</h4>
            <p className="sobre-mi-parrafo mb-0">
              Ingeniero en geociencias apasionado por la simulación y el modelado.
              He trabajado en el sector del petróleo y gas, así como en la industria
              geotérmica y el manejo de acuíferos.
            </p>
          </div>


          <div className="col-md-5 text-center px-3 sobre-mi-imagen">
            <img
              src={`${basePath}${"Foto.jpg"}`} 
              alt="Luis"
              className="img-fluid rounded-circle"
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;