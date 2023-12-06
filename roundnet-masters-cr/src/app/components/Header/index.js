"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import ThemeToggle from "@/app/components/ThemeToggle";
import styles from "./Header.module.scss";

const Header = () => {
  const headerRef = useRef(null);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const header = headerRef.current;
    const sticky = header.offsetTop;
    if (window.scrollY > sticky) {
      header.classList.add(styles.sticky);
      setSticky(true);
    } else {
      header.classList.remove(styles.sticky);
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles["header-container"]}>
      <div className={styles.header} ref={headerRef}>
        {isSticky && (
          <div className={styles['header_logo']}>
            <Logo />
          </div>
        )}

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/roundnet">Roundnet</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>

        {isSticky && (
          <div className={styles["header_toggle"]}>
            Modo Oscuro <ThemeToggle />
          </div>
        )}
      </div>
      {!isSticky && (
        <div className={styles.subheader}>
          Modo Oscuro <ThemeToggle color="#a1a1a1" />
        </div>
      )}
    </header>
  );
};

export default Header;
