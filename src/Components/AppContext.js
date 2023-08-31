// AppContext.js

import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext('');

function AppProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [hovered, setHovered] = useState(false); // For Module 5

  useEffect(() => {
	fetch('https://raw.githubusercontent.com/bobziroll/scrimba-reactbootcampimages/master/images.json')
	  .then((response) => response.json())
	  .then((data) => {
		console.log(data); // Logs the data to check if it's fetched
		setPhotos(data); // Set fetched data to photos state
	  })
	  .catch((error) => {
		console.error('Error fetching data:', error);
	  });
  }, []);
  

  return (
    <AppContext.Provider value={{ photos, hovered, setHovered }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
