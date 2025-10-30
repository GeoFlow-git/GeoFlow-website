
//  "homepage": "https://GeoFlow-git.github.io/GeoFlow-website/",



// import { useState } from 'react'          // Hook de estado de React
// import reactLogo from './assets/react.svg'  // Logo de React
// import viteLogo from '/vite.svg'            // Logo de Vite
// import './App.css'                     // Estilos de la aplicación

// function App() {           // Componente funcional principal de la aplicación            
//   const [count, setCount] = useState(0)

//   return (     // Fragmento JSX que define la estructura de la interfaz de usuario
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//import './App.css'; // Estilos de la aplicación
import { useState } from 'react';  // Hook de estado de React



//------------ Importa los componentes necesarios----------
//import TodoApp from './components/TodoApp';   // Importa el componente TodoApp
//import Dropdown  from './components/Dropdown';       // Importa el componente Card
// import { Dropdown } from 'bootstrap';
import Card from './components/Card';       // Importa el componente Card
import Navbar from './components/Navbar.jsx';  // Importa el componente Navbar
import HeroSection from './components/HeroSection'; // Importa el Hero
import Slider from './components/slider'; // Importa el slider
import Footer from './components/footer'; // Importa el Footer
import Servicios from './components/Servicios';   // Importa el componente Servicios
import SobreMi from './components/SobreMi';   // Importa el componente SobreMi
import HeaderInfo from './components/HeaderInfo';
import Tecnologias from './components/Tecnologias.jsx';



// ======= PÁGINAS =======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pag_tuberias   from './page_1.jsx';
//import Home from './pages/Home'; // o tu componente principal


// Importa los estilos y scripts de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los scripts de Bootstrap
//import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de FontAwesome
import './icons'; // Importa la configuración de los íconos de FontAwesome





// No es lenguaje HTML, es JSX (JavaScript XML)

// ======= APLICACIÓN =======
function App() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (



    <Router basename="/GeoFlow-website">  {/* Configura el enrutador con la base correcta */}

      {/* 🧭 Header y Navbar visibles en todas las páginas */}
      <HeaderInfo />
      <Navbar />


      {/* 🧩 RUTAS */}
      <Routes>


        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <SobreMi />
              <Slider />
              <Tecnologias />

              <div className="container my-5">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <Card
                      image="geothermal.jpg"
                      title="Energía Geotérmica"
                      text="Explora cómo la energía del subsuelo puede alimentar ciudades enteras."
                      link="/Pag_tuberias"
                    />
                  </div>

                  <div className="col-md-4 mb-4">
                    <Card
                      image="oil.jpg"
                      title="Oil and Gas"
                      text="Discover the latest advancements in oil and gas extraction technologies."
                      link="/Pag_tuberias"
                    />
                  </div>

                  <div className="col-md-4 mb-4">
                    <Card
                      image="acuifero.jpg"
                      title="Manejo de acuíferos"
                      text="Aprovecha el poder del sol para generar electricidad limpia y renovable."
                      link="/Pag_tuberias"
                    />
                  </div>
                </div>
              </div>

              <Servicios />
            </>
          }
        />



        {/* Página interna */}
        <Route path="/Pag_tuberias" element={<Pag_tuberias />} />
      </Routes>





      {/* 🧭 🦶 Footer  visibles en todas las páginas */}
      <Footer />


    </Router>
  );
}

export default App;