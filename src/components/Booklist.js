import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { v4 as uuid } from "uuid";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(isLightTheme ? light : dark);
  }, [isLightTheme]);

  return books.length ? (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
      <button onClick={() => {}}>Add book</button>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :)</div>
  );
};

export default Booklist;
