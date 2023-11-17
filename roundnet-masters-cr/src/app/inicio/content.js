import React from "react";
import Image from "next/image";
import styles from "./content.module.scss"


const Contents = () => {
    return ( 
        <>
               {/*Introduccion*/}
       <section className={styles.introduccion} id="introduccion">
         <div>
           <h2>Roundnet Masters Costa Rica te invita a jugar!!!</h2>
           <h3>¡Sé un Master con nosotros!</h3>
           <a
             href="https://www.youtube.com"
             target="_blank"
             className={styles.btn}
           >
             Unirse
           </a>
         </div>
       </section>

       {/*Informacion*/}
       <section className={styles.informacion} id="informacion">
         <div className={styles.content}>
           <h4>Informacion</h4>
           <h1>Esto se juega asi</h1>
           <p>
             {' '}
             bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
             _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
           </p>
         </div>

         <div className={styles.image}>
           <Image
             src="/Imagenes/Roundnet1.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
         </div>
       </section>

       {/*Informacion*/}
       <section className={styles.informacion} id="informacion">
         <div className={styles.image}>
           <Image
             src="/Imagenes/Roundnet1.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
         </div>

         <div className={styles.content}>
           <h4>Informacion</h4>
           <h1>Esto se juega asi</h1>
           <p>
             {' '}
             bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
             _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
           </p>
         </div>
       </section>

       {/*Video*/}
       <section className={styles.videoTutorial} id="video">
         <iframe
           src="https://www.youtube.com/embed/tc1pEqCGWnw?si=E0uR-O9QJ-0oLdoC"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen
         ></iframe>
       </section>

       {/*Informacion*/}
       <section className={styles.informacion} id="informacion">
         <div className={styles.content}>
           <h4>Informacion</h4>
           <h1>Esto se juega asi</h1>
           <p>
             {' '}
             bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
             _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
           </p>
         </div>

         <div className={styles.image}>
           <Image
             src="/Imagenes/Roundnet1.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
         </div>
       </section>

       {/*Informacion*/}
       <section className={styles.informacion} id="informacion">
         <div className={styles.image}>
           <Image
             src="/Imagenes/Roundnet1.jpg"
             alt="hola"
             layout="responsive"
             width={1000}
             height={500}
             className={styles.imagen}
           />
         </div>

         <div className={styles.content}>
           <h4>Informacion</h4>
           <h1>Esto se juega asi</h1>
           <p>
             {' '}
             bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
             _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
           </p>
         </div>
         </section>

        {/*Banner*/}
         <section className={styles.bannerFinal}></section>

</>
    );
}
 
export default Contents;