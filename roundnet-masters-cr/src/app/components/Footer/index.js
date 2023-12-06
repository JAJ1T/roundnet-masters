import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h2>Informacion del contacto</h2>
          <a href="mailto:info@roundnetmasters.com?subject=Escribe%20Aqui">
           <i><FontAwesomeIcon icon={faEnvelope} /></i> info.roundnetmasters@gmail.com{' '}
          </a>
          <a href="https://wa.me/50672544097">
		  <i><FontAwesomeIcon icon={faPhoneFlip} /></i> Roundnet Masters Costa Rica: +506-7254-4097{' '}
          </a>
        </div>
      </div>

      {/* Footer redes sociales */}
      <div className={styles.share}>
        <h3>Siguenos en nuestras redes!!!</h3>
        <a href="https://www.facebook.com/profile.php?id=61552064259132">
          <i><FontAwesomeIcon icon={faFacebookF} /></i>
        </a>
        <a href="https://www.instagram.com/roundnetmasters/?hl=en">
          <i><FontAwesomeIcon icon={faInstagram} /></i>
        </a>
        <a href="https://www.youtube.com/@RoundnetMasterscr">
          <i><FontAwesomeIcon icon={faYoutube} /></i>
        </a>
		<a href="https://www.tiktok.com/@roundnet.masters">
          <i><FontAwesomeIcon icon={faTiktok} /></i>
        </a>
      </div>

      {/* Creditos finales */}
      <div className={styles.credit}>
        Pagina web Oficial de Roundnet Masters Costa Rica | Todos los derechos están reservados
      </div>
    </footer>
  );
};

export default Footer;
