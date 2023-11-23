// Importa el componente Carousel desde la ruta especificada
import Carousel from '@/app/components/Carousel';

// Importa las imágenes desde la carpeta de imágenes
import Lo1 from './imagenes/imagen1.jpg';
import Lo2 from './imagenes/imagen1.2.jpg';

import Gg1 from './imagenes/imagen2.jpg';
import Gg2 from './imagenes/imagen2.2.jpg';

import Axsel1 from './imagenes/imagen3.jpg';
import Axsel2 from './imagenes/imagen3.2.jpg';

import Tony1 from './imagenes/imagen4.jpg';
import Tony2 from './imagenes/imagen4.2.jpg';

import Nash1 from './imagenes/imagen5.jpg';
import Nash2 from './imagenes/imagen5.2.jpg';

import Niko1 from './imagenes/imagen6.jpg';
import Niko2 from './imagenes/imagen6.2.jpg';

import Caleb1 from './imagenes/imagen7.jpg';
import Caleb2 from './imagenes/imagen7.2.jpg';


// Define el componente Galeria
const Galeria = () => {
  // Crea un array de imágenes. Puedes agregar más imágenes aquí, simplemente
  // importándolas como se hizo con Axsel1 y Axsel2, y luego añadiéndolas al array.
  // Por ejemplo: const images = [Axsel1, Axsel2, Axsel3, Axsel4];
  const images = [Lo1, Lo2];
  const images2 = [Gg1, Gg2];
  const images3 = [Axsel1, Axsel2];
  const images4 = [Tony1, Tony2];
  const images5 = [Nash1, Nash2];
  const images6 = [Niko1, Niko2];
  const images7 = [Caleb1, Caleb2];

  // Renderiza el componente Carousel con las imágenes proporcionadas
  return (
    <section>
      <Carousel data={[images, images2, images3, images4, images5,images6, images7]} dataType="images" />

      {/**
       * puede tener más de un carrusel en la misma página, simplemente
       * agregando otro componente Carousel con diferentes imágenes.
       * Este es un ejemplo de cómo agregar un segundo carrusel.
       * bórrelo cuando ya no lo necesite
       */}
s    </section>

  );
};

// Exporta el componente Galeria para su uso en otras partes de la aplicación
export default Galeria;
