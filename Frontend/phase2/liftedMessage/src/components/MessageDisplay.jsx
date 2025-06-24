function MessageDisplay({ message }) {
  return (
    <div>
      <h2>📬 You typed:</h2>
      <p style={{ fontSize: '24px', color: '#5c67f2' }}>{message}</p>
    </div>
  );
}

export default MessageDisplay;
