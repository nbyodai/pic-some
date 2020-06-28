import React, { useState, useEffect } from "react";

const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url, {})
      .then((response) => response.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider value={{ allPhotos, setAllPhotos }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
