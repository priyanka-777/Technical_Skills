import { useState } from 'react';
import Modal from '../Modal';
import Button from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello Priyanka 👋</h2>
        <p>This is a modal dialog.</p>
      </Modal>
    </>
  );
};
