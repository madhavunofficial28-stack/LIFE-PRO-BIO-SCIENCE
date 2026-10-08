import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Automatically close mobile menu on page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      {/* Full width container with extra right padding */}
      <div className="w-full pl-6 md:pl-10 pr-6 md:pr-20 h-20 flex items-center justify-between relative z-50">
        
        {/* Brand Logo - Updated to PNG format without background */}
        <a href="/" className="flex items-center">
          <img
            src="\life pro bioscience white logo.jpeg"
            alt="LIFE BIO SCIENCE"
            className="h-[60px] w-auto object-contain bg-transparent"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="/about" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            About Us
          </a>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => {
              setIsProductsOpen(false);
              setHoveredProduct(null);
            }}
          >
            <button
              className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 flex items-center gap-1 py-6 transition-colors cursor-pointer"
            >
              Products <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>

            {/* Compact Mega Menu Box */}
            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[420px]">
                
                {/* Pointer Arrow */}
                <div className="w-4 h-4 bg-white rotate-45 border-t border-l border-slate-200/80 absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>

                {/* Main Card Container */}
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-4 relative z-20 overflow-hidden">
                  
                  {/* Products List with Thumbnails */}
                  <div className="space-y-2">
                    {PRODUCTS_DATA.map((product) => {
                      const isHovered = hoveredProduct?.id === product.id;

                      return (
                        <a
                          key={product.id}
                          href={`/product/${product.id}`}
                          onMouseEnter={() => setHoveredProduct(product)}
                          className={`flex items-center justify-between p-2.5 rounded-2xl transition-all duration-200 group/item ${
                            isHovered
                              ? 'bg-blue-50/90 text-blue-600 shadow-xs'
                              : 'bg-slate-50/60 hover:bg-blue-50/80'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {/* Product Thumbnail Image */}
                            <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200/80 shrink-0 bg-slate-100 shadow-xs">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-110"
                              />
                            </div>

                            <span className={`text-xs font-bold transition-colors ${
                              isHovered ? 'text-blue-600' : 'text-slate-800 group-hover/item:text-blue-600'
                            }`}>
                              {product.name}
                            </span>
                          </div>

                          <ChevronRight size={16} className={`text-blue-500 transition-all mr-1 ${
                            isHovered ? 'opacity-100 translate-x-1' : 'opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5'
                          }`} />
                        </a>
                      );
                    })}
                  </div>

                </div>
              </div>
            )}
          </div>

          <a href="/services" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="/contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Button with enhanced click area and z-index */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-slate-700 hover:text-blue-600 cursor-pointer relative z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Absolute or direct dropdown under navbar */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-4 space-y-2 z-40">
          <a href="/" className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600">
            Home
          </a>
          <a href="/about" className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600">
            About Us
          </a>
          
          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-semibold text-slate-800 hover:text-blue-600 cursor-pointer"
            >
              <span>Products</span>
              <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180 text-blue-600' : ''}`} />
            </button>

            {isMobileProductsOpen && (
              <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl my-1 border border-slate-100">
                {PRODUCTS_DATA.map((product) => (
                  <a
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="flex items-center gap-2.5 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600"
                  >
                    <img src={product.image} alt={product.name} className="w-6 h-6 rounded-md object-cover" />
                    <span>{product.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/services" className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600">
            Services
          </a>
          <a href="/contact" className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-600">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;