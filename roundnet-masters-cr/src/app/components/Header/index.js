import Image from 'next/image';
import Link from 'next/link';
import LogoLight from '../../../../public/images/logo-light.png';

import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={LogoLight} alt="Logo" width={'auto'} height={100} />
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">¿Quienes somos?</Link>
        <Link href="/roundnet">Roundnet</Link>
        <Link href="/eventos">Eventos</Link>
      </nav>
    </header>
  );
};

export default Header;
