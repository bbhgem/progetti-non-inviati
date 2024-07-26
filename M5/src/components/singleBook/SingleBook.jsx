import "./singleBook.css";
import { Col, Card, CardBody } from "react-bootstrap";
import { useState } from "react";



const SingleBook = ({ asin, title, img, price, category }) => {

  const [selectedBook, setSelectedBook] = useState([]) // stringa vuota che poi ritornerà l'asin del libro cliccato
  const handleSelected = (asin) => {
    if (selectedBook.includes(asin)) {
      const selectionBook = selectedBook.filter(bookId => bookId !== asin)
      setSelectedBook(selectionBook)
    } else {
      setSelectedBook([...selectedBook, asin])
    }
  }

  return (
    <Col>
      <div
        className={`${selectedBook.includes(asin) ? "bg-color-selected" : "" }`} 
        onClick={() => handleSelected(asin)} 
        >
      <Card className="card-container">
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Img className="card-img" src={img} alt={title} />
        <CardBody>
          <Card.Text className="m-0">
            Genre: {category} <br />
            Price: {price} $
          </Card.Text>
        </CardBody>
      </Card>
      </div>
      
    </Col>
  );
};
export default SingleBook;
