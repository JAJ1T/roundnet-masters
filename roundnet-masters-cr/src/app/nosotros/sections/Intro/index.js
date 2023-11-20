import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section className={styles.parallaxContainer}>
      <div className={`${styles.parallaxLayer} ${styles.bg1}`}>
        <h1>¿Qué es Roundnet Masters CR?</h1>
      </div>

      <div className={`${styles.parallaxLayer} ${styles.bg2}`}>
        <h1>
          "Roundnet Masters CR una idea que nació con la visión de
          convertirse en una realidad para nuestro país y estimular la pasión
          por el deporte de roundnet en Costa Rica."
        </h1>
      </div>

      <div className={`${styles.parallaxLayer} ${styles.bg3}`}>
        <h1>Equipo Masters</h1>
      </div>
    </section>
  );
};

export default Intro;
