import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2";

function ProductDetailsPage(props) {
  const [productDetails, setProductDetails] = useState([]);
  const { userId } = useContext(UserContext);
  let productId = getProductId();

  function getProductId() {
    console.log("getProductId() executed");
    let url = window.location.href;
    const parsedURL = new URL(url);

    // Get the pathname from the parsed URL and split it by '/'
    const pathSegments = parsedURL.pathname.split("/");

    // Filter out any empty segments and get the last one
    const lastSegment = pathSegments.filter((segment) => segment !== "").pop();

    // Parse the last segment as an integer
    const productId = parseInt(lastSegment, 10);

    return isNaN(productId) ? null : productId;
  }

  useEffect(() => {
    const api1 = new API();
    api1.getProductDetails(productId).then((result) => {
      if (result.data) {
        setProductDetails(result.data[0]);
      } else {
        console.log("Error retrieving product");
      }
    });
  }, [productId]);

  async function handleAddToCart() {
    const api2 = new API();
    console.log(userId);
    if (userId !== 0) {
      api2.addToCart(userId, productDetails.id);
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
