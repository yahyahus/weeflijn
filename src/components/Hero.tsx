import { ArrowRight } from "lucide-react";
import heroImg from "../assets/image00005.jpg";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left column: Content */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
              Luxury Textile Collection
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-charcoal leading-none">
              Artistry <br />
              <span className="italic text-brand-red font-normal">Woven</span> <br />
              Into Threads
            </h1>
          </div>

          <p className="font-sans text-brand-charcoal/70 text-base md:text-lg leading-relaxed max-w-md font-light">
            Weeflijn is a trusted supplier of hotel‑grade textiles crafted for comfort, durability and long‑lasting performance. We combine commercial‑grade strength with refined design, helping hospitality brands deliver a consistently premium guest experience.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <a
              href="#lookbook"
              className="group flex items-center gap-3 px-8 py-4 bg-brand-charcoal text-brand-cream hover:bg-brand-red transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase shadow-md"
            >
              Explore Lookbook
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
            <a
              href="#contact"
              className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-charcoal hover:text-brand-red transition-colors duration-300 py-3 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-brand-charcoal hover:after:bg-brand-red"
            >
              Private Consultation
            </a>
          </div>

          {/* Micro metrics/details */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#e2dfd8]/60 max-w-md">
            <div>
              <p className="font-serif text-2xl font-light text-brand-charcoal">Control</p>
              <p className="font-sans text-[10px] tracking-wider text-brand-taupe uppercase mt-1">End-to-End</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-light text-brand-charcoal">Premium</p>
              <p className="font-sans text-[10px] tracking-wider text-brand-taupe uppercase mt-1">Guest Experience</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-light text-brand-charcoal">Commercial</p>
              <p className="font-sans text-[10px] tracking-wider text-brand-taupe uppercase mt-1">Grade Strength</p>
            </div>
          </div>
        </div>

        {/* Right column: Hero image with luxury framing */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end animate-fade-in">
          <div className="relative w-full max-w-2xl aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] bg-brand-slate p-3 border border-[#e2dfd8]/40 shadow-xl overflow-hidden group">
            {/* Background elements */}
            <div className="absolute inset-0 border-[1px] border-brand-sand/30 m-6 pointer-events-none z-10 transition-all duration-500 group-hover:m-4" />
            
            {/* Main textile close-up */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={heroImg}
                alt="Weef Lijn Luxury Textile close up"
                className="w-full h-full object-cover transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                loading="eager"
              />
            </div>
            
            {/* Visual overlay detail */}
            <div className="absolute bottom-8 left-8 z-20 glassmorphism p-4 border border-[#e2dfd8]/30 max-w-xs shadow-lg transition-transform duration-500 hover:translate-y-[-4px]">
              <p className="font-sans text-[10px] tracking-widest text-brand-red uppercase font-semibold">
                Signature Collection
              </p>
              <p className="font-serif text-lg text-brand-charcoal mt-1">
                Premium hotel collection
              </p>
              <p className="font-sans text-[11px] text-brand-charcoal/60 mt-1 leading-relaxed">
                Hand-selected Selection of Long staple cotton fibre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
