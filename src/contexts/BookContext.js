import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    // { title: "The way of kings", author: "VHK", id: uuid() },
    // { title: "The name of the wind", author: "VHK", id: uuid() },
    // { title: "The final empire", author: "VHK", id: uuid() },
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
