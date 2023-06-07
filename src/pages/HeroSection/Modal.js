import React, { useEffect, useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        setInterval(() => {
            setIsOpen(false)
        }, 20000);
    })
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <ModalArea isOpen={isOpen} onClose={closeModal} />
        </div>
    );
};

export default Modal;

export const ModalArea  = ({isOpen,onClose}) => {
    if (!isOpen) return null;
    const handleClose = () => {
        onClose();
      };
   
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>Modal content goes here.</p>
          <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 rounded bg-red-500 text-white"
            onClick={handleClose} // Update the event handler here
          >
              Close
            </button>
          </div>
        </div>
      </div>
    );
};
