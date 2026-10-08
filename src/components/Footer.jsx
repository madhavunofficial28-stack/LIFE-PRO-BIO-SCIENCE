import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 px-6 md:px-10 border-t border-slate-800 relative z-20">
      
      {/* TOP SECTION */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* EXTREME LEFT: Logo, Paragraph & Social Icons */}
        <div className="max-w-sm">
          {/* Brand Logo Display */}
          <a href="/" className="inline-block mb-4">
            <img
              src="\life pro bioscience blue logo.jpeg"
              alt="LIFE BIO SCIENCE"
              className="h-14 w-auto object-contain rounded-lg"
            />
          </a>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            Pioneering precision molecular diagnostics, rapid PCR testing, and cell-based therapeutic technologies in oncology and clinical neurology.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              aria-label="X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SECTIONS: Quick Links, Featured Products & Contact Info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 w-full lg:w-auto">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Featured Products (Mobile pe Quick Links ke baju me aayega) */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Featured Products</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="/product/cancer-kit" className="hover:text-teal-400 transition-colors">Cancer Care & Diagnostics Kit</a></li>
              <li><a href="/product/neurology-diagnosis-kit" className="hover:text-teal-400 transition-colors">Neurology Diagnosis Kit</a></li>
              <li><a href="/product/rapid-milk-kit" className="hover:text-teal-400 transition-colors">Rapid Milk Testing Kit</a></li>
            </ul>
          </div>

          {/* Contact Info (Mobile pe full width span karega niche) */}
          <div className="col-span-2 md:col-span-1 pt-2 md:pt-0">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-400 shrink-0 mt-0.5" /> 
                <span>Life Bio Science Park, Biotech Innovation Zone</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400 shrink-0" /> 
                <span>+91 (800) 555-BIO-LAB</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400 shrink-0" /> 
                <span>info@lifebioscience.com</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT LINE */}
      <div className="w-full border-t border-slate-800 mt-10 pt-4 text-left text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} Life Bio Science Ltd. All rights reserved. Precision Molecular Diagnostics & Immunotherapy.
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;