// src/App.jsx
import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useState } from "react";
import "./app.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <h1>Welcome to My App</h1>

      <Card title="Hello!" description="This is a card." />
      <Button onClick={() => setModalOpen(true)} label="Open Model" />

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <p>This is the modal content</p>
      </Modal>
      <div>
        <h1>🌐 Web Component: Custom Alert Box</h1>

        <alert-box message="This is an info alert!"></alert-box>
        <alert-box message="Be careful!" type="warning"></alert-box>
        <alert-box message="Something went wrong." type="error"></alert-box>
      </div>
    </div>
  );
}

export default App;
