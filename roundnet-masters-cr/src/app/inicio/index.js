import SocialMedia from "@/app/components/SocialMedia";
import Hero from "./sections/Hero";
import Informacion from "./sections/Informacion";
import Media from "./sections/Media";

import styles from "./Inicio.module.scss";

const Inicio = () => {
  return (
    <>
      <Hero />
      <Informacion />
      <Media />
      <SocialMedia className={styles['social-media']} />
    </>
  );
};

export default Inicio;
