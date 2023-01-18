import API from "../../api/api";
import {
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
import React from "react";

function CartItemMDB({ item }) {
  const api = new API();

  function handleAddToCart(item_id) {
    api.updateCart(item_id);
    console.log("Add cart fired in item component", item_id);
  }

  function handleRemoveFromCart(item_id) {
    api.removeFromCart(item_id);
    console.log("Remove from cart fired in item component", item_id);
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

          <MDBTooltip
            wrapperProps={{ size: "sm" }}
            wrapperClass="me-1 mb-2"
            title="Remove item"
          >
            <MDBIcon fas icon="trash" />
          </MDBTooltip>

          <MDBTooltip
            wrapperProps={{ size: "sm", color: "danger" }}
            wrapperClass="me-1 mb-2"
            title="Move to the wish list"
          >
            <MDBIcon fas icon="heart" />
          </MDBTooltip>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
            <MDBBtn
              className="px-3 me-2"
              onClick={() => handleRemoveFromCart(item.item_id)}
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

export default CartItemMDB;
