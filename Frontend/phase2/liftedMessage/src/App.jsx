import { useState } from 'react';
import InputBox from './components/InputBox';
import MessageDisplay from './components/MessageDisplay';

function App() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🔁 Lifted State Example</h1>
      <InputBox setMessage={setMessage} />
      <MessageDisplay message={message} />
    </div>
  );
}

export default App;
