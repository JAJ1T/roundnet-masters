'use client';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Imagen from '../../../../public/Imagenes/imagen.png';
import Imagen4 from '../../../../public/Imagenes/imagen4.png';
import Imagen5 from '../../../../public/Imagenes/imagen5.png';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const Carousel = () => {
  const images = [Imagen, Imagen4, Imagen5];

  // Axsel vea esta documentacion para que vea como se usa el carousel
  // https://www.npmjs.com/package/react-awesome-slider
  // NO USAR data-src en NextJS.
  // No sirve si usa algo como <div data-src="/path/to/image-0.png" />
  // Debe ser <Image src="/path/to/image-0.png" alt="imagen" width={100} height={100} />

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
};

export default Carousel;
