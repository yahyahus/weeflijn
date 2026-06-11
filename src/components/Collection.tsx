import { useState } from "react";
import { Plus } from "lucide-react";

interface CollectionItem {
  id: string;
  category: "linen" | "silk" | "blend";
  title: string;
  subtitle: string;
  image: string;
  specs: string[];
}

export const Collection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "linen" | "silk" | "blend">("all");

  const collections: CollectionItem[] = [
    {
      id: "linen-01",
      category: "linen",
      title: "Artisanal Linen",
      subtitle: "Pure Belgian Flax",
      image: "/linen_collection.png",
      specs: ["100% Belgian Flax", "Pre-washed for softness", "Highly breathable"],
    },
    {
      id: "silk-01",
      category: "silk",
      title: "Crimson Mulberry",
      subtitle: "Fine Satin Weave",
      image: "/silk_collection.png",
      specs: ["100% Mulberry Silk", "22 Momme thickness", "Organic crimson dyes"],
    },
    {
      id: "blend-01",
      category: "blend",
      title: "The Heritage Blend",
      subtitle: "Linen & Silk Combination",
      image: "/hero_textile.png",
      specs: ["60% Silk / 40% Linen", "Hand-woven border", "High textile weight"],
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? collections
      : collections.filter((item) => item.category === activeFilter);

  const filters = [
    { label: "All Collections", value: "all" },
    { label: "Pure Linen", value: "linen" },
    { label: "Pure Silk", value: "silk" },
    { label: "Artisanal Blends", value: "blend" },
  ];

  return (
    <section id="collection" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
            The Weaves
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">
            Curated Collections
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm max-w-md font-light">
            Explore our curated series of luxury textiles. Each category represents 
            a distinct sensory quality and manufacturing approach.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#e2dfd8]/40 pb-2 md:pb-0">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as any)}
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

      {/* Grid of Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-brand-cream border border-[#e2dfd8]/40 overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-sand/40 transition-all duration-500"
          >
            {/* Image container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-slate">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-xs font-semibold font-sans uppercase tracking-widest text-brand-cream bg-brand-red/90 px-4 py-2 hover:bg-brand-red transition-colors duration-300"
                >
                  <Plus size={14} /> Request Sample
                </a>
              </div>
            </div>

            {/* Content info */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-widest text-brand-taupe uppercase">
                  {item.category === "blend" ? "Silk-Linen Blend" : `Pure ${item.category}`}
                </span>
                <h3 className="font-serif text-xl text-brand-charcoal mt-1 group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs italic text-brand-charcoal/65 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <ul className="pt-4 border-t border-[#e2dfd8]/50 space-y-2">
                {item.specs.map((spec, i) => (
                  <li key={i} className="font-sans text-xs text-brand-charcoal/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-red" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
