import React, { useState, useEffect, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageModal from "../common/ImageModal";

export default function PhotoCard({ image, alt, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const timeoutRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationClass('enter');
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAnimationClass('leave');
    
    // Set a timeout to remove the hovered state after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setAnimationClass('');
    }, 400); // Match this with CSS animation duration
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const imageData = getImage(image.node.childImageSharp);
  const imageTitle = title || image.title || "";
  
  // Capitalize the title
  const formattedTitle = imageTitle ? imageTitle.charAt(0).toUpperCase() + imageTitle.slice(1) : '';
  
  return (
    <>
      <div 
        className={`photo-card-container ${isHovered ? 'hovered' : ''} ${animationClass}`} 
        onClick={handleOpenModal}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <GatsbyImage image={imageData} alt={alt} />
        {isHovered && imageTitle && (
          <div className="photo-title-overlay">
            <div className="title-content">
              <span className="title-text">{formattedTitle}</span>
            </div>
            <div className="decorative-line"></div>
          </div>
        )}
      </div>
      <ImageModal
        imageUrl={image.node.publicURL}
        altText={imageTitle || "FULL SIZE " + alt}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
}
