import { useState } from "react";
import { Phone, Mail, Globe, Check } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "blend",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "blend",
        message: "",
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#f4f3ec] border-t border-[#e2dfd8]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Brand Card Reproduction */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold tracking-widest text-brand-red uppercase">
                Connect With Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-charcoal">
                Request an <br />
                <span className="italic">Exclusive Consult</span>
              </h2>
              <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed font-light">
                Whether you require samples, custom weaving commissions, or trade terms 
                for luxury interior projects, our team is at your disposal.
              </p>
            </div>

            {/* Business Card Representation */}
            <div className="relative w-full max-w-md aspect-[1.62/1] bg-white border border-[#e2dfd8] shadow-lg overflow-hidden p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
              {/* Artistic geometric lines matching the business card's subtle background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-charcoal via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-sand/10 to-transparent transform rotate-45 translate-x-20 -translate-y-20 pointer-events-none" />

              {/* Card Header (Branding) */}
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wider text-brand-charcoal">WEEF LIJN</h4>
                  <p className="font-sans text-[8px] tracking-[4px] text-brand-taupe uppercase mt-1">
                    Luxury Textile Collection
                  </p>
                </div>
                {/* Red thread styling element */}
                <div className="w-6 h-6 border-r-2 border-t-2 border-brand-red rounded-tr-full opacity-60" />
              </div>

              {/* Card Mid: Name & Title */}
              <div className="my-4">
                <h3 className="font-sans font-bold text-xl md:text-2xl tracking-wider text-brand-charcoal uppercase">
                  Hussain Aamir
                </h3>
                <p className="font-sans text-[9px] tracking-widest text-brand-red uppercase mt-1 font-medium">
                  Creative Director
                </p>
              </div>

              {/* Card Footer: Contacts */}
              <div className="space-y-2 border-t border-[#e2dfd8]/60 pt-4">
                <div className="flex items-center gap-3 text-xs text-brand-charcoal/80 font-sans">
                  <Phone size={13} className="text-brand-red" />
                  <a href="tel:+31652031717" className="hover:text-brand-red transition-colors font-medium">
                    +31 6 52 03 17 17
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-charcoal/80 font-sans">
                  <Mail size={13} className="text-brand-red" />
                  <a href="mailto:info@weeflijn.nl" className="hover:text-brand-red transition-colors font-medium">
                    info@weeflijn.nl
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-charcoal/80 font-sans">
                  <Globe size={13} className="text-brand-red" />
                  <a href="https://www.weeflijn.nl" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors font-medium">
                    www.weeflijn.nl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#e2dfd8]/40 p-8 md:p-12 shadow-sm w-full">
            <h3 className="font-serif text-2xl text-brand-charcoal mb-6 font-light">
              Send an Inquiry
            </h3>

            {isSubmitted ? (
              <div className="bg-[#f0f9eb] border border-[#d6f0c2] text-[#558a2f] p-8 flex flex-col items-center text-center space-y-4 animate-scale-up">
                <div className="w-12 h-12 rounded-full bg-[#d6f0c2] flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#558a2f]" />
                </div>
                <h4 className="font-serif text-xl font-medium">Inquiry Received</h4>
                <p className="font-sans text-sm max-w-sm font-light">
                  Thank you for contacting Weef Lijn. Hussain Aamir or a collection associate 
                  will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block font-sans text-xs font-semibold tracking-wider text-brand-taupe uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-[#e2dfd8] focus:border-brand-red focus:outline-none font-sans text-sm transition-colors rounded-none"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block font-sans text-xs font-semibold tracking-wider text-brand-taupe uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-[#e2dfd8] focus:border-brand-red focus:outline-none font-sans text-sm transition-colors rounded-none"
                      placeholder="e.g. +31 6 00 00 00 00"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block font-sans text-xs font-semibold tracking-wider text-brand-taupe uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-brand-cream border border-[#e2dfd8] focus:border-brand-red focus:outline-none font-sans text-sm transition-colors rounded-none"
                    placeholder="e.g. contact@example.com"
                  />
                </div>

                {/* Material Interest */}
                <div className="space-y-1">
                  <label htmlFor="interest" className="block font-sans text-xs font-semibold tracking-wider text-brand-taupe uppercase">
                    Fabric Collection of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-brand-cream border border-[#e2dfd8] focus:border-brand-red focus:outline-none font-sans text-sm transition-colors rounded-none appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238d8070' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em"
                    }}
                  >
                    <option value="linen">Artisanal Linen Collection</option>
                    <option value="silk">Crimson Mulberry Silk</option>
                    <option value="blend">The Heritage Blend (Linen & Silk)</option>
                    <option value="trade">Custom Commissions / Trade Accounts</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block font-sans text-xs font-semibold tracking-wider text-brand-taupe uppercase">
                    Inquiry Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-brand-cream border border-[#e2dfd8] focus:border-brand-red focus:outline-none font-sans text-sm transition-colors rounded-none resize-none"
                    placeholder="Describe your design plans, dimensional requirements, or quantity wishes..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-charcoal text-brand-cream hover:bg-brand-red disabled:bg-brand-charcoal/50 font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-cream border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
