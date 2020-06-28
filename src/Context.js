import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  return (
    <Context.Provider value={{ allPhotos, setAllPhotos }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
