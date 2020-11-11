import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :)</div>
  );
};

export default Booklist;
