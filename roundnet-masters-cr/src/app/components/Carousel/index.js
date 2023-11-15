'use client';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Imagen from '../../../../public/Imagenes/imagen.png';
import Imagen4 from '../../../../public/Imagenes/imagen4.png';
import Imagen5 from '../../../../public/Imagenes/imagen5.png';

const Carousel = () => {
  return (
    <AwesomeSlider>
      {/* <div data-src={Imagen} />
      <div data-src={Imagen4} />
      <div data-src={Imagen5} /> */}
    </AwesomeSlider>
  );
};

export default Carousel;
