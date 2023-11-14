import { ThemeProvider } from '@/app/contexts/ThemeContex';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

import '@/app/styles/global.scss';
import '@/app/styles/theme.scss';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-layout">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
