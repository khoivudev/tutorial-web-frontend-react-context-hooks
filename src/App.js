import "./App.css";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Navbar />
            <Booklist />
            <ThemeToggle />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
