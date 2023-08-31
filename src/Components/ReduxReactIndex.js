import React, { useContext } from 'react';
import { AppContext } from './AppContext';

function ReduxReactIndex() {
    // Use the useContext hook to access the context
    const { photos } = useContext(AppContext);
  
    if (!photos) {
        return <div> No photos found </div>; // displays if photos are not found
      }
    
      return (
        <div id='photos-container'>
          <h1>My Redux React App</h1>
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} />
          ))}
        </div>
      );
    }
  
  export default ReduxReactIndex;
  