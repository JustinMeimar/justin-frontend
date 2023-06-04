import React from 'react';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';

Modal.setAppElement('#root') // This is required for screen readers

export default function InfoModal({ isOpen, onRequestClose, content }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
        <ReactMarkdown>
            {content}
        </ReactMarkdown>
        <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}