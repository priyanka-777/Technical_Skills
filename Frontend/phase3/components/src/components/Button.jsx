import '../styles/Button.css'

const Button = ({ label, onClick, variant = 'primary' })=>{
   return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
export default Button;
