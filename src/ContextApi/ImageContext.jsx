import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const ImageContextApi = createContext();

// Custom hook to use the ImageContextApi
export const useImageContextApi = () => {
  return useContext(ImageContextApi);
};

// Function to fetch images
const getImages = async (setAllImages, searchImage) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchImage}&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`
    );

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    // Extract the images from the data, depending on the structure
    setAllImages(data.results || []); // Assuming images are in 'results' array
  } catch (error) {
    console.error(error);
  }
};

// Context Provider Component
export const ImageContextProvider = ({ children }) => {
  const [allImages, setAllImages] = useState([]);
  const [searchImage, setSearchImage] = useState("");

  useEffect(() => {
    getImages(setAllImages, searchImage);
  }, [searchImage]);

  return (
    <ImageContextApi.Provider value={{ allImages, setSearchImage }}>
      {children}
    </ImageContextApi.Provider>
  );
};
