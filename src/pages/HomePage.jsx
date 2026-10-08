import React, { useEffect, useRef } from 'react';
import { 
  HeartPulse, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Headphones, 
  ArrowRight, 
  Sparkles,
  Award,
  Check,
  Microscope,
  Dna,
  ShieldAlert,
  Building2,
  CheckCircle2,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Products Data import
import { PRODUCTS_DATA } from '../data/productsData';

// Left section background image import
import impactBg from '../assets/Precision Diagnostics Built For Human Impact.png';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      // 1. Hero Content Animation
      gsap.fromTo('.home-hero-content', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: smoothEase }
      );

      // 2. Sections Scroll Animation
      gsap.utils.toArray('.animate-section').forEach((section) => {
        gsap.fromTo(section,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1.0,
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
      className="relative w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 text-slate-800 font-sans min-h-screen overflow-x-hidden pb-20 space-y-20 md:space-y-28"
    >
      {/* 🌟 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center py-20 md:py-32 text-center z-10 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-20 opacity-60 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1920')`,
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/60 via-blue-50/20 to-transparent -z-10 pointer-events-none" />

        <div className="home-hero-content w-full max-w-5xl mx-auto px-6 md:px-12 space-y-6 relative z-10 pt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Innovative Diagnostic Solutions & <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">Personalized Medicine</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Advancing early detection, molecular diagnostics, rapid PCR testing, and cell-based immunotherapies in oncology and neurology to transform personalized patient care worldwide.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="px-9 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95"
            >
              Contact Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 2. SCIENTIFIC COMMITMENT & INNOVATION */}
      <section className="animate-section w-full z-10 relative pt-12 px-4 md:px-12 lg:px-16">
        <div className="w-full space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* 🖼️ LEFT COLUMN: ONLY IMAGE */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] h-full border border-slate-200/80">
              <img 
                src={impactBg} 
                alt="Precision Diagnostics" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 📄 RIGHT COLUMN: ALL TEXT & POINTS */}
            <div className="lg:col-span-7 space-y-6 pr-4 md:pr-10 flex flex-col justify-center">
              
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Precision Diagnostics Built For Human Impact
              </h2>

              {/* Intro Paragraph */}
              <p className="text-slate-700 text-lg leading-relaxed font-normal">
                At <strong className="text-slate-900 font-semibold">Life Pro Biosciences</strong>, we develop and commercialize innovative solutions in oncology and neurology, bridging cutting-edge molecular diagnostics with personalized cell-based therapies.
              </p>

              {/* Points List */}
              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-full bg-blue-600/10 text-blue-700 shrink-0">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">PCR-Based Rapid Molecular Screening</h3>
                    <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                      Fast, accessible diagnostic solutions in oncology and neurology designed to shorten time from sample collection to accurate results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-full bg-teal-600/10 text-teal-700 shrink-0">
                    <Dna size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">HybriCure® Electrofusion Platform</h3>
                    <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                      Proprietary cell-based immunotherapy combining autologous tumor and dendritic cells to stimulate multi-antigen immune activation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2.5 rounded-full bg-blue-600/10 text-blue-700 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Clinical Efficacy & Safety Profile</h3>
                    <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">
                      Supported by reported clinical data showing 58.8 months median overall survival and a 0% serious adverse events profile.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 🌟 3. FEATURED PRODUCTS SECTION */}
      <section className="animate-section w-full z-10 relative pt-8 px-4 md:px-8 lg:px-12">
        <div className="mb-8 space-y-2 px-2">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
            Our Flagship Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Clinical & Diagnostic Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {PRODUCTS_DATA.map((product) => (
            <div 
              key={product.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 w-full"
            >
              <div>
                <div className="relative overflow-hidden p-3">
                  <div className="rounded-2xl overflow-hidden h-60 md:h-64 lg:h-72 w-full">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/product/${product.id}`}
                  className="w-full py-3.5 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white text-slate-800 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-slate-200/60 shadow-sm"
                >
                  View Product Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 4. CALL TO ACTION SECTION */}
      <section className="animate-section w-full z-10 relative pt-12 px-4 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6 border-t border-slate-300/60">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ready to Partner With Life Pro Biosciences?</h2>
            <p className="text-slate-600 text-base">
              Looking for diagnostic lab partnerships, clinical trial collaborations, hospital network integration, or distribution opportunities? Our team is ready to assist you.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
            >
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;