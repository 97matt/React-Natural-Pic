import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const endpoint = "/fotos.json";

const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const res = await axios.get(endpoint);
    setPhotos(res.data.photos);
  };

  const likeAndUnlikePhoto = (id) => {
    let newPhotos = photos.map((p) => {
      if (p.id === id) {
        p.liked = !p.liked;
        if (p.liked) {
          setFavorites([...favorites, p]);
        } else {
          let newFav = favorites.filter((fP) => fP.id !== p.id);
          setFavorites(newFav);
        }
      }
      return p;
    });
    setPhotos(newPhotos);
  };

  return (
    <PhotosContext.Provider value={{ photos, likeAndUnlikePhoto, favorites }}>
      {children}
    </PhotosContext.Provider>
  );
};

export { PhotosProvider };
export default PhotosContext;
