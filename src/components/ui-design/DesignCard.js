import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageModal from "../common/ImageModal";

export default function DesignCard({ image, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const imageData = getImage(image.node.childImageSharp);
  return (
    <>
      <div className="ui-design-card-container box" onClick={handleOpenModal}>
        <span className="hover-line"></span> 
        <span className="hover-line"></span>
        <span className="hover-line"></span>
        <span className="hover-line"></span>
        <GatsbyImage image={imageData} alt={alt}/>
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
