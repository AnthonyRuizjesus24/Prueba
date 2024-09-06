/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx,astro}', // Ajusta las rutas según tu estructura de archivos
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D4ED8', // Azul oscuro
          secondary: '#F59E0B', // Amarillo
        },
        fontFamily: {
          sans: ['Inter', 'Arial', 'sans-serif'], // Fuentes personalizadas
        },
        spacing: {
          '128': '32rem', // Ejemplo de espaciado personalizado
        },
      },
      screens: {
        'sm': '640px',   // Pantallas pequeñas (teléfonos)
        'md': '768px',   // Pantallas medianas (tabletas)
        'lg': '1024px',  // Pantallas grandes (escritorios)
        'xl': '1280px',  // Pantallas extra grandes (grandes escritorios)
        '2xl': '1536px', // Pantallas extra extra grandes
      },
    },
    plugins: [],
    
  };
  