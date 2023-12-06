import React from "react";
import { Parallax } from 'react-parallax';
import styles from 'Parallax.module.css';
export default function Parallax(){
    return(
              <div>
                <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage="/images/nosotros/Inicio.jpg"
                  bgImageAlt="bg1"
                  strength={-200}
                  className={styles.introParallax}
                >
                  <section className={styles.intro}>
                    <h1>¿Qué es Roundnet Masters CR?</h1>
                  </section>
                </Parallax>
          
                <div className={`${styles.parallax} ${styles.bg1}`}>
                  <h1>
                    "Roundnet Masters CR una idea que nació con la visión de
                    convertirse en una realidad para nuestro país y estimular la pasión
                    por el deporte de roundnet en Costa Rica."
                  </h1>
                </div>
          
                <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage="/images/nosotros/equipo.jpg"
                  bgImageAlt="bg2"
                  strength={-200}
                  className={`${styles.parallax} ${styles.bg2}`}
                >
                  <h1>Equipo Masters</h1>
                </Parallax>
              </div>
            );
          };           