import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import styles from './Galeria.module.css';

const Galeria = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    '/imagenes/image1.jpg',
    '/imagenes/image2.jpg',
    '/imagenes/image3.jpg',
    '/imagenes/image4.jpg',
    '/imagenes/image5.jpg',
    '/imagenes/image6.jpg',
    '/imagenes/image7.jpg'
  ];

  return (
    <div className={styles.sliderContainer}>
      <h1>Imágenes Rotativas</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Galeria;
