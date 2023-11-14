'use client';
import { useTheme } from '@/app/contexts/ThemeContex';

const ThemeBackground = ({ element = 'div', children }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const themeClassName = isDarkTheme ? 'dark-mode' : 'light-mode';

  if (element === 'div') {
    return (
      <div className={themeClassName}>
        {children}
      </div>
    )
  }
  if (element === 'section') {
    return (
      <section className={themeClassName}>
        {children}
      </section>
    )
  }
  if (element === 'article') {
    return (
      <article className={themeClassName}>
        {children}
      </article>
    )
  }
  if (element === 'aside') {
    return (
      <aside className={themeClassName}>
        {children}
      </aside>
    )
  }
}
 
export default ThemeBackground;