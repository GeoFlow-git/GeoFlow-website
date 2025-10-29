//import { StrictMode } from 'react'  // hace que la app se renderize dos veces (para encontrar bugs)
import { createRoot } from 'react-dom/client'    // Función para renderizar la aplicación
import './index.css'                // Estilos globales de la aplicación
import App from './App.jsx'             // Componente principal de la aplicación

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(  <App />)   //  Renderiza el componente App en el elemento con id 'root'