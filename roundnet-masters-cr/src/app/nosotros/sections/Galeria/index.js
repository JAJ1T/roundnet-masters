import React from 'react';
import './Galeria.module.css'; // Asegúrate de crear un archivo CSS para estilos
import images from '.imagenes/image';
const Galeria = () => {
  // Suponiendo que tienes las imágenes importadas o disponibles localmente
  const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    'imagen4.jpg',
    'imagen5.jpg',
    'imagen6.jpg',
    'imagen7.jpg',
  ];

  return (
    <section className="galeria">
      {images.map((image, index) => (
        <img
          key={index}
          className="imagenCircular" // Aplica la clase para hacerla circular
          src={image}
          alt={`imagen-${index + 1}`}
        />
      ))}
    </section>
  );
}

export default Galeria;
