import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function ProductDetailsPage(props) {
  const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const productId = getProductId();
  const api = new API();

  function getProductId() {
    console.log("product details page");
    let url = window.location.href;
    const re = new RegExp("http://localhost:3000/productdetails/");
    let productId = url.replace(re, "");
    return productId;
  }

  useEffect(() => {
    api.getProductDetails(productId).then((result) => {
      if (result.data) {
        setProductDetails(result.data[0]);
      } else {
        console.log("Error retrieving product");
      }
    });
  }, []);

  async function handleAddToCart() {
    console.log(userId);
    if (userId !== 0) {
      api.addToCart(userId, productDetails.id);
      console.log(productDetails.id);
      Swal.fire("Success!", "Item has been added to your cart", "success");
    } else {
      Swal.fire("Oops...", "Please login before adding items to cart", "error");
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <Container className="d-flex justify-content-evenly mt-5">
        <div
          className="d-flex"
          style={{
            backgroundColor: "lightgrey",
            width: "800px",
            height: "500px",
          }}
        >
          <Image
            className="mx-auto mt-5"
            style={{
              border: "black solid 1px",
              borderRadius: "30px",
              maxWidth: "300px",
              maxHeight: "300px",
            }}
            src={productDetails.image}
            alt="club details"
          ></Image>
          <div className="mt-5 me-5">
            <h1>{productDetails.model}</h1>
            <h3>${productDetails.price}</h3>
            <p>Hand: {productDetails.hand ? "Left" : "Right"}</p>
            <p>Shaft Type: {productDetails.shaft_model}</p>
            <p>Shaft Flex: {productDetails.shaft_flex}</p>
            <p>Loft: {productDetails.loft}</p>
            <Button
              onClick={handleAddToCart}
              variant="primary"
              info={productDetails}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductDetailsPage;
