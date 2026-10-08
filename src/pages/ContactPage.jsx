import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  AlertCircle,
  CheckCircle2,
  User,
  FileText,
  MessageSquare,
  ChevronRight,
  Dna,
  FlaskConical,
  Leaf
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const smoothEase = "power3.out";

      // 1. Sidebar Header
      gsap.fromTo('.sidebar-header',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: smoothEase }
      );

      // 2. Contact Items
      gsap.fromTo('.contact-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,      
          ease: smoothEase,
          delay: 0.3          
        }
      );

      // 3. Send Us A Message Form Card
      gsap.fromTo('.contact-form-card',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,      
          ease: smoothEase,
          delay: 0.6          
        }
      );

      // Floating Graphics Ambient Animation
      gsap.to('.floating-sticker', {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        ease: "sine.inOut"
      });

      // Map Section Scroll Trigger
      gsap.fromTo('.map-section',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.map-section',
            start: 'top 85%',
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

  const validate = (name, value) => {
    let errorMsg = '';
    if (name === 'fullName') {
      if (!value.trim()) errorMsg = 'Full name is required';
      else if (!/^[a-zA-Z\s]+$/.test(value)) errorMsg = 'Name should only contain letters';
    }

    if (name === 'email') {
      if (!value.trim()) errorMsg = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errorMsg = 'Valid email is required';
    }

    if (name === 'message') {
      if (!value.trim()) errorMsg = 'Message cannot be empty';
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fullName' && /[0-9]/.test(value)) {
      setErrors((prev) => ({ ...prev, fullName: 'Numbers are not allowed' }));
      return;
    }
    setFormData({ ...formData, [name]: value });
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameErr = validate('fullName', formData.fullName);
    const emailErr = validate('email', formData.email);
    const msgErr = validate('message', formData.message);

    if (nameErr || emailErr || msgErr) {
      setErrors({ fullName: nameErr, email: emailErr, message: msgErr });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-company-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSending(false);
        setSubmitted(true);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      setIsSending(false);
      alert('Failed to send message, please try again.');
      console.error('Email Send Error:', error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-gradient-to-br from-blue-100/90 via-teal-50/85 to-blue-200/90 text-slate-800 font-sans pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen"
    >
      <style>{`
        .animated-border-box {
          position: relative;
        }
        .animated-border-box::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          border: 2px solid #0d9488;
          clip-path: inset(100% 0 0 0);
          transition: clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }
        .animated-border-box:hover::before,
        .animated-border-box:focus-within::before {
          clip-path: inset(0 0 0 0);
        }
      `}</style>

      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none -z-10 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop')`
        }}
      />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-400/25 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[130px] pointer-events-none -z-0" />

      {/* FLOATING GRAPHIC STICKERS */}
      <div className="floating-sticker absolute top-20 left-10 text-teal-600/30 pointer-events-none hidden lg:block">
        <Leaf size={60} />
      </div>
      <div className="floating-sticker absolute bottom-40 left-16 text-blue-600/20 pointer-events-none hidden lg:block" style={{ animationDelay: '1s' }}>
        <Dna size={80} />
      </div>
      <div className="floating-sticker absolute top-32 right-12 text-teal-500/25 pointer-events-none hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <FlaskConical size={70} />
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
            Contact Us
          </li>
        </ol>
      </nav>

      {/* MAIN TWO-COLUMN SECTION */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: TEXT & DETAILS */}
        <div className="contact-sidebar lg:col-span-5 space-y-8 hidden md:block">
          <div className="sidebar-header">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Connect With Our Experts
            </h1>
          </div>

          <div className="space-y-6 pt-2">
            <div className="contact-item group flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white/80 border border-slate-200/80 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <Phone size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</span>
                <h5 className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">+91 9173300247, +91 9157300247</h5>
                <p className="text-slate-500 text-xs">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

            <div className="contact-item group flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white/80 border border-slate-200/80 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300">
                <Mail size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                <h5 className="font-bold text-slate-800 text-base group-hover:text-teal-600 transition-colors">support@lifebioscience.com</h5>
                <p className="text-slate-500 text-xs">We reply within 24 hours</p>
              </div>
            </div>

            <div className="contact-item group flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white/40 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white/80 border border-slate-200/80 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                <MapPin size={20} className="transition-transform duration-300 group-hover:animate-bounce" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office</span>
                <h5 className="font-bold text-slate-800 text-base group-hover:text-slate-900 transition-colors">Life Bio Science</h5>
                <p className="text-slate-500 text-xs">Vadodara – 390001, Gujarat, INDIA</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM CONTAINER */}
        <div className="contact-form-card lg:col-span-7 relative w-full">
          <div className="relative bg-transparent p-0 border-0 shadow-none">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 relative z-10">
                Send us a message
              </h3>
              <div className="bg-teal-500/10 px-3 py-1.5 rounded-2xl text-teal-700 flex items-center gap-2 text-xs font-bold">
                <FlaskConical size={16} className="animate-bounce" />
                <span>Bio-Lab Support</span>
              </div>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 rounded-2xl flex items-center gap-3 text-emerald-800 text-sm font-semibold relative z-10">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* ACTIVE REACT FORM */}
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-6 relative z-10"
            >
              {/* NAME */}
              <div>
                <div className="animated-border-box rounded-2xl border-b-2 border-slate-400 relative group/input">
                  <User size={18} className="absolute left-3 top-4 text-slate-500 group-hover/input:text-teal-600 group-focus-within/input:text-teal-600 transition-colors pointer-events-none z-10" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full pl-10 pr-4 py-3.5 bg-transparent rounded-2xl outline-none font-medium text-slate-800 placeholder-slate-500 border-none focus:ring-0"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-600 mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.fullName}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <div className="animated-border-box rounded-2xl border-b-2 border-slate-400 relative group/input">
                  <Mail size={18} className="absolute left-3 top-4 text-slate-500 group-hover/input:text-teal-600 group-focus-within/input:text-teal-600 transition-colors pointer-events-none z-10" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3.5 bg-transparent rounded-2xl outline-none font-medium text-slate-800 placeholder-slate-500 border-none focus:ring-0"
                  />
                </div>
                {errors.email && <p className="text-xs text-rose-600 mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.email}</p>}
              </div>

              {/* SUBJECT */}
              <div>
                <div className="animated-border-box rounded-2xl border-b-2 border-slate-400 relative group/input">
                  <FileText size={18} className="absolute left-3 top-4 text-slate-500 group-hover/input:text-teal-600 group-focus-within/input:text-teal-600 transition-colors pointer-events-none z-10" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full pl-10 pr-4 py-3.5 bg-transparent rounded-2xl outline-none font-medium text-slate-800 placeholder-slate-500 border-none focus:ring-0"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <div className="animated-border-box rounded-2xl border-b-2 border-slate-400 relative group/input">
                  <MessageSquare size={18} className="absolute left-3 top-4 text-slate-500 group-hover/input:text-teal-600 group-focus-within/input:text-teal-600 transition-colors pointer-events-none z-10" />
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full pl-10 pr-4 py-3.5 bg-transparent rounded-2xl outline-none font-medium text-slate-800 placeholder-slate-500 resize-none border-none focus:ring-0"
                  />
                </div>
                {errors.message && <p className="text-xs text-rose-600 mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.message}</p>}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold rounded-2xl text-sm transition-all duration-300 shadow-md shadow-teal-500/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer mt-4 disabled:opacity-50 group/btn border-none"
              >
                <Send size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" /> {isSending ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="map-section max-w-7xl mx-auto mt-16 relative z-10">
        <div className="w-full h-[550px] rounded-3xl overflow-hidden shadow-xl relative border-none">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202022068!2d73.11181657805128!3d22.32210260481232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full transition-all duration-500"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;