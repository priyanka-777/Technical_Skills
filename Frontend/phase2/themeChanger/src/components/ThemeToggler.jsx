import { useTheme } from '../ThemeContext';

function ThemeToggler() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggler;
