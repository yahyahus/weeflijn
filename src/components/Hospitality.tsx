import React, { useState } from "react";
import { Sparkles, Shield, Tag, ArrowRight } from "lucide-react";
import img1 from "../assets/image00001.jpg";
import img2 from "../assets/image00002.jpg";
import img5 from "../assets/image00005.jpg";

export const Hospitality: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <Sparkles className="text-brand-red w-5 h-5" />,
      title: "Style & Substance",
      subtitle: "Sophisticated Color Palettes",
      description:
        "Our hospitality textiles feature a timeless, elegant finish designed to stand out. A sophisticated palette of colours adds charm and character to boutique spaces and guest rooms alike.",
      image: img1,
    },
    {
      icon: <Shield className="text-brand-sand w-5 h-5" />,
      title: "Affordable Luxury",
      subtitle: "Tailored to Your Budget",
      description:
        "Running a boutique B&B or a full-scale hotel? Our hotel-grade products remain affordable and accessible, offering high-end craftsmanship without sacrificing quality.",
      image: img2,
    },
    {
      icon: <Tag className="text-brand-taupe w-5 h-5" />,
      title: "Wholesale & Bulk",
      subtitle: "Value at Every Scale",
      description:
        "We cater to bulk purchases, offering generous discounts on wholesale orders to ensure premium value. Partner with us for reliable delivery and exceptional durability.",
      image: img5,
    },
  ];

  return (
    <section
      id="hospitality"
      className="py-24 px-6 md:px-12 bg-brand-cream border-b border-[#e2dfd8]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Text and Offerings */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-4">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
              Hospitality Solutions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal leading-tight">
              Elevate Your Linen Game <br />
              with <span className="italic">Style & Substance</span>
            </h2>
            <p className="font-sans text-brand-charcoal/70 text-base max-w-xl font-light mt-4 leading-relaxed">
              Weeflijn is trusted industry-wide for delivering textiles that blend 
              commercial-grade strength with refined, luxurious design. From boutique B&Bs 
              to full-scale hospitality chains, we supply premium comfort that lasts.
            </p>
          </div>

          {/* Value cards list */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`flex gap-6 items-start p-6 border transition-all duration-500 cursor-pointer ${
                  activeIndex === idx
                    ? "bg-white border-brand-sand/50 shadow-md translate-x-1"
                    : "bg-transparent border-transparent hover:border-brand-sand/20 hover:bg-brand-slate/20"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-brand-charcoal text-brand-cream border-brand-charcoal"
                      : "bg-brand-slate text-brand-charcoal border-[#e2dfd8]/30"
                  }`}
                >
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3
                    className={`font-serif text-lg font-medium transition-colors duration-300 ${
                      activeIndex === idx ? "text-brand-red" : "text-brand-charcoal"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[10px] font-semibold tracking-wider text-brand-taupe uppercase">
                    {feature.subtitle}
                  </p>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light pt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-charcoal text-brand-cream hover:bg-brand-red transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase shadow-md group"
            >
              Inquire About Wholesale Terms
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* Right Side: Editorial Interactive Picture Grid */}
        <div className="lg:col-span-6 flex flex-col gap-6 justify-center items-center w-full">
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-brand-slate p-3 border border-[#e2dfd8]/40 shadow-xl overflow-hidden group">
            {/* Inner Border Frame */}
            <div className="absolute inset-4 border border-brand-sand/30 pointer-events-none z-20" />
            
            {/* Main Picture Panel */}
            <div className="w-full h-full overflow-hidden relative">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-full object-cover transition-transform duration-[3s] ${
                      activeIndex === idx ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/10" />
                </div>
              ))}
            </div>

            {/* Floating Luxury Tag */}
            <div className="absolute bottom-6 left-6 glassmorphism p-4 border border-[#e2dfd8]/30 max-w-[200px] shadow-lg z-20 transition-transform duration-500 hover:translate-y-[-4px]">
              <p className="font-sans text-[9px] tracking-widest text-brand-red uppercase font-semibold">
                {features[activeIndex].subtitle}
              </p>
              <p className="font-serif text-sm text-brand-charcoal mt-0.5">
                {features[activeIndex].title}
              </p>
            </div>
          </div>

          {/* Selector Thumbnails Row */}
          <div className="flex gap-4 w-full max-w-md justify-between items-center px-2">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-1 aspect-square border overflow-hidden shadow-sm transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "border-brand-red ring-2 ring-brand-red/25 scale-[1.03]"
                    : "border-[#e2dfd8]/60 hover:border-brand-sand opacity-70 hover:opacity-100"
                }`}
              >
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hospitality;
