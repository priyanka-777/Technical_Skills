import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

function ThemeToggler() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Current Theme: {mode}</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
