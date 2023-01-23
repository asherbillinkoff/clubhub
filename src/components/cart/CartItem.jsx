import API from "../../api/api";
import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import React from "react";

function CartItem({ item }) {
  const api = new API();
  const [quantity, setQuantity] = useState(item.qty);
  console.log(quantity);

  function handleAddToCart(item_id) {
    api.updateCart(item_id);
    console.log("Add cart fired in item component", item_id);
    setQuantity(item.qty);
  }

  function handleRemoveItem(item_id) {
    api.removeItem(item_id);
    console.log("Remove from cart fired in item component", item_id);
    setQuantity(item.qty);
  }

  function handleRemoveProduct(item_id) {
    api.removeProduct(item_id);
    console.log("Remove product fired in item component", item_id);
    setQuantity(item.qty);
  }

  return (
    <>
      <MDBRow>
        <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
          <MDBRipple
            rippleTag="div"
            rippleColor="light"
            className="bg-image rounded hover-zoom hover-overlay"
          >
            <img src={item.image} className="w-100" />
            <a href="#!">
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
          <p>
            <strong>{item.model}</strong>
          </p>
          <p>{item.brand}</p>
          <p>{item.shaft_model}</p>

          <MDBBtn size="sm" onClick={() => handleRemoveProduct(item.item_id)}>
            <MDBIcon fas icon="trash" />
          </MDBBtn>

          <MDBBtn size="sm" title="Move to the wish list" color="danger">
            <MDBIcon fas icon="heart" />
          </MDBBtn>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <MDBBtn
              className="px-3 me-2"
              onClick={() => handleRemoveItem(item.item_id)}
            >
              <MDBIcon fas icon="minus" />
            </MDBBtn>

            <MDBInput
              defaultValue={item.qty}
              min={0}
              type="number"
              label="Quantity"
            />

            <MDBBtn
              className="px-3 ms-2"
              onClick={() => handleAddToCart(item.item_id)}
            >
              <MDBIcon fas icon="plus" />
            </MDBBtn>
          </div>

          <p className="text-start text-md-center">
            <strong>${item.price}</strong>
          </p>
        </MDBCol>
      </MDBRow>
      <hr className="my-4" />
    </>
  );
}

export default CartItem;
