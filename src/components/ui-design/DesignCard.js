import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageModal from "../common/ImageModal";

export default function Design({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const imageData = getImage(image.node.childImageSharp);
  return (
    <>
      <div className="ui-design-card-container box" onClick={handleOpenModal}>
        <GatsbyImage image={imageData} />
        <span className="hover-line"></span>
        <span className="hover-line"></span>
        <span className="hover-line"></span>
        <span className="hover-line"></span>
      </div>
      <ImageModal
        imageUrl={image.node.publicURL}
        altText="Example Image"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
}
