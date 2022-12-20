import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import ProfilePage from './ProfilePage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;