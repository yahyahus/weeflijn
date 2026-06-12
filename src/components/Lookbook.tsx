import React, { useState } from "react";
import { X, ZoomIn, Eye } from "lucide-react";

// Import all 9 valid images from assets
import img1 from "../assets/image00001.jpg";
import img2 from "../assets/image00002.jpg";
import img3 from "../assets/image00003.jpg";
import img4 from "../assets/image00004.jpg";
import img5 from "../assets/image00005.jpg";
import img6 from "../assets/image00006.jpg";
import img7 from "../assets/image00007.jpg";
import img8 from "../assets/image00008.jpg";

interface LookbookItem {
  id: number;
  src: string;
  category: "bed" | "bath" | "texture";
  title: string;
  description: string;
}

export const Lookbook: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<LookbookItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "bed" | "bath" | "texture">("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const galleryItems: LookbookItem[] = [
    {
      id: 1,
      src: img1,
      category: "bed",
      title: "Signature Percale Bedding",
      description: "Hotel-grade crisp white percale sheets spun for ultimate breathability and comfort.",
    },
    {
      id: 2,
      src: img2,
      category: "bed",
      title: "Classic Oxford Pillowcase",
      description: "Features a structured envelope closure with a double-needle elegant finish.",
    },
    {
      id: 3,
      src: img3,
      category: "texture",
      title: "Organic Flax Close-up",
      description: "Visualizing the raw, breathable, natural slubs of our premium flax weave.",
    },
    {
      id: 4,
      src: img4,
      category: "texture",
      title: "Handcrafted Double-Hem",
      description: "Fine commercial stitching that ensures maximum strength during machine washing.",
    },
    {
      id: 5,
      src: img5,
      category: "bath",
      title: "Plush Ring-Spun Towels",
      description: "High-density Turkish cotton loops designed for quick drying and luxury absorbency.",
    },
    {
      id: 6,
      src: img6,
      category: "texture",
      title: "Refined Table Linens",
      description: "Bringing elegant dining charm to commercial spaces and boutique guest houses.",
    },
    {
      id: 7,
      src: img7,
      category: "texture",
      title: "Ethically Sourced Yarn",
      description: "Uncompromised thread structure prepared using eco-conscious yarn spinning.",
    },
    {
      id: 8,
      src: img8,
      category: "bath",
      title: "Premium Waffle Weave",
      description: "Textured weave structure that provides an exfoliating, spa-like experience.",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const filters = [
    { label: "All Works", value: "all" },
    { label: "Bed Linen", value: "bed" },
    { label: "Bath Linen", value: "bath" },
    { label: "Weaves & Textures", value: "texture" },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, filteredItems.length));
  };

  return (
    <section
      id="lookbook"
      className="py-24 px-6 md:px-12 bg-brand-slate/30 border-y border-[#e2dfd8]/40"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
              Visual Gallery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">
              The Textile Lookbook
            </h2>
            <p className="font-sans text-brand-charcoal/70 text-sm max-w-md font-light">
              A visual display of our textiles in hospitality environments, detailing 
              their rich textures, structural details, and elegant finishes.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-[#e2dfd8]/40 pb-2 md:pb-0">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setActiveFilter(filter.value as any);
                  setVisibleCount(6); // reset counts on filter change
                }}
                className={`px-4 py-2 font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 relative ${
                  activeFilter === filter.value
                    ? "text-brand-red border-b-2 border-brand-red -mb-[2px]"
                    : "text-brand-charcoal/65 hover:text-brand-charcoal"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative bg-brand-cream border border-[#e2dfd8]/40 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-square overflow-hidden bg-brand-slate">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                
                {/* Visual hover state */}
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-brand-cream/95 text-brand-charcoal p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye size={20} className="text-brand-red" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-[#e2dfd8]/30 px-3 py-1 font-sans text-[9px] font-semibold tracking-wider text-brand-taupe uppercase z-10">
                  {item.category === "bed" ? "Bed" : item.category === "bath" ? "Bath" : "Texture"}
                </div>
              </div>

              {/* Title Card */}
              <div className="p-5 border-t border-[#e2dfd8]/40 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-brand-charcoal group-hover:text-brand-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed font-light mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-sans font-bold tracking-widest text-brand-red uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn size={12} /> View Details
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="text-center pt-4">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 border border-brand-charcoal hover:border-brand-red hover:text-brand-red text-brand-charcoal font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Load More Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-brand-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedImage(null)} />

          <div className="relative max-w-4xl w-full bg-brand-cream border border-[#e2dfd8] overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-brand-charcoal text-brand-cream hover:bg-brand-red transition-colors rounded-full"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image Box */}
            <div className="md:col-span-8 bg-brand-charcoal flex items-center justify-center overflow-hidden aspect-square md:aspect-auto md:h-[70vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content Box */}
            <div className="md:col-span-4 p-8 flex flex-col justify-between bg-white h-full">
              <div className="space-y-6">
                <div>
                  <span className="font-sans text-[10px] font-semibold tracking-widest text-brand-red uppercase">
                    Curated Lookbook
                  </span>
                  <h3 className="font-serif text-2xl text-brand-charcoal mt-1">
                    {selectedImage.title}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-brand-slate font-sans text-[9px] font-semibold tracking-wider text-brand-taupe uppercase border border-[#e2dfd8]/40">
                    {selectedImage.category === "bed" ? "Bed Linen" : selectedImage.category === "bath" ? "Bath Linen" : "Texture Spec"}
                  </span>
                </div>

                <div className="border-t border-[#e2dfd8]/50 pt-6 space-y-4">
                  <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed font-light">
                    {selectedImage.description}
                  </p>
                  <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed italic">
                    Designed for heavy-duty commercial laundering, keeping its soft hand-feel and shape through endless cycles.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#e2dfd8]/50">
                <a
                  href="#contact"
                  onClick={() => setSelectedImage(null)}
                  className="w-full inline-block text-center py-3.5 bg-brand-charcoal text-brand-cream hover:bg-brand-red font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300"
                >
                  Request Fabric Sample
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Lookbook;
