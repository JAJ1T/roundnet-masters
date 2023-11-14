'use client';
import Image from 'next/image';
import { useTheme } from '@/app/contexts/ThemeContex';

import LogoLight from '../../../../public/images/logo-light.png';
import LogoDark from '../../../../public/images/logo-dark.png';

const Logo = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Image
        src={isDarkTheme ? LogoDark : LogoLight}
        alt="Logo"
        width={254}
        height={100}
      />
  );
}
 
export default Logo;