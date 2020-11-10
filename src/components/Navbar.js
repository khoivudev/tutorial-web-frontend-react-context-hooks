import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { books } = useContext(BookContext);

  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme(isLightTheme ? light : dark);
  }, [isLightTheme]);

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h3>Current you have {books.length}</h3>
    </nav>
  );
};

export default Navbar;
