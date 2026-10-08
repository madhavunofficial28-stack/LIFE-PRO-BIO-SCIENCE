import React, { useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Handshake, 
  Globe, 
  Lightbulb, 
  ChevronRight,
  Target,
  Compass,
  Activity,
  Shield,
  Dna,
  Stethoscope,
  Sparkles,
  Microscope,
  Award
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);
  const missionCardRef = useRef(null);
  const visionCardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      // 1. Header Hero Animation (Page Load)
      gsap.fromTo('.about-header', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: smoothEase }
      );

      // 2. Animate sections on Scroll
      gsap.utils.toArray('.animate-section').forEach((section) => {
        gsap.fromTo(section,
          { y: 80, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: smoothEase
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Core Values Data
  const coreValues = [
    {
      title: "Uncompromising Quality",
      desc: "ISO-certified testing and clinical validation to ensure high accuracy across all diagnostic and therapeutic applications.",
      icon: ShieldCheck,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Scientific Innovation",
      desc: "Pioneering electrofusion platform (HybriCure®) and rapid PCR-based molecular diagnostic technologies.",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      title: "Global Accessibility",
      desc: "Expanding access to advanced molecular screening and personalized cancer immunotherapy worldwide.",
      icon: Globe,
      color: "bg-teal-50 text-teal-600 border-teal-200"
    },
    {
      title: "Ethical Partnership",
      desc: "Committed to rigorous clinical research, patient safety, transparent reporting, and medical excellence.",
      icon: Handshake,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 text-slate-800 font-sans pt-28 pb-20 px-4 md:px-12 lg:px-16 overflow-hidden min-h-screen"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-[600px] pointer-events-none overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]">
        <img 
          src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2500" 
          alt="Biotechnology Innovation" 
          className="w-full h-full object-cover opacity-40 filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-teal-50/40 to-transparent" />
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-400/20 rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto w-full mb-8">
        <ol className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-medium">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <ChevronRight size={14} className="text-black" />
          </li>
          <li aria-current="page" className="text-blue-600 font-semibold">
            About Us
          </li>
        </ol>
      </nav>

      {/* HERO SECTION */}
      <section className="about-header text-center max-w-5xl mx-auto space-y-5 w-full relative z-10 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Pioneering <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">Precision Diagnostics & Medicine</span>
        </h1>
        <p className="text-slate-800 text-base md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
          Advancing human health by bridging state-of-the-art molecular diagnostics, rapid PCR testing, and personalized cell-based immunotherapies in oncology and neurology.
        </p>
      </section>

      <div className="space-y-24 md:space-y-32 relative z-10">
        
        {/* OUR CLINICAL MISSION SECTION */}
        <div className="w-full pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-10 mb-10 md:mb-24">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/90 px-4 py-1.5 rounded-full border border-teal-200 inline-block shadow-sm">
              Our Clinical Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-snug">
              Transforming Patient Outcomes Through Scientific Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="animate-section lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-200/60">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Next-Gen Therapies & Diagnostics
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Bridging Molecular Precision & Cell Immunotherapy
                </h3>
              </div>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                At <strong>Life Pro Biosciences</strong>, our mission centers on accelerating precision detection and delivering personalized therapeutic solutions. Through our proprietary <strong>HybriCure® Electrofusion Platform</strong> and rapid molecular testing kits, we target critical challenges in oncology and neurology.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                By fusing autologous tumor cells with dendritic cells, our immunotherapy platform stimulates comprehensive immune responses against target malignancies, validated by clinical trials showing extended overall survival and favorable safety profiles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="border-l-4 border-blue-600 pl-4 py-1 bg-white/60 backdrop-blur-sm rounded-r-2xl p-2">
                  <div className="text-2xl font-extrabold text-blue-700">58.8 Months</div>
                  <div className="text-xs text-slate-700 font-semibold mt-1">Median Overall Survival Reported in Clinical Trials</div>
                </div>
                <div className="border-l-4 border-teal-500 pl-4 py-1 bg-white/60 backdrop-blur-sm rounded-r-2xl p-2">
                  <div className="text-2xl font-extrabold text-teal-700">0% SAE</div>
                  <div className="text-xs text-slate-700 font-semibold mt-1">Serious Adverse Events Profile Reported</div>
                </div>
              </div>
            </div>

            <div className="animate-section lg:col-span-6 w-full">
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white group w-full bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80" 
                  alt="Advanced Biotechnology Research Laboratory" 
                  className="w-full h-80 md:h-[450px] object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & VISION GRID */}
        <div className="animate-section w-full relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Mission & Vision Pillars
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium max-w-lg mx-auto">
              Guiding the future of early biomarker screening, rapid PCR diagnostics, and cellular immunotherapies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* OUR MISSION CARD */}
            <div 
              ref={missionCardRef}
              onMouseMove={(e) => handleMouseMove(e, missionCardRef)}
              className="group relative bg-white/85 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/90 shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400/80 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.35), rgba(20, 184, 166, 0.20), transparent 70%)`,
                }}
              />
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Target size={32} className="group-hover:animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-800 bg-blue-100/90 px-4 py-2 rounded-full border border-blue-200/80 shadow-sm">
                    Core Mission
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors mb-4 tracking-tight">
                  Our Mission
                </h3>

                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-8">
                  To identify, develop, and commercialize innovative technologies in oncology and neurology that enable earlier detection, more precise diagnosis, and personalized treatment—making advanced healthcare more accessible to patients worldwide
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Dna size={14} className="text-blue-600" /> HybriCure® Platform
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Microscope size={14} className="text-teal-600" /> Rapid Molecular Screening
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-600">
                <div className="flex items-center gap-2 text-blue-900 bg-blue-50/90 px-3.5 py-2 rounded-xl border border-blue-100">
                  <Activity size={16} className="text-blue-600" />
                  <span>ISO & Clinical Precision Certified</span>
                </div>
              </div>
            </div>

            {/* OUR VISION CARD */}
            <div 
              ref={visionCardRef}
              onMouseMove={(e) => handleMouseMove(e, visionCardRef)}
              className="group relative bg-white/85 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/90 shadow-2xl hover:shadow-teal-500/15 hover:border-teal-400/80 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 184, 166, 0.35), rgba(16, 185, 129, 0.22), transparent 70%)`
                }}
              />
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-emerald-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-teal-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Compass size={32} className="group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-teal-900 bg-teal-100/90 px-4 py-2 rounded-full border border-teal-200/80 shadow-sm">
                    Global Vision
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors mb-4 tracking-tight">
                  Our Vision
                </h3>

                <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium mb-8">
                  To advance the future of personalized medicine by transforming the way cancer and neurological diseases are detected, diagnosed, and treated worldwide.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Stethoscope size={14} className="text-teal-600" /> Oncology & Neurology
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200">
                    <Globe size={14} className="text-blue-600" /> Global Clinical Reach
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-600">
                <div className="flex items-center gap-2 text-teal-900 bg-teal-50/90 px-3.5 py-2 rounded-xl border border-teal-100">
                  <Award size={16} className="text-teal-600" />
                  <span>Clinical Trial Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. OUR CORE VALUES SECTION */}
        <section className="animate-section values-section w-full">
          <div className="text-center w-full mb-12 space-y-3">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200 inline-block shadow-sm">
              Principles That Guide Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="core-values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-md p-7 rounded-3xl border border-white/90 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group w-full"
              >
                <div>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-5 shadow-sm group-hover:scale-110 transition-transform ${val.color}`}>
                    <val.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">{val.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};

AboutPage.displayName = 'AboutPage';

export default AboutPage;