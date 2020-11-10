import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The way of kings", id: uuid() },
    { title: "The name of the wind", id: uuid() },
    { title: "The final empire", id: uuid() },
  ]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
