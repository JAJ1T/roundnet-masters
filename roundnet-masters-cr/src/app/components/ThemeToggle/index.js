'use client';
import { useTheme } from '@/app/contexts/ThemeContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';
  return (
    <button onClick={toggleTheme}>
      <FontAwesomeIcon icon={isDarkTheme ? faToggleOn : faToggleOff} size="xl" />
    </button>
  );
};

export default ThemeToggle;
