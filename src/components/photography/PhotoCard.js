import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageModal from "../common/ImageModal";

export default function PhotoCard({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const imageData = getImage(image.node.childImageSharp);
  return (
    <>
      <div className="photo-card-container" onClick={handleOpenModal}>
        <GatsbyImage image={imageData} />
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
