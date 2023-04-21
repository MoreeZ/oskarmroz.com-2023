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
        <GatsbyImage image={imageData} alt={alt}/>
        {/* Idfk why I need 5 spans instead of 4. css doesn't target first child.. */}
        <span className="hover-line"></span> 
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
