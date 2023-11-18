import Link from 'next/link';
import Logo from '@/app/components/Logo';
import ThemeToggle from '@/app/components/ThemeToggle';
import ThemeBackground from '@/app/components/ThemeBackground';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <ThemeBackground element="div" accent={true}>
      <header className={styles.header}>
        <Logo />
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">¿Quienes somos?</Link>
          <Link href="/roundnet">Roundnet</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/productos">Productos</Link>
        </nav>
        <ThemeToggle />
      </header>
    </ThemeBackground>
  );
};

export default Header;
