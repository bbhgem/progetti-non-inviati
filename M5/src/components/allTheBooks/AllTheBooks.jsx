import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FantasyBooks from "../../dataBooks/fantasy.json";
import SingleBook from "../singleBook/SingleBook";

const AllTheBooks = (props) => {
  
  return (
    <Container>
      <Row>
        {props.allBooks.map((book) => (
          <Col xs={12} md={4} lg={3}>
            <SingleBook
              key={book.asin}
              title={book.title}
              img={book.img}
              price={book.price}
              category={book.category}
              asin={book.asin}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
