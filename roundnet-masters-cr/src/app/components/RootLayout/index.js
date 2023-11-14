'use client';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/global.scss';
import styles from './RootLayout.module.scss';
import { ThemeProvider } from '@/app/contexts/ThemeContex';

const RootLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className={styles['root-layout']}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
