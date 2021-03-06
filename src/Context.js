import React, { useState, useEffect } from "react";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url, {})
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

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

  function addCartItem(img) {
    setCartItems((prevCartItems) => [...prevCartItems, img]);
  }

  function removeCartItem(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  }

  function emptyCartItems(id) {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        setAllPhotos,
        toggleFavorite,
        addCartItem,
        removeCartItem,
        emptyCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
