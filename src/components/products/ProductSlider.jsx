import {
  MDBMultiCarousel,
  MDBMultiCarouselItem,
} from "mdb-react-multi-carousel";
import React from "react";

function ProductSlider(props) {
  return (
    <MDBMultiCarousel>
      <MDBMultiCarouselItem
        src={products[0].image}
        alt="Table Full of Spices"
      />
      <MDBMultiCarouselItem
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
        alt="Winter Landscape"
      />
      <MDBMultiCarouselItem
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
        alt="View of the City in the Mountains"
      />
      <MDBMultiCarouselItem
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
        alt="Place Royale Bruxelles"
      />
    </MDBMultiCarousel>
  );
}

export default ProductSlider;
