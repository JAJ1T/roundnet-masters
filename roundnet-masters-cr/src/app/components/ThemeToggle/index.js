'use client';
import { useTheme } from '@/app/contexts/ThemeContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ color }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';
  return (
    <button
      onClick={toggleTheme}
      className={`${styles['theme-toggle']} ${
        isDarkTheme ? styles.dark : styles.light
      }`}
      style={{ color: color }}
    >
      <FontAwesomeIcon
        icon={isDarkTheme ? faToggleOn : faToggleOff}
        className={styles['theme-toggle-icon']}
      />
    </button>
  );
};

export default ThemeToggle;
