import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The way of kings", author: "VHK", id: uuid() },
    { title: "The name of the wind", author: "VHK", id: uuid() },
    { title: "The final empire", author: "VHK", id: uuid() },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
