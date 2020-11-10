import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { v4 as uuid } from "uuid";
import { BookContext } from "../contexts/BookContext";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books, setBooks } = useContext(BookContext);
  const [theme, setTheme] = useState({});

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
