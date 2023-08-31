// Photos.js (or the component where you display images)

import React, { useContext } from 'react';
import { AppContext } from '../Components/AppContext';

function Photos() {
  const { photos, hovered, setHovered } = useContext(AppContext);

  const handleMouseEnter = () => {
    setHovered(true); // Set hovered to true when the mouse enters
  };

  const handleMouseLeave = () => {
    setHovered(false); // Set hovered to false when the mouse leaves
  };

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={photo.url} alt={photo.title} />
          {hovered && <i className="ri-heart-line favorite"></i>}
          {hovered && <i className="ri-add-circle-line cart"></i>}
        </div>
      ))}
    </div>
  );
}

export default Photos;
