'use client';
import Header from '../Header';
import Footer from '../Footer';
import '../../global.css';
import styles from './RootLayout.module.css';

const RootLayout = ({ children }) => {
  return (
    <div className={styles['root-layout']}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
