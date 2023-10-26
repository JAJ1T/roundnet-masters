import React, { useState } from 'react';
import './ImageGallery.css'; // Importa los estilos CSS para este componente

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(1);

    const changeImage = (imageNumber) => {
        setCurrentImage(imageNumber);
    };

    const getImageSrc = (imageNumber) => {
        return `/quienes-somos/equipo-masters/imagenes/imagen${imageNumber}.${imageNumber === currentImage ? '1' : ''}.jpg`;
    };

    return (
        <div className="gallery-container">
            <div className="box">
                {Array.from({ length: 7 }, (_, i) => (
                    <span key={i} style={{ '--i': i + 1 }} onClick={() => changeImage(i + 1)}>
                        <img src={getImageSrc(i + 1)} alt="" />
                    </span>
                ))}
            </div>
            <div id="imageDescription">Descripción: Texto {currentImage}</div>
        </div>
    );
};

export default ImageGallery;