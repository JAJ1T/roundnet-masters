'use client';
import RootLayout from '../components/RootLayout';
import Intro from './sections/Intro';
import Galeria from './sections/Galeria';
import Outro from './sections/Outro';

const Nosotros = () => {
  return (
    <RootLayout>
      <main>
        <Intro />
        <Galeria />
        <Outro />
      </main>
    </RootLayout>
  );
};

export default Nosotros;
