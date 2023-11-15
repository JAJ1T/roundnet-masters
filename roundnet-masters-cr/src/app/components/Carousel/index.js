// Axsel vea esta documentacion para que vea como se usa el carousel
// https://www.npmjs.com/package/react-awesome-slider
// NO USAR data-src en NextJS.
// No sirve si usa algo como <div data-src="/path/to/image-0.png" />
// Debe ser <Image src="/path/to/image-0.png" alt="imagen" width={100} height={100} />

// 'use client' indica que este componente se ejecuta solo en el cliente y no durante el renderizado del lado del servidor.
'use client';

// Importa el componente Image de Next.js para optimizar imágenes.
import Image from 'next/image';

// Importa AwesomeSlider, un componente de carrusel reactivo.
import AwesomeSlider from 'react-awesome-slider';

// Importa los estilos predeterminados para AwesomeSlider.
import 'react-awesome-slider/dist/styles.css';

// Importa los estilos principales y de animación para personalizar AwesomeSlider.
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

// Define el componente Carousel que recibe 'data' y 'dataType' como props.
const Carousel = ({ data, dataType }) => {
  let images = null;

  // Verifica si el tipo de datos es 'images'. En este caso, se espera que 'data' sea un array de rutas de imágenes.
  if (dataType === 'images') {
    images = data;

    // Renderiza el carrusel con las imágenes proporcionadas.
    // Usa 'map' para iterar sobre el array de imágenes y mostrar cada una en el carrusel.
    return (
      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt="imagen" width={'auto'} height={'100%'} />
          </div>
        ))}
      </AwesomeSlider>
    );
  }

  // Si 'dataType' no es 'images', renderiza el carrusel con el contenido de 'data'.
  // Esto permite usar el carrusel para otros tipos de contenido además de imágenes.
  return (
    <AwesomeSlider
      animation="foldOutAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
    >
      {data.map((data, index) => (
        <div key={index}>{data}</div>
      ))}
    </AwesomeSlider>
  );
};

// Exporta el componente Carousel para su uso en otras partes de la aplicación.
export default Carousel;
