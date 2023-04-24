import React from "react";

export default function InformationModal({ content, isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isOpen)
    return (
      <div
        className="information-modal"
        onClick={closeModal}
        data-aos="fade-in"
        data-aos-duration="200"
      >
        <div className="information-modal-overlay"></div>
        <div
          className="information-modal-content"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          {content}
          <div className="close-button">×</div>
        </div>
      </div>
    );
  else return null;
}
