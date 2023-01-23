import CartPage from "./cart/CartPage";
import HomePage from "./home/HomePage";
import ProductDetailsPage from "./products/ProductDetailsPage";
import ProductsPage from "./products/ProductsPage";
import ProfilePage from "./profile/ProfilePage";
import RegistrationPage from "./register/RegistrationPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/1" element={<ProductsPage page={1} />} />
        <Route path="/products/2" element={<ProductsPage page={2} />} />
        <Route path="/products/3" element={<ProductsPage page={3} />} />
        <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
