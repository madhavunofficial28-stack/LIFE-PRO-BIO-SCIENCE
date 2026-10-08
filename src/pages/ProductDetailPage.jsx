import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '../data/productsData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Clock, 
  Award,
  Target,
  Zap,
  Activity
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductDetailPage = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  
  const product = PRODUCTS_DATA?.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!product) return;

    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      gsap.fromTo('.product-hero-image', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: smoothEase }
      );

      gsap.fromTo('.product-hero-text', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: smoothEase }
      );

      if (document.querySelector('.product-advantages-section')) {
        gsap.fromTo('.product-advantages-section',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.product-advantages-section',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: smoothEase
          }
        );
      }

      if (document.querySelector('.product-procedure-section')) {
        gsap.fromTo('.product-procedure-section',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.product-procedure-section',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: smoothEase
          }
        );
      }

      if (document.querySelector('.product-sidebar-section')) {
        gsap.fromTo('.product-sidebar-section',
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.product-sidebar-section',
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: smoothEase
          }
        );
      }

      ScrollTrigger.refresh();

    }, containerRef);

    return () => ctx.revert();
  }, [id, product]);

  if (!product) {
    return (
      <div className="relative w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 min-h-screen flex items-center justify-center p-6 text-center pt-20">
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/90 shadow-2xl max-w-md w-full space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-800">Diagnostic Kit Not Found</h2>
          <p className="text-slate-600 font-medium text-sm">
            The medical diagnostic kit or product page you are searching for is currently unavailable or has been relocated.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const highlights = product.highlights || [
    {
      icon: Target,
      title: "Clinical Accuracy",
      desc: "High sensitivity and specificity verified by independent laboratory evaluations."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      desc: "Provides rapid qualitative and quantitative results for decisive therapeutic intervention."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      desc: "Manufactured under strict ISO & GMP certified biomedical production standards."
    }
  ];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div ref={containerRef} className="w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 text-slate-800 font-sans min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20">
      
      <style>{`
        .flip-card-container {
          width: 100%;
          max-width: 300px;
          height: 280px;
          margin: 0 auto;
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          padding: 2px;
          background: rgba(255, 255, 255, 0.4);
        }

        .flip-card-container::before {
          content: '';
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: conic-gradient(from 0deg at 50% 50%, rgba(13, 148, 136, 0) 0deg, rgba(13, 148, 136, 0) 270deg, #0d9488 310deg, #3b82f6 360deg);
          animation: rotate-border 4s linear infinite;
          z-index: 0;
          opacity: 0;
          transition: opacity 300ms ease-in-out;
        }

        .flip-card-container:hover::before {
          opacity: 1;
        }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          z-index: 1;
          border-radius: 20px;
          overflow: hidden;
        }

        .flip-card-content {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.08);
          border-radius: 20px;
        }

        .flip-card-inner:hover .flip-card-content {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .flip-card-front {
          background-color: #f8fafc;
        }

        .flip-card-back {
          background-color: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flip-card-back-content {
          position: absolute;
          width: 94%;
          height: 94%;
          background-color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 16px;
          color: #1e293b;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
      `}</style>

      <div className="w-full space-y-6">
        
        {/* BREADCRUMB */}
        <div className="-mt-8 flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 w-fit py-1 max-w-full truncate">
          <Link to="/" className="hover:text-blue-600 transition-colors shrink-0">Home</Link>
          <ChevronRight size={14} className="text-slate-400 shrink-0" />
          <span className="shrink-0 text-slate-500">Products</span>
          <ChevronRight size={14} className="text-slate-400 shrink-0" />
          <span className="text-blue-600 font-bold truncate">{product.name}</span>
        </div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full pt-2">
          
          <div className="product-hero-image lg:col-span-5 xl:col-span-5 w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-white/90 bg-white/70 backdrop-blur-md shadow-xl shrink-0 relative group">
            <img 
              src={product.image} 
              alt={product.name}
              onError={handleImageError}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="product-hero-text lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-5 text-left">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200/80 text-blue-700 text-xs md:text-sm font-bold tracking-wide shadow-sm">
                {product.category || "Precision Medical Diagnostics"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>
            
            <p className="text-slate-600 text-sm md:text-base lg:text-lg font-normal leading-relaxed">
              {product.fullDesc || product.description || "Designed to provide rapid, reliable, and high-precision diagnostic insights for clinical laboratories and healthcare personnel."}
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon || Target;
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col items-start ${idx < highlights.length - 1 ? 'sm:border-r sm:border-slate-200/80 sm:pr-4' : ''}`}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100/90 flex items-center justify-center text-blue-600 mb-3 shadow-sm shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 w-full">
          
          {/* Key Diagnostic Advantages */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-10">
            {product.features && product.features.length > 0 && (
              <div className="product-advantages-section space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-300/70 pb-3">
                  <div className="w-2.5 h-6 bg-blue-600 rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Key Diagnostic Advantages
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {product.features.map((feature, idx) => {
                    const featureStr = typeof feature === 'string' ? feature : String(feature);
                    const parts = featureStr.split(':');
                    const hasColon = parts.length > 1;
                    const title = hasColon ? parts[0].trim() : 'Feature';
                    const description = hasColon ? parts.slice(1).join(':').trim() : featureStr;

                    return (
                      <div 
                        key={idx} 
                        className="group bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/90 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-start gap-3.5"
                      >
                        <div className="p-2 rounded-xl bg-teal-100/80 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <CheckCircle2 size={18} />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-sm md:text-base text-slate-900 leading-snug">
                            {title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                            {description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Technical Specifications */}
          <div className="product-sidebar-section lg:col-span-5 xl:col-span-4 space-y-6">
            {product.specs && product.specs.length > 0 && (
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/90 shadow-md space-y-6">
                
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Technical Specifications</h2>
                </div>

                <div className="space-y-3 text-xs md:text-sm font-medium">
                  {product.specs.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between py-2 border-b border-slate-200/60 last:border-0 gap-4"
                    >
                      <span className="text-slate-600">{spec.label}</span>
                      <span className="text-slate-900 font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 text-center text-xs text-slate-700 font-semibold">
                  <div className="p-1.5 flex flex-col items-center gap-1">
                    <Award size={18} className="text-blue-600"/>
                    <span>ISO Certified</span>
                  </div>
                  <div className="p-1.5 flex flex-col items-center gap-1">
                    <Clock size={18} className="text-teal-600"/>
                    <span>Rapid Output</span>
                  </div>
                  <div className="p-1.5 flex flex-col items-center gap-1">
                    <ShieldCheck size={18} className="text-purple-600"/>
                    <span>Clinical Grade</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* STANDARD OPERATING PROCEDURE (SOP) */}
        {product.usageGuidelines && product.usageGuidelines.length > 0 && (
          <div className="product-procedure-section space-y-6 pt-10 w-full">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-7 bg-teal-600 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Standard Operating Procedure
                </h2>
              </div>
            </div>

            {/* 1. MOBILE VIEW */}
            <div className="flex flex-col gap-4 lg:hidden pt-2">
              {product.usageGuidelines.map((stepItem, idx) => {
                let stepNum = String(idx + 1).padStart(2, '0');
                let title = `Protocol Step ${stepNum}`;
                let description = "";

                if (typeof stepItem === 'object' && stepItem !== null) {
                  stepNum = stepItem.step || stepNum;
                  title = stepItem.title || title;
                  description = stepItem.desc || stepItem.description || "";
                } else if (typeof stepItem === 'string') {
                  const parts = stepItem.split(':');
                  title = parts.length > 1 ? parts[0].trim() : title;
                  description = parts.length > 1 ? parts.slice(1).join(':').trim() : stepItem;
                }

                return (
                  <div 
                    key={idx} 
                    className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/90 shadow-sm space-y-2 text-left"
                  >
                    <div className="inline-block bg-teal-600 text-white font-bold text-xs px-2.5 py-1 rounded-md">
                      {stepNum}
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 2. DESKTOP / PC VIEW (Manual Images from Object support) */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 pt-2">
              {product.usageGuidelines.map((stepItem, idx) => {
                let stepNum = String(idx + 1).padStart(2, '0');
                let title = `Protocol Step ${stepNum}`;
                let description = "";
                let stepImage = "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80";

                if (typeof stepItem === 'object' && stepItem !== null) {
                  stepNum = stepItem.step || stepNum;
                  title = stepItem.title || title;
                  description = stepItem.desc || stepItem.description || "";
                  if (stepItem.image) stepImage = stepItem.image;
                } else if (typeof stepItem === 'string') {
                  const parts = stepItem.split(':');
                  title = parts.length > 1 ? parts[0].trim() : title;
                  description = parts.length > 1 ? parts.slice(1).join(':').trim() : stepItem;
                }

                return (
                  <div key={idx} className="flip-card-container">
                    <div className="flip-card-inner">
                      <div className="flip-card-content">
                        
                        {/* FRONT SIDE */}
                        <div className="flip-card-front relative overflow-hidden">
                          <img 
                            src={stepImage} 
                            alt={title} 
                            onError={handleImageError}
                            className="absolute inset-0 w-full h-full object-cover object-center" 
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                          
                          <div className="relative z-10 w-full h-full p-3.5 flex flex-col justify-between">
                            <small className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-xl text-blue-700 text-[10px] font-bold border border-blue-200 w-fit shadow-sm">
                              Step {stepNum}
                            </small>
                            
                            <div className="w-full p-2.5 bg-white/90 backdrop-blur-md rounded-xl border border-white/80 space-y-0.5 shadow-md">
                              <div className="flex justify-between items-center gap-1">
                                <p className="font-extrabold text-slate-900 text-xs leading-snug truncate">
                                  {title}
                                </p>
                                <Activity size={14} className="text-teal-600 shrink-0" />
                              </div>
                              <p className="text-[10px] text-blue-600 font-semibold uppercase tracking-wider">
                                Hover to read
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* BACK SIDE */}
                        <div className="flip-card-back">
                          <div className="flip-card-back-content">
                            
                            <div className="flex justify-start items-center w-full border-b border-slate-200/60 pb-1">
                              <span className="bg-teal-100/80 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-md text-[10px] font-bold">
                                Step {stepNum}
                              </span>
                            </div>

                            <div className="space-y-1 my-auto text-left">
                              <h4 className="font-extrabold text-slate-900 text-xs leading-snug">
                                {title}
                              </h4>
                              <p className="text-slate-700 text-[11px] leading-relaxed font-normal line-clamp-5">
                                {description}
                              </p>
                            </div>

                            <div className="pt-1 border-t border-slate-200/60 text-[9px] text-slate-500 font-medium text-center">
                              Diagnostic Guideline
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>

    </div>
  );
};

ProductDetailPage.displayName = 'ProductDetailPage';

export default ProductDetailPage;