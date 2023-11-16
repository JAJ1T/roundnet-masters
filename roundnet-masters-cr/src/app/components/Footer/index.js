import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import ThemeBackground from '../ThemeBackground';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <h2>Informacion del contacto</h2>
          <a href="#">
           <i><FontAwesomeIcon icon={faEnvelope} /></i> info.roundnetmasters@gmail.com{' '}
          </a>
          <a href="#">
		  <i><FontAwesomeIcon icon={faPhoneFlip} /></i> Roundnet Masters Costa Rica: +506-7254-4097{' '}
          </a>
        </div>
      </div>

      {/* Footer redes sociales */}
      <div className={styles.share}>
        <h3>Siguenos en nuestras redes!!!</h3>
        <a href="#">
          <i><FontAwesomeIcon icon={faFacebookF} /></i>
        </a>
        <a href="#">
          <i><FontAwesomeIcon icon={faInstagram} /></i>
        </a>
        <a href="#">
          <i><FontAwesomeIcon icon={faYoutube} /></i>
        </a>
		<a href="#">
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
