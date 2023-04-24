import React from "react";

export default function ImageModal({ imageUrl, altText, isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isOpen)
    return (
      <div
        className="image-modal"
        onClick={closeModal}
        // data-aos="fade-in"
        // data-aos-duration="200"
      >
        <div className="image-modal-overlay"></div>
        <div
          className="image-modal-content"
          // data-aos="zoom-in"
          // data-aos-duration="300"
        >
          <img src={imageUrl} alt={altText} />
        </div>
      </div>
    );
  else return null;
}
