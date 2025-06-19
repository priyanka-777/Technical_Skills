import { useTheme } from './ThemeContext';
import ThemeToggler from './components/ThemeToggler';
import './styles/App.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>🌗 Theme Switcher</h1>
      <ThemeToggler />
      <p>The current theme is: <strong>{theme}</strong></p>
    </div>
  );
}

export default App;
