// Importa el componente Carousel desde la ruta especificada
import Carousel from '@/app/components/Carousel';

// Importa las imágenes desde la carpeta de imágenes
import Axsel1 from './imagenes/imagen3.jpg';
import Axsel2 from './imagenes/imagen3.2.jpg';

import Tony1 from './imagenes/imagen4.jpg';
import Tony2 from './imagenes/imagen4.2.jpg';

// Define el componente Galeria
const Galeria = () => {
  // Crea un array de imágenes. Puedes agregar más imágenes aquí, simplemente
  // importándolas como se hizo con Axsel1 y Axsel2, y luego añadiéndolas al array.
  // Por ejemplo: const images = [Axsel1, Axsel2, Axsel3, Axsel4];
  const images = [Axsel1, Axsel2];
  const images2 = [Tony1, Tony2];

  // Renderiza el componente Carousel con las imágenes proporcionadas
  return (
    <section>
      <Carousel data={images} dataType="images" />

      {/**
       * puede tener más de un carrusel en la misma página, simplemente
       * agregando otro componente Carousel con diferentes imágenes.
       * Este es un ejemplo de cómo agregar un segundo carrusel.
       * bórrelo cuando ya no lo necesite
       */}

      <Carousel data={images2} dataType="images" />
    </section>
  );
};

// Exporta el componente Galeria para su uso en otras partes de la aplicación
export default Galeria;
