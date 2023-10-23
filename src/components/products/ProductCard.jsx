import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function ProductCard(props) {
  const navigate = useNavigate();
  const api = new API();
  const { userId } = useContext(UserContext);

  function sendToProductDetails(event) {
    console.log(event);
    let id = event.target.id;
    navigate(`/productdetails/${id}`);
  }

  function handleAddWishlist(event) {
    if (userId !== 0) {
      let id = event.target.id;
      api.addToWishlist(id);
      console.log("UserID: ", userId, " ProductID: ", id);
      Swal.fire("Success!", "Item has been added to your Wishlist", "success");
    } else {
      Swal.fire(
        "Oops...",
        "Please login before adding items to Wishlist",
        "error"
      );
    }
  }

  return (
    <Card className="mx-4" style={{ maxWidth: "15rem" }}>
      <Card.Img variant="top" src={`${props.product.image}`} />
      <Card.Body>
        <Card.Title>
          <h4>{props.product.model}</h4>
        </Card.Title>
        <Card.Text>
          <div>
            <p>
              <strong>{props.product.brand}</strong>
            </p>
          </div>
          <div>
            <span>${props.product.price}</span>
          </div>
        </Card.Text>
        <Button
          onClick={sendToProductDetails}
          variant="primary"
          id={props.product.id}
        >
          View
        </Button>
        <MDBBtn
          onClick={handleAddWishlist}
          className="ms-2"
          size="md"
          title="Move to the wish list"
          color="danger"
          id={props.product.id}
        >
          <MDBIcon fas icon="heart" />
        </MDBBtn>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
