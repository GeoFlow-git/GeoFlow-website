//import './App.css'; // Estilos de la aplicación
import { useState } from "react"; // Hook de estado de React

//------------ Importa los componentes necesarios----------
//import TodoApp from './components/TodoApp';   // Importa el componente TodoApp
//import Dropdown  from './components/Dropdown';       // Importa el componente Card
// import { Dropdown } from 'bootstrap';
import Card from "./components/Card"; // Importa el componente Card
import Navbar from "./components/Navbar.jsx"; // Importa el componente Navbar
import HeroSection from "./components/HeroSection"; // Importa el Hero
import Sectores from "./components/Sectores"; // Importa  Sectores
import Footer from "./components/footer"; // Importa el Footer
//import Servicios from "./components/Servicios"; // Importa el componente Servicios
import SobreMi from "./components/SobreMi"; // Importa el componente SobreMi
import HeaderInfo from "./components/HeaderInfo";
import Tecnologias from "./components/Tecnologias.jsx";
//import ServicioAnimado from "./components/ServicioAnimado.jsx";
import OurMision from "./components/OurMision";
import ServicioPanel from "./components/ServicioPanel";
import Publicaciones from "./components/Publicaciones";

// ======= PÁGINAS =======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pag_tuberias from "./Pages/page_1.jsx";
import Iniciar_sesion from "./Pages/Iniciar_sesion.jsx";
import Register from "./Pages/Register.jsx";
import Perfil from "./Pages/Perfil.jsx";

// Importa los estilos y scripts de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa los scripts de Bootstrap
//import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa los estilos de FontAwesome
import "./icons"; // Importa la configuración de los íconos de FontAwesome
import "./App.css";
import "./components/section.css";
import { motion } from "framer-motion";
//   Importaok frame motion para animaciones
//import { motion } from "framer-motion";

// No es lenguaje HTML, es JSX (JavaScript XML)

// ======= APLICACIÓN =======
function App() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const toggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    // <Router basename="/GeoFlow-website">
    <Router basename="/">
      {" "}
      {/* Configura el enrutador con la base correcta */}
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

              <div className="our-mission-section">
                <OurMision />
              </div>
              <div className="Sobre_mi-section">
                <SobreMi />
              </div>

              {/* <div className="section-transition"></div> */}

              {/* <ServicioAnimado /> */}
              <ServicioPanel />

              <svg viewBox="0 0 1440 100" class="svg-separator">
                <path
                  fill="#ff7300"
                  d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
                ></path>
              </svg>
              <div className="Sectores-section">
                <Sectores />
              </div>

              <svg viewBox="0 0 1440 100" class="svg-separator flipped">
                <path
                  fill="#ff7300"
                  d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
                  transform="scale(-1, -1) translate(-1440, -100)"
                ></path>
              </svg>

              <Tecnologias />
              <div className="section-transition"></div>
              <Publicaciones />
            </>
          }
        />

        {/* Páginas internas */}
        <Route path="/Pag_tuberias" element={<Pag_tuberias />} />
        <Route path="/Iniciar_sesion" element={<Iniciar_sesion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
      {/* 🧭 🦶 Footer  visibles en todas las páginas */}
      <Footer />
    </Router>
  );
}

export default App;
