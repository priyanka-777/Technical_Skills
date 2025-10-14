import { useSelector } from 'react-redux';
import ThemeToggler from './Components/ThemeToggler';

function App() {
  const mode = useSelector((state) => state.theme.mode);

  const appStyles = {
    backgroundColor: mode === 'light' ? '#ffffff' : '#222222',
    color: mode === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div style={appStyles}>
      <ThemeToggler />
    </div>
  );
}

export default App;
