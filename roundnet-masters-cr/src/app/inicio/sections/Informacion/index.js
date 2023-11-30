"use client";
import Image from "next/image";
import RoundnetImage from "../../images/roundnet_01.jpeg";
import RoundnetImage2 from "../../images/roundnet_02.jpg";
import styles from "./Informacion.module.scss";
import ThemeBackground from "@/app/components/ThemeBackground";

const Informacion = () => {
  return (
    <>
      <ThemeBackground>
        <section className={styles.informacion}>
          <div className={styles.content}>
            <h4>Historia</h4>
            <p>
              {" "}
              bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
              _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
            </p>
          </div>

          <div className={styles.image}>
            <Image
              src={RoundnetImage}
              alt="hola"
              width={"auto"}
              height={"auto"}
            />
          </div>
        </section>
     

      <section className={styles.informacion}>
        <div className={styles.image}>
          <Image
            src={RoundnetImage2}
            alt="hola"
            width={"auto"}
            height={"auto"}
          />
        </div>

        <div className={styles.content}>
          <h4>Informacion</h4>
          <h1>Esto se juega asi</h1>
          <p>
            {" "}
            bla bla bla bla bla bla bla bla bla bla bla bla _blankbla bla
            _blankbla bla bla bla bla bla bla bla bla bla bla bla blabla
          </p>
        </div>
      </section>
      </ThemeBackground>
    </>
  );
};

export default Informacion;
