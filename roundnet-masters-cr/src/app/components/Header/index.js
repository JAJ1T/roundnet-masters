'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/app/contexts/ThemeContex';
import LogoLight from '../../../../public/images/logo-light.png';
import LogoDark from '../../../../public/images/logo-dark.png';

import styles from './Header.module.scss';


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <header className={styles.header}>
      <Image src={isDarkTheme ? LogoDark : LogoLight } alt="Logo" width={'auto'} height={100} />
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/nosotros">¿Quienes somos?</Link>
        <Link href="/roundnet">Roundnet</Link>
        <Link href="/eventos">Eventos</Link>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
    </header>
  );
};

export default Header;
