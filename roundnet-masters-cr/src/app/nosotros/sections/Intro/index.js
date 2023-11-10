import React from 'react';
import next from 'next/image';
import styles from './Intro.module.css' 

const Intro = () => {
  return (
    <section>
      <div className={styles.intro}>
        <h1>¿Qué es Roundnet Masters CR?</h1>
      </div>

      <div className={`${styles.parallax} ${styles.bg1}`}>
        <h1>
          &quot;Roundnet Masters CR una idea que nació con la visión de
          convertirse en una realidad para nuestro país y estimular la pasión
          por el deporte de roundnet en Costa Rica.&quot;
        </h1>
      </div>

      <div className={`${styles.parallax} ${styles.bg2}`}>
        <h1>Equipo Masters</h1>
      </div>
    </section>
  );
};

export default Intro;
