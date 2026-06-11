import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Collection from "./components/Collection";
import Contact from "./components/Contact";
import Logo from "./components/Logo";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-red selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Home & Greeting */}
        <Hero />

        {/* Brand values and history */}
        <Philosophy />

        {/* Collection & Weave options */}
        <Collection />

        {/* Lead capture & business card */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <footer className="bg-brand-charcoal text-brand-cream border-t border-[#e2dfd8]/10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-2 flex flex-col space-y-4 items-start">
            <Logo className="h-10 md:h-12 w-auto" lightMode={false} />
            <p className="font-sans text-xs text-brand-cream/60 max-w-sm leading-relaxed pt-2">
              Weef Lijn is a luxury textile collection curated by Hussain Aamir. We design 
              and spin the finest natural linen and silk blends for sophisticated spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-widest text-brand-sand uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Philosophy", "Collection", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-xs text-brand-cream/75 hover:text-brand-red tracking-wide uppercase transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Contacts */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-widest text-brand-sand uppercase">
              Coordinates
            </h4>
            <ul className="space-y-2 text-xs text-brand-cream/75 font-sans leading-relaxed">
              <li>
                <span className="font-semibold block text-brand-sand">Creative Lead:</span>
                Hussain Aamir
              </li>
              <li>
                <span className="font-semibold block text-brand-sand">Phone:</span>
                <a href="tel:+31652031717" className="hover:text-brand-red transition-colors">
                  +31 6 52 03 17 17
                </a>
              </li>
              <li>
                <span className="font-semibold block text-brand-sand">Email:</span>
                <a href="mailto:info@weeflijn.nl" className="hover:text-brand-red transition-colors">
                  info@weeflijn.nl
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Details */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#e2dfd8]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-wider text-brand-cream/40 uppercase">
            &copy; {currentYear} Weef Lijn. All Rights Reserved.
          </p>
          <p className="font-sans text-[10px] tracking-wider text-brand-cream/40 uppercase">
            Curated in the Netherlands
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
