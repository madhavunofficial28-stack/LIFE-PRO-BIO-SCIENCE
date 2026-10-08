import React, { useEffect, useRef } from 'react';
import { 
  HeartPulse, 
  FlaskConical, 
  Brain, 
  Factory, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      gsap.fromTo('.services-hero-content', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: smoothEase }
      );

      // Animate individual service rows on scroll
      gsap.utils.toArray('.service-item-row').forEach((row) => {
        gsap.fromTo(row,
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: row,
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

      gsap.fromTo('.why-choose-grid',
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.why-choose-section',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: smoothEase
        }
      );

      gsap.fromTo('.cta-banner-container',
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: smoothEase
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const servicesList = [
    {
      id: 'cancer-care-services',
      icon: HeartPulse,
      title: 'Oncology Care & Immunotherapy Solutions',
      category: 'Oncology & Immunotherapy',
      bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1400',
      desc: 'We supply custom Cancer Care Kits and advanced bio-therapeutics powered by our HybriCure® electrofusion technology. We provide comprehensive patient hygiene, oral care, and post-chemotherapy recovery solutions to hospitals and cancer treatment centers.',
      features: [
        'Custom Cancer Patient Supportive Care Kits',
        'HybriCure® Cell Electrofusion Therapeutics',
        'Post-Chemotherapy & Radiation Care Sets',
        'Bulk Supply to Daycare Oncology Centers'
      ],
      badgeColor: 'bg-rose-100/90 text-rose-800 border-rose-300',
      iconGradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 'milk-testing-services',
      icon: FlaskConical,
      title: 'Rapid Molecular & Dairy Diagnostic Services',
      category: 'Food Safety & Dairy Diagnostics',
      bgImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1400',
      desc: 'Rapid PCR and adulteration test kits tailored for dairy plants, collection centers, and testing labs. High-accuracy test strips detect chemical adulterants like urea, starch, detergents, and neutralizers within 5 minutes.',
      features: [
        'Rapid 5-Minute Adulteration Detection Strips',
        'FSSAI & ISO Compliant Diagnostic Standards',
        'Bulk PCR Diagnostic Kit Manufacturing',
        'On-site Training for Dairy Quality Personnel'
      ],
      badgeColor: 'bg-emerald-100/90 text-emerald-800 border-emerald-300',
      iconGradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'neurology-diagnostic-services',
      icon: Brain,
      title: 'Clinical Neurology Examination & Diagnostics',
      category: 'Neurological Diagnostics',
      bgImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1400',
      desc: 'Medical-grade neurological assessment tools and biomarker detection kits for neurologists, diagnostic centers, and medical institutes. Designed for maximum accuracy in sensory, nerve, and reflex evaluations.',
      features: [
        'CE & ISO Certified Neurological Equipment',
        'Sensory & Nerve Conductive Testing Kits',
        'Clinical Examination Sets for Medical Colleges',
        'Ergonomic, Sterilized Medical Diagnostics'
      ],
      badgeColor: 'bg-blue-100/90 text-blue-800 border-blue-300',
      iconGradient: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'oem-custom-manufacturing',
      icon: Factory,
      title: 'OEM, Contract Kitting & Private Labeling',
      category: 'Custom & Bulk Manufacturing',
      // Updated reliable image URL for OEM / Contract Kitting
      bgImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1400',
      desc: 'End-to-end OEM manufacturing, contract formulation, and customized kitting services for diagnostic chains, hospitals, and biotech partners. Fully compliant with international quality management standards.',
      features: [
        'Private Labeling & Packaging Customization',
        'ISO 13485 Certified Kitting Facilities',
        'Custom Assay Development & R&D Support',
        'Global Cold-Chain Shipping & Logistics'
      ],
      badgeColor: 'bg-purple-100/90 text-purple-800 border-purple-300',
      iconGradient: 'from-purple-600 to-indigo-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: 'ISO & CE Standards',
      desc: 'All products and diagnostic kits meet ISO 13485 and global clinical quality compliance.'
    },
    {
      icon: Clock,
      title: 'Rapid & High Accuracy',
      desc: 'Accelerated test results with up to 99.8% precision across diagnostic platforms.'
    },
    {
      icon: Truck,
      title: 'Cold-Chain Logistics',
      desc: 'Temperature-monitored packaging ensuring reagent integrity during transport.'
    },
    {
      icon: Headphones,
      title: 'Scientific Support',
      desc: 'Direct consultation and technical guidance from molecular biology experts.'
    }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 text-slate-800 font-sans pt-28 pb-20 px-4 md:px-12 lg:px-16 overflow-hidden min-h-screen"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[750px] pointer-events-none overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2500"
          alt="Healthcare & Diagnostic Services"
          className="w-full h-full object-cover opacity-50 filter brightness-105 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 via-teal-50/40 to-transparent" />
      </div>
      
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
            Services
          </li>
        </ol>
      </nav>

      {/* HERO SECTION */}
      <section className="services-hero-content text-center max-w-5xl mx-auto space-y-5 w-full relative z-10 mb-16 md:mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Comprehensive <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">Diagnostic Services</span> & Kit Solutions
        </h1>
        <p className="text-slate-800 text-base md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
          We provide high-precision molecular diagnostic kits, rapid testing solutions, and contract manufacturing services for Oncology, Clinical Neurology, and Food Safety.
        </p>
      </section>

      {/* SERVICES LIST SECTION (FULL WIDTH ZIG-ZAG LAYOUT) */}
      <section className="services-list-section w-full relative z-10 mb-16 md:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200 shadow-sm">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Our Specialized Services</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">Delivering precision-driven diagnostic, cellular therapy, and healthcare solutions.</p>
        </div>

        {/* FULL WIDTH ZIG-ZAG LAYOUT */}
        <div className="space-y-20 md:space-y-32 w-full">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id}
                className="service-item-row w-full"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Container Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl h-[340px] sm:h-[450px] lg:h-[480px] w-full bg-slate-900">
                      <img 
                        src={service.bgImage} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                      
                      {/* Badge on Image */}
                      <div className="absolute top-6 left-6">
                        <span className={`text-xs md:text-sm font-bold px-4 py-2 rounded-full border shadow-sm ${service.badgeColor}`}>
                          {service.category}
                        </span>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute bottom-6 left-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.iconGradient} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComp size={28} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content & Features Side */}
                  <div className="w-full lg:w-1/2 space-y-6 lg:pr-4">
                    <div className="space-y-4">
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                        Key Deliverables & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base font-semibold text-slate-800">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm md:text-base transition-all shadow-md active:scale-95 group/btn"
                      >
                        Inquire About Service 
                        <ArrowRight size={18} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-section relative z-10 w-full mb-16 md:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Why Choose Our Services?</h2>
        </div>

        <div className="why-choose-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {whyChooseUs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/90 p-8 rounded-3xl border border-white hover:border-teal-400 transition-all duration-300 shadow-xl shadow-blue-900/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 text-white rounded-2xl flex items-center justify-center shadow-md mb-6">
                    <IconComp size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section relative z-10 w-full">
        <div className="cta-banner-container text-center relative py-12 md:py-20 w-full">
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200 shadow-sm">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Need Custom Kit Packaging or Bulk Diagnostic Supplies?
            </h2>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
              Contact our expert R&D team to request sample diagnostic kits or discuss OEM partnership solutions tailored to your organization.
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-950 hover:bg-black text-white font-extrabold rounded-2xl text-base md:text-lg shadow-2xl shadow-slate-900/40 hover:shadow-slate-950/60 transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-slate-800 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 tracking-wide">Contact Our Experts</span>
                <ArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;