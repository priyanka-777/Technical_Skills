function InputBox({ setMessage }) {
  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}

export default InputBox;
