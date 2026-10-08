import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductHoverPopup({ product, position, onClose }) {
  if (!product) return null;

  return (
    <div 
      className="fixed z-50 pointer-events-auto transition-all duration-300 ease-out transform animate-in fade-in zoom-in-95"
      style={{
        left: `${Math.min(position.x, window.innerWidth - 340)}px`,
        top: `${position.y + 15}px`,
      }}
      onMouseLeave={onClose}
    >
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.25)] p-4 text-white">
        <div className="relative h-36 rounded-xl overflow-hidden mb-3 border border-slate-700/60">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <span className="absolute top-2 left-2 px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-500/90 text-slate-950 backdrop-blur-md">
            {product.badge}
          </span>
        </div>

        <h4 className="font-bold text-lg text-white mb-1 leading-snug hover:text-cyan-400 transition-colors">
          {product.name}
        </h4>
        <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
          {product.shortDesc}
        </p>

        <Link
          to={`/products/${product.id}`}
          onClick={onClose}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
        >
          <span>View Full Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}