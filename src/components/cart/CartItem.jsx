import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

function CartItem({ item }) {
  return (
    <Container>
      <div>
        <Card>
          <ul>
            <li>{item.product_id}</li>
            <li>{item.brand}</li>
            <li>{item.model}</li>
            <li>{item.price}</li>
            <li>Quantity:{item.qty}</li>
          </ul>
        </Card>
      </div>
    </Container>
  );
}

export default CartItem;
