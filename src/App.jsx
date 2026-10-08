import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductHoverPopup from './components/ProductHoverPopup';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleProductHover = (product, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: rect.left,
      y: rect.bottom + window.scrollY
    });
    setHoveredProduct(product);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 relative flex flex-col justify-between">
        <div>
          <Navbar 
            onProductHover={handleProductHover}
            onProductLeave={handleProductLeave}
          />
          
          <ProductHoverPopup 
            product={hoveredProduct}
            position={hoverPosition}
            onClose={handleProductLeave}
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}