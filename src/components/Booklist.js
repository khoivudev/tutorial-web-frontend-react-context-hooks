import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import uuid from "uuid/v1";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const [theme, setTheme] = useState({});
  const [books, setBooks] = useState([
    { title: "The way of kings", id: uuid() },
    { title: "The name of the wind", id: uuid() },
    { title: "The final empire", id: uuid() },
  ]);

  useEffect(() => {
    setTheme(isLightTheme ? light : dark);
  }, [isLightTheme]);

  const addBook = () => {
    setBooks([...books, { title: "new book", id: uuid() }]);
  };
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
      <button onClick={addBook}>Add book</button>
    </div>
  );
};

export default Booklist;
