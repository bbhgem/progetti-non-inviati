import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './searchBarComponent.css'

const SearchBar = (props) => {

  const [input, setInput] = useState("");
  // scrive nello stato (= memorizza) quello che scrivo nell'input. Si prende l'evento "onChange" (vedi più in basso) come parametro e scrive, con "setInput", il valore dell'input
  const handleChangeInput = (e) => {
    if(e.target.value === ""){
      props.setBooks(props.booksInit) 
    }
    setInput(e.target.value)
  }

  // filtra tutti i libri in base a quello che ho scritto nell'input e ritorna l'array filtrato
  const filterBooks = () => {
    const filterByTerm = props.allBooks.filter(book => book.title.toLowerCase().includes(input.toLowerCase()))
    props.setBooks(filterByTerm)
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between my-2">
            <input type="text" className="w-100 searchBar" onChange={handleChangeInput} />
            <button className="searchBtn" onClick={filterBooks}>Search</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
