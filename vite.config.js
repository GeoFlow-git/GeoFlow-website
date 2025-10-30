import { defineConfig } from 'vite'  // esta linea se encarga de importar la función defineConfig desde el paquete 'vite'
import react from '@vitejs/plugin-react' // esta linea importa el plugin de React para Vite


export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/GeoFlow-website/' : '/', // Ajusta esto según el nombre de tu repositorio
})


// Esto define automáticamente el base correcto:

//         /GeoFlow-website/ al hacer npm run build
//        / al hacer npm run dev