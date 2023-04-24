import React from "react";

export default function InformationModal({ content, isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isOpen)
    return (
      <div className="information-modal" onClick={closeModal}>
        <div className="information-modal-overlay"></div>
        <div className="information-modal-content">
          {content}
          <div className="close-button">×</div>
        </div>
      </div>
    );
  else return null;
}
