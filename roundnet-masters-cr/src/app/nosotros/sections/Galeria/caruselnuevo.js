// Importa el componente Carousel desde la ruta especificada
import Carousel from '@/app/components/Carousel';
import Image from 'next/image';
import styles from './Galeria.module.css';

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

// Información sobre cada imagen
const imageData = {
  Lo1: { name: 'Lo1', description: 'Texto desplegable para Lo1.' },
  Lo2: { name: 'Lo2', description: 'Texto desplegable para Lo2.' },
  Gg1: { name: 'Gg1', description: 'Texto desplegable para Gg1.' },
  Gg2: { name: 'Gg2', description: 'Texto desplegable para Gg2.' },
  Axsel1: { name: 'Axsel1', description: 'Texto desplegable para Axsel1.' },
  Axsel2: { name: 'Axsel2', description: 'Texto desplegable para Axsel2.' },
  Tony1: { name: 'Tony1', description: 'Texto desplegable para Tony1.' },
  Tony2: { name: 'Tony2', description: 'Texto desplegable para Tony2.' },
  Nash1: { name: 'Nash1', description: 'Texto desplegable para Nash1.' },
  Nash2: { name: 'Nash2', description: 'Texto desplegable para Nash2.' },
  Niko1: { name: 'Niko1', description: 'Texto desplegable para Niko1.' },
  Niko2: { name: 'Niko2', description: 'Texto desplegable para Niko2.' },
  Caleb1: { name: 'Caleb1', description: 'Texto desplegable para Caleb1.' },
  Caleb2: { name: 'Caleb2', description: 'Texto desplegable para Caleb2.' },
};

// Agrupa las imágenes
const group1 = [Lo1, Lo2, Gg1, Gg2, Axsel1, Axsel2, Tony1, Tony2];
const group2 = [Nash1, Nash2, Niko1, Niko2, Caleb1, Caleb2];

// Define el componente Galeria
const Galeria = () => {
  return (
    <section className={styles.myCustomSliderContainer}>
      <Carousel data={[group1, group2]} dataType="images">
        {group1.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.circularImage}>
              <Image src={image} alt={imageData[image]?.name} width={200} height={200} />
              <div className={styles.overlay}>
                <p>{imageData[image]?.description}</p>
              </div>
            </div>
            <p className={styles.imageTitle}>{imageData[image]?.name}</p>
          </div>
        ))}

        {group2.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.circularImage}>
              <Image src={image} alt={imageData[image]?.name} width={200} height={200} />
              <div className={styles.overlay}>
                <p>{imageData[image]?.description}</p>
              </div>
            </div>
            <p className={styles.imageTitle}>{imageData[image]?.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

// Exporta el componente Galeria para su uso en otras partes de la aplicación
export default Galeria;
