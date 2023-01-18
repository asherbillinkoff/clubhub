import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

function CartSummaryMDB({ items }) {
  function getSubtotal(items) {
    let sum = 0;
    for (const item of items) {
      sum = sum + item.price * item.qty;
    }
    return sum;
  }

  let subtotal = getSubtotal(items);

  return (
    <MDBCard className="mb-4">
      <MDBCardHeader>
        <MDBTypography tag="h5" className="mb-0">
          Summary
        </MDBTypography>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBListGroup flush>
          <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products
            <span>${subtotal}</span>
          </MDBListGroupItem>
          <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
            Taxes (12%)
            <span>${(subtotal * 0.12).toFixed(2)}</span>
          </MDBListGroupItem>
          <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>${(subtotal * 1.12).toFixed(2)}</strong>
            </span>
          </MDBListGroupItem>
        </MDBListGroup>

        <MDBBtn block size="lg">
          Go to checkout
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default CartSummaryMDB;
