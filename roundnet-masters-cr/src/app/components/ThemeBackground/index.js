'use client';
import { useTheme } from '@/app/contexts/ThemeContex';

const ThemeBackground = ({ element = 'div', accent = false, children }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const themeClassName = isDarkTheme ? 'dark-mode' : 'light-mode';
  const transitionStyle = {
    transition: 'background 500ms ease-in-out',
  };

  if (element === 'div') {
    return (
      <div className={themeClassName} style={transitionStyle}>
        {children}
      </div>
    );
  }
  if (element === 'section') {
    return (
      <section className={themeClassName} style={transitionStyle}>
        {children}
      </section>
    );
  }
  if (element === 'article') {
    return (
      <article className={themeClassName} style={transitionStyle}>
        {children}
      </article>
    );
  }
  if (element === 'aside') {
    return (
      <aside className={themeClassName} style={transitionStyle}>
        {children}
      </aside>
    );
  }
};

export default ThemeBackground;
