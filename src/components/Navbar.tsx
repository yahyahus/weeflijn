import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Collection", href: "#collection" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphism shadow-sm py-3 border-b border-[#e2dfd8]/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <Logo className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-medium text-sm text-brand-charcoal/80 hover:text-brand-red tracking-wider uppercase transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-brand-charcoal text-brand-cream hover:bg-brand-red font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-none shadow-sm"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-brand-charcoal focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[68px] z-40 bg-brand-cream/98 backdrop-blur-md md:hidden transition-all duration-500 ease-in-out border-t border-[#e2dfd8]/30 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-12 space-y-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-brand-charcoal hover:text-brand-red font-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#e2dfd8]/60 flex flex-col space-y-6">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-brand-charcoal text-brand-cream hover:bg-brand-red text-center font-sans text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
            >
              Inquire Now
            </a>

            {/* Quick Contact Details in mobile menu */}
            <div className="flex flex-col space-y-3 pt-4 text-sm text-brand-charcoal/70 font-sans">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-sand" />
                <a href="tel:+31652031717" className="hover:text-brand-red transition-colors">+31 6 52 03 17 17</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-sand" />
                <a href="mailto:info@weeflijn.nl" className="hover:text-brand-red transition-colors">info@weeflijn.nl</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
