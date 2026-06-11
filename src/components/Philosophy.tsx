import { Scissors, Sparkles, Leaf } from "lucide-react";

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: <Scissors className="text-brand-red w-6 h-6" />,
      title: "Artisanal Heritage",
      description:
        "Every thread is guided by generations of weaving expertise. We blend traditional looms with contemporary designs to construct textiles that tell stories of timeless heritage.",
    },
    {
      icon: <Sparkles className="text-brand-sand w-6 h-6" />,
      title: "Uncompromising Quality",
      description:
        "We selectively source only the finest raw linen, premium mulberry silk, and organic cotton. Our meticulous inspection guarantees a soft hand-feel, structural durability, and a refined drape.",
    },
    {
      icon: <Leaf className="text-brand-taupe w-6 h-6" />,
      title: "Conscious Crafting",
      description:
        "Luxury should be kind. Our production practices prioritize sustainable farming, non-toxic dyes, and zero-waste yarn-spinning to preserve environmental health and pure products.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 px-6 md:px-12 bg-brand-slate/40 border-y border-[#e2dfd8]/40"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="max-w-3xl space-y-4">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal leading-tight">
            Crafting the Extraordinary <br />
            from the <span className="italic">Simplest Threads</span>
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-base max-w-2xl font-light mt-4">
            Under the creative guidance of Hussain Aamir, Weef Lijn elevates textile 
            curation from a trade to an art form. We believe that fabrics are not just 
            materials, but sensory landscapes that shape your living space.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-brand-cream border border-[#e2dfd8]/40 p-8 md:p-10 shadow-sm transition-all duration-500 hover:shadow-md hover:border-brand-sand/50 flex flex-col space-y-6"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-brand-slate border border-[#e2dfd8]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-charcoal group-hover:text-brand-cream">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-light text-brand-charcoal">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed font-light flex-grow">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
