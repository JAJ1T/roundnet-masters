import { ThemeProvider } from '@/app/contexts/ThemeContex';
import { AuthProvider } from '@/app/contexts/AuthContext';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';


import '@/app/styles/global.scss';
import '@/app/styles/theme.scss';

export const metadata = {
  title: 'Roundnet Masters',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-layout">
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main>
            {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
