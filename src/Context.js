import React, { useState, useEffect } from "react";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  function toggleFavorite(id) {
    const modPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(modPhotos);
  }

  useEffect(() => {
    fetch(url, {})
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider value={{ allPhotos, setAllPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
