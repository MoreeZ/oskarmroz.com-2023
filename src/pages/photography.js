import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
// components
import DefaultPageLayout from "../components/layout/DefaultPageLayout";
import PhotoCard from "../components/photography/PhotoCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//styles
import "../styles/photography/photography-page.scss";
import "../styles/photography/photography-card.scss";
import "../styles/common/image-modal.scss";
import SEO from "../components/layout/SEO";

export default function Photography({ location }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = React.useRef(null);
  const IMAGES_PER_PAGE = 12;

  const data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: {
          relativeDirectory: { regex: "/photography\\/.*|\\/photography$/" }
          extension: { regex: "/(png|jpeg|jpg)/" }
          # Exclude any cache or processed files
          base: { regex: "/^(?!\\.).*/" }
          # Ensure we're only getting actual image files
          sourceInstanceName: { eq: "images" }
        }
        sort: { modifiedTime: DESC }
      ) {
        edges {
          node {
            publicURL
            name
            relativeDirectory
            modifiedTime
            childImageSharp {
              gatsbyImageData(
                width: 800
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
      descriptions: allPlainText(
        filter: {
          relativeDirectory: { regex: "/photography/" }
          name: { eq: "description" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            content
          }
        }
      }
    }
  `);
  
  // Group images by category (subdirectory)
  // Images are already sorted by modifiedTime DESC from the GraphQL query
  // Track unique images to prevent duplicates
  const processedImagePaths = new Set();
  
  const imagesByCategory = data.images.edges.reduce((acc, image) => {
    const relativePath = image.node.relativeDirectory;
    const pathParts = relativePath.split('/');
    const category = pathParts.length > 1 ? pathParts[pathParts.length - 1] : 'uncategorized';
    
    // Create a unique identifier for this image
    const uniqueImageId = `${relativePath}/${image.node.name}`;
    
    // Skip if we've already processed this image
    if (processedImagePaths.has(uniqueImageId)) {
      return acc;
    }
    
    // Mark this image as processed
    processedImagePaths.add(uniqueImageId);
    
    const title = image.node.name.replace(/_/g, ' ');

    const imageWithTitle = {
      ...image,
      title,
      modifiedTime: image.node.modifiedTime
    };

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(imageWithTitle);

    return acc;
  }, {});
  
  // Ensure images within each category are sorted by modifiedTime (newest first)
  Object.keys(imagesByCategory).forEach(category => {
    imagesByCategory[category].sort((a, b) => {
      return new Date(b.modifiedTime) - new Date(a.modifiedTime);
    });
  });
  
  // Get all available categories
  const categories = Object.keys(imagesByCategory);
  
  // Process description files from each category folder
  const categoryDescriptions = data.descriptions.edges.reduce((acc, desc) => {
    const relativePath = desc.node.relativeDirectory;
    const pathParts = relativePath.split('/');
    const category = pathParts[pathParts.length - 1]; // Get the last part of the path (category name)
    
    // Store the description content for this category using PlainText content
    if (desc.node.content) {
      acc[category] = desc.node.content;
    }
    return acc;
  }, {});
  
  console.log('Available categories:', categories);
  console.log('Category descriptions:', categoryDescriptions);
  
  // State for current category description
  const [currentDescription, setCurrentDescription] = useState('');
  
  // Update description when category changes
  useEffect(() => {
    console.log('Active category changed to:', activeCategory);
    console.log('Description for this category:', categoryDescriptions[activeCategory]);
    
    if (activeCategory === 'all') {
      setCurrentDescription('');
    } else {
      setCurrentDescription(categoryDescriptions[activeCategory] || '');
    }
  }, [activeCategory, categoryDescriptions]);
  
  // Filter images based on active category
  const allDisplayedImages = activeCategory === 'all' 
    ? Object.values(imagesByCategory).flat() 
    : imagesByCategory[activeCategory] || [];
    
  // Load more images when category changes or on initial load
  useEffect(() => {
    setVisibleImages([]);
    setPage(1);
    setHasMore(true);
    loadMoreImages(1, activeCategory);
  }, [activeCategory]);
  
  // Function to load more images
  const loadMoreImages = (currentPage, category) => {
    const filteredImages = category === 'all'
      ? Object.values(imagesByCategory).flat()
      : imagesByCategory[category] || [];
      
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    const newImages = filteredImages.slice(startIndex, endIndex);
    
    if (newImages.length > 0) {
      setVisibleImages(prev => [...prev, ...newImages]);
      setPage(currentPage + 1);
    }
    
    // Check if we've loaded all images
    if (endIndex >= filteredImages.length) {
      setHasMore(false);
    }
  };
  
  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (!loaderRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          loadMoreImages(page, activeCategory);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(loaderRef.current);
    
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page, hasMore, activeCategory]);

  return (
    <DefaultPageLayout title="Photography" location={location}>
      <div className="photography-page-wrapper">
        {/* Category selector */}
        <div className="photography-categories">
          <button 
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Category description */}
        {currentDescription && (
          <div className="category-description">
            <p>{currentDescription}</p>
          </div>
        )}
        
        {/* body */}
        <div className="photography-page-content">
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
            <Masonry gutter="10px" className="masonry-grid">
              {visibleImages.map((image, index) => (
                <div key={index} className="masonry-item">
                  <PhotoCard
                    image={image}
                    alt={"Photo gallery item #" + (index + 1)}
                    title={image.title}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          
          {/* Loading indicator */}
          {hasMore && (
            <div className="loading-indicator" ref={loaderRef}>
              <div className="loading-spinner"></div>
              <p>Loading more photos...</p>
            </div>
          )}
          
          {/* No more images message */}
          {!hasMore && visibleImages.length > 0 && allDisplayedImages.length > IMAGES_PER_PAGE && (
            <div className="end-message">
              <p>You've reached the end of the gallery</p>
            </div>
          )}
          
          {/* Empty state */}
          {visibleImages.length === 0 && (
            <div className="empty-state">
              <p>No photos found in this category</p>
            </div>
          )}
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export function Head() {
  return (
    <SEO
      title="Photography: Oskar Mroz, Ireland"
      description="Oskar Mroz, a software developer from Ireland, is passionate about photography, particularly landscape and night photography. Check out his portfolio."
    />
  );
}
