import './Card.css';

function Card({ title, description, footer }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
}

export default Card;
