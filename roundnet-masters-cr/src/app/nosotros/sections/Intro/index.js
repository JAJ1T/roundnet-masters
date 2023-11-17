import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './Intro.module.css';
import Page from '../../page';
import image1 from '/roundnet-masters-cr/public/images/nosotros/Inicio.jpg'; 
import image2 from '/roundnet-masters-cr/public/images/nosotros/equipo.jpg'; 

const Intro = () => {
  return (
    <Parallax
      blur={10}
      bgImage={image1}
      bgImageAlt="bg1"
      strength={200}
      className={styles.introParallax}
    >
      <section className={styles.intro}>
        <h1>¿Qué es Roundnet Masters CR?</h1>
      </section>

      <div className={`${styles.parallax} ${styles.bg1}`}>
        <h1>
          &quot;Roundnet Masters CR una idea que nació con la visión de
          convertirse en una realidad para nuestro país y estimular la pasión
          por el deporte de roundnet en Costa Rica.&quot;
        </h1>
      </div>

      <Parallax
        blur={10}
        bgImage={image2}
        bgImageAlt="bg2"
        strength={200}
        className={`${styles.parallax} ${styles.bg2}`}
      >
        <h1>Equipo Masters</h1>
      </Parallax>
    </Parallax>
  );
};

export default Intro;
