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
  Zap
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductDetailPage = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  
  // Robust and foolproof product lookup to handle all URL patterns & legacy links
  const product = PRODUCTS_DATA?.find((p) => {
    if (!id || !p) return false;
    const cleanParamId = id.toLowerCase().trim();
    const cleanProdId = (p.id || '').toLowerCase().trim();
    
    // 1. Exact ID match or legacy match
    if (cleanProdId === cleanParamId || p.legacyIds?.includes(id)) return true;
    
    // 2. Slug-based match from product name
    const prodSlug = (p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (prodSlug === cleanParamId) return true;
    
    // 3. Fallback normalization (removes dashes/special chars for smart cross-matching)
    const normParam = cleanParamId.replace(/[^a-z0-9]/g, '');
    const normId = cleanProdId.replace(/[^a-z0-9]/g, '');
    const normName = (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (normId === normParam || normName === normParam) return true;

    // 4. Specific keyword mapping for neurological / cancer / fertility links from footer/nav
    if (cleanParamId.includes('neurological') && (cleanProdId.includes('neurol') || normName.includes('neurol'))) return true;
    if (cleanParamId.includes('cancer') && (cleanProdId.includes('cancer') || normName.includes('cancer'))) return true;
    if (cleanParamId.includes('fertility') && (cleanProdId.includes('fertility') || normName.includes('fertility'))) return true;

    return false;
  });

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
        <div className="bg-white/85 backdrop-blur-md p-10 rounded-3xl border border-white/90 shadow-2xl max-w-md w-full space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-800">Product Not Found</h2>
          <p className="text-slate-600 font-medium text-sm">
            The product or medical solution you are searching for is currently unavailable or has been relocated.
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
        .sop-glow-card {
          position: relative;
          border-radius: 28px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sop-glow-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 30px;
          background: linear-gradient(135deg, #3b82f6, #0d9488, #06b6d4);
          z-index: 0;
          opacity: 0;
          filter: blur(8px);
          transition: opacity 0.3s ease-in-out;
        }

        .sop-glow-card:hover::before {
          opacity: 1;
        }

        .sop-glow-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 30px -5px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      <div className="w-full space-y-6">
        
        <div className="-mt-8 flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 w-fit py-1 max-w-full truncate">
          <Link to="/" className="hover:text-blue-600 transition-colors shrink-0">Home</Link>
          <ChevronRight size={14} className="text-slate-400 shrink-0" />
          <span className="shrink-0 text-slate-500">Products</span>
          <ChevronRight size={14} className="text-slate-400 shrink-0" />
          <span className="text-blue-600 font-bold truncate">{product.name}</span>
        </div>

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
              {product.fullDesc || product.description || "Designed to provide rapid, reliable, and high-precision diagnostic and healthcare solutions."}
            </p>

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 w-full">
          
          <div className="lg:col-span-7 xl:col-span-8 space-y-10">
            {product.features && product.features.length > 0 && (
              <div className="product-advantages-section space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-300/70 pb-3">
                  <div className="w-2.5 h-6 bg-blue-600 rounded-full" />
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    Key Features & Advantages
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

        {product.usageGuidelines && product.usageGuidelines.length > 0 && (
          <div className="product-procedure-section space-y-6 pt-12 w-full">
            
            <div className="flex items-center justify-between border-b border-slate-300/70 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-7 bg-teal-600 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Standard Operating Procedure (SOP)
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-2">
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
                  <div key={idx} className="sop-glow-card relative group">
                    <div className="relative z-10 bg-white p-6 rounded-[26px] border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-teal-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                          {stepNum}
                        </div>

                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {title}
                        </h3>

                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                          {description}
                        </p>
                        
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