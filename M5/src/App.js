import { useState, useEffect } from "react";
import MyNav from "./components/myNav/MyNav";
import Welcome from "./components/welcome/Welcome";
import SearchBarComponent from "./components/searchBar/SearchBarComponent"
import MyFooter from "./components/myFooter/MyFooter";
import AllTheBooks from "./components/allTheBooks/AllTheBooks";
import FantasyBooks from "./dataBooks/fantasy.json";

const App = () => {
  const [books, setBooks] = useState(FantasyBooks)
  const [booksInit, setBooksInit] = useState(FantasyBooks)

  return (
    <>
      <MyNav />
      <Welcome />
                  {/*lo stato di lettura*/} {/*per scrivere*/} {/*stato iniziale*/}
      <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit} />
      <AllTheBooks allBooks={books} />
      <MyFooter />
    </>
  );
}

export default App;