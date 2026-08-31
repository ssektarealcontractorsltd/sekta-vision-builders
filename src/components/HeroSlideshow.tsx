// HeroSlideshow.tsx - All 12 unique images imported locally
import { useState, useEffect } from "react";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/Images/Logos/Sekta-Real-Constructors-Logo.png";

// Import all 12 hero images
import hero1 from "@/assets/Images/Hero/hero (1).jpg";
import hero2 from "@/assets/Images/Hero/hero (2).jpg";
import hero3 from "@/assets/Images/Hero/hero (3).jpg";
import hero4 from "@/assets/Images/Hero/hero (4).jpg";
import hero5 from "@/assets/Images/Hero/hero (5).jpg";
import hero6 from "@/assets/Images/Hero/hero (6).jpg";
import hero7 from "@/assets/Images/Hero/hero (7).jpg";
import hero8 from "@/assets/Images/Hero/hero (8).jpg";
import hero9 from "@/assets/Images/Hero/hero (9).jpg";
import hero10 from "@/assets/Images/Hero/hero (10).jpg";
import hero11 from "@/assets/Images/Hero/hero (11).jpg";
import hero12 from "@/assets/Images/Hero/hero (12).jpg";

// All 12 unique images - NO duplicates
const slides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#0f1729]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides - all 12 unique local images */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Construction project ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-900 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Desktop overlay - gradient spans 70% of screen */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {/* Left content background - 35% */}
        <div 
          className="absolute inset-y-0 left-0" 
          style={{ 
            background: "#0f1729",
            width: "clamp(30%, 35%, 50%)"
          }} 
        />
        
        {/* Gradual gradient blend - spans 70% of screen width */}
        <div 
          className="absolute inset-y-0" 
          style={{ 
            background: "linear-gradient(to right, #0f1729 0%, #0f1729 15%, rgba(15,23,41,0.9) 25%, rgba(15,23,41,0.7) 40%, rgba(15,23,41,0.4) 55%, rgba(15,23,41,0.15) 70%, transparent 100%)",
            left: "clamp(20%, 25%, 40%)",
            width: "70%"
          }} 
        />
      </div>

      {/* Mobile overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{ background: "linear-gradient(to bottom, rgba(15,23,41,0.1) 0%, rgba(15,23,41,0.6) 40%, #0f1729 100%)" }} />

      {/* Content */}
      <div className="relative z-20 flex h-full items-end md:items-center pb-8 md:pb-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="md:max-w-[clamp(30%,35%,50%)]">
            {/* Desktop brand */}
            <div className="hidden md:flex items-center gap-4 mb-2">
              <img src={logo} alt="Ssekta Real Contractors" className="h-12 w-auto" />
              <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Ssekta <span className="text-[#f86b0d]">Real</span> Contractors Ltd.
              </h1>
            </div>

            {/* Mobile brand */}
            <div className="flex md:hidden items-center gap-3 mb-1">
              <img src={logo} alt="Ssekta Real Contractors" className="h-9 w-auto" />
              <h1 className="text-xl font-bold text-white tracking-tight">
                Ssekta <span className="text-[#f86b0d]">Real</span> Contractors Ltd.
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl font-light italic text-[#f8a87a] border-l-4 border-[#f86b0d] pl-4 mt-1">
              "Only the best is good enough."
            </p>

            <p className="mt-3 max-w-lg text-sm sm:text-base md:text-base leading-relaxed text-white/80">
              Professional construction company with over 10 years of experience in roofing structures,
              construction, form works, and maintenance.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+256705941023"
                className="bg-[#f86b0d] hover:bg-[#ff7a1a] text-white font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-[8px] text-sm sm:text-base shadow-lg shadow-[#f86b0d]/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/256776529485"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] hover:bg-[#30e07a] text-white font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-[8px] text-sm sm:text-base shadow-lg shadow-[#25d366]/25 transition-all hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#0f1729]/70 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 hover:bg-[#f86b0d] hover:border-[#f86b0d] transition-all hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => goToSlide(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#0f1729]/70 backdrop-blur-sm text-white p-3 rounded-full border border-white/10 hover:bg-[#f86b0d] hover:border-[#f86b0d] transition-all hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators - show all 12 dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3 flex-wrap justify-center max-w-[90%]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 md:w-8 bg-[#f86b0d]" : "w-1.5 md:w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 text-[11px] tracking-[3px] uppercase animate-bounce pointer-events-none hidden md:flex">
        <span className="font-medium">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="absolute inset-0 -z-10 blur-xl bg-[#f86b0d]/5 rounded-full scale-150"></div>
      </div>
    </section>
  );
};

export default HeroSlideshow;