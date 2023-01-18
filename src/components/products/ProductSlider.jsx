import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { MDBMultiCarousel, MDBMultiCarouselItem } from 'mdb-react-multi-carousel';

function ProductSlider(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await Axios.get("http://localhost:3001/products", {});
            setProducts(res.data);
            setLoading(false);
        }
        fetchProducts();
    }, []);


    return (
        <MDBMultiCarousel>
            <MDBMultiCarouselItem
                src={products[0].image}
                alt='Table Full of Spices'
            />
            <MDBMultiCarouselItem
                src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp'
                alt='Winter Landscape'
            />
            <MDBMultiCarouselItem
                src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp'
                alt='View of the City in the Mountains'
            />
            <MDBMultiCarouselItem
                src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp'
                alt='Place Royale Bruxelles'
            />
        </MDBMultiCarousel>
    );
}

export default ProductSlider;