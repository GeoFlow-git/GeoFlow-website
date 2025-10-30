// import React from 'react';
// import './HeroSection.css'; // Puedes personalizar estilos aquí

// function HeroSection() {
//   return (
//     <section className="hero d-flex align-items-center justify-content-center text-center text-white">
//       <div className="container">
//         <h1 className="display-4 fw-bold">Bienvenido a GeoFlow</h1>
//         <p className="lead">Soluciones energéticas sostenibles para un futuro más limpio</p>
//         <a href="#servicios" className="btn btn-primary btn-lg mt-3">Explora nuestros servicios</a>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


import React from 'react';
import './HeroSection.css'; // Puedes personalizar estilos aquí

function HeroSection() {
  return (
    <section className="hero-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">


          {/* Texto a la izquierda */}
          <div className="col-md-5 text-center text-md-start ms-auto"> {/* Aqui se ajusta el tamaño de la columna */}
            {/* display para tamaño grande, fw-bold para negrita */}
            <h1 className="display-4 fw-bold">LOL Simulación numérica para un futuro sostenible.</h1>
            <p className="lead">Ayudamos a empresas del sector energético y ambiental a entender el subsuelo 
              con simulaciones precisas y visualizaciones claras. Desde petróleo y gas hasta acuíferos y 
              geotermia, convertimos datos en decisiones.</p>
            <a href="#servicios" className="btn btn-primary btn-lg mt-3">Explora nuestros servicios</a>
          </div>


           {/* col-md para definir el tamaño en dispositivos medianos  */} 
           {/* ms-auto para empujar la imagen a la derecha */}
          <div className="col-md-5 text-center ms-auto"> {/* Aqui se ajusa el tamaño de la columna */}
            <img
              src="reservoir.png"
              alt="Energía geotérmica"
              className="img-fluid rounded"
              /* 600px de altura máxima y cover para que la imagen cubra el espacio */
              style={{ maxHeight: '600px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;