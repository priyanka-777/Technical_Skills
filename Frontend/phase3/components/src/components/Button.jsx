import './Button.css';

function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
