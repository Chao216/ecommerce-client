import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { item } = props; // here props is passed from homescreen
  return (
    <Card key={item.slug} className="product">
      <Link to={`/product/${item.slug}`}>
        <img src={item.image} className="card-img-top" alt={item.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${item.slug}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Rating Rating={item.rating} ReviewNum={item.reviewNum}></Rating>
        <Card.Text>{item.price}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
