import API from "../../api/api";
import NavBar from "../NavBar";
import Pagination from "../Pagination";
import ProductFilterAccordion from "./ProductFilterAccordion";
import Products from "./Products";
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function ProductsPage(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(props.page);
  const [productsPerPage] = useState(9);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [clubFilter, setClubFilter] = useState(props.club);
  const [brandFilter, setBrandFilter] = useState("");
  const [handFilter, setHandFilter] = useState("");
  const api = new API();

  function handlePriceChange(newPrice) {
    setMaxPrice(newPrice);
    console.log(newPrice);
  }

  function handleFilterChange(category, newValue) {
    if (category === "c") {
      setClubFilter(newValue === clubFilter ? "" : newValue);
      console.log(clubFilter);
    } else if (category === "b") {
      setBrandFilter(newValue === brandFilter ? "" : newValue);
      console.log(brandFilter);
    } else if (category === "h") {
      setHandFilter(newValue === handFilter ? "" : newValue);
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      console.log(maxPrice, clubFilter, brandFilter, handFilter);
      const res = await api.getProducts(
        maxPrice,
        clubFilter,
        brandFilter,
        handFilter
      );
      console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    };
    fetchProducts();
  }, [maxPrice, clubFilter, brandFilter, handFilter]);

  // Get current posts

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar></NavBar>
      <Container fluid className="d-flex">
        <ProductFilterAccordion
          updateRest={handleFilterChange}
          maxPrice={maxPrice}
          updatePrice={handlePriceChange}
        ></ProductFilterAccordion>
        <Container className="ms-5 mt-5">
          <Products products={currentProducts} loading={loading} />
        </Container>
      </Container>
      <div className="d-flex justify-content-center my-5">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </>
  );
}

export default ProductsPage;
