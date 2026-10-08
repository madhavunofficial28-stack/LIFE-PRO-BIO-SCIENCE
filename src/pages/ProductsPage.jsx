import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/productsData';
import { 
  ArrowRight, 
  Tag, 
  Layers, 
  Microscope
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductsPage = () => {
  const containerRef = useRef(null);

  // Scroll to top on mount & initialize GSAP ScrollTrigger animations
  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      // Header Animation
      gsap.fromTo('.products-header',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: smoothEase }
      );

      // ScrollTrigger animation for each Product Card
      gsap.utils.toArray('.product-card').forEach((card, index) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: (index % 2) * 0.1,
            ease: smoothEase
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 text-slate-800 font-sans min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PAGE HEADER */}
        <div className="products-header text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200/80 text-blue-700 text-xs md:text-sm font-bold tracking-wide shadow-sm">
            <Microscope size={16} />
            <span>Product Catalog</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Clinical Diagnostic Solutions
          </h1>
          
          <p className="text-slate-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
            Explore our line of high-sensitivity microfluidic kits, rapid testing systems, and precision clinical platforms.
          </p>
        </div>

        {/* PRODUCT LIST */}
        <div className="space-y-10">
          {PRODUCTS_DATA.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              className="product-card bg-white/80 backdrop-blur-md rounded-3xl border border-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-28"
            >
              {/* PRODUCT IMAGE */}
              <div className="lg:col-span-5 w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-white/90 bg-white/70 shadow-md relative group shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {product.category && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-extrabold px-3 py-1 rounded-full border border-white shadow-sm">
                    {product.category}
                  </span>
                )}
              </div>

              {/* PRODUCT DETAILS */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* CATEGORY & SKU TAGS */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200/80">
                      <Tag size={12} />
                      {product.category || "Diagnostic Kit"}
                    </span>
                    {product.sku && (
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/60">
                        SKU: {product.sku}
                      </span>
                    )}
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    {product.name}
                  </h2>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                    {product.fullDesc || product.description}
                  </p>

                  {/* KEY SPECS GRID */}
                  {product.specs && product.specs.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers size={14} className="text-blue-600" />
                        Key Specifications
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                        {product.specs.slice(0, 6).map((spec, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white/90 p-3 rounded-2xl border border-slate-200/70 shadow-sm hover:border-blue-300 transition-colors"
                          >
                            <div className="text-[11px] font-medium text-slate-500 truncate">{spec.label}</div>
                            <div className="text-xs font-bold text-slate-900 mt-0.5 truncate">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* VIEW DETAILS ACTION BUTTON */}
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-end">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold rounded-2xl text-xs md:text-sm transition-all duration-200 shadow-md shadow-blue-500/20 flex items-center gap-2 active:scale-95 group"
                  >
                    View Full Product Details 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;