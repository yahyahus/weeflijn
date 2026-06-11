interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16", lightMode = true }) => {
  const textColor = lightMode ? "text-brand-charcoal" : "text-brand-cream";
  const subColor = lightMode ? "fill-brand-charcoal" : "fill-brand-cream";
  const needleColor = lightMode ? "fill-brand-charcoal" : "fill-brand-sand";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 500 160"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* WEEF - Strong Geometric Sans-Serif */}
        <text
          x="195"
          y="85"
          textAnchor="end"
          fontFamily="'Outfit', system-ui, sans-serif"
          fontWeight="800"
          fontSize="56"
          letterSpacing="2"
          className={textColor}
          fill="currentColor"
        >
          WEEF
        </text>

        {/* Cursive "Lijn" + Needle and Thread */}
        <g transform="translate(195, 0)">
          {/* Sewing Needle */}
          <path
            d="M 46,12 L 50,12 L 49.2,105 L 48,115 L 46.8,105 Z"
            className={needleColor}
          />
          {/* Needle Eye Hole (Transparent Cutout) */}
          <ellipse
            cx="48"
            cy="24"
            rx="1"
            ry="6"
            fill="#faf9f6"
            className={lightMode ? "fill-brand-cream" : "fill-brand-charcoal"}
          />

          {/* Red Thread Passing Through the Needle Eye */}
          <path
            d="M 22,25 C 32,25 43,24 48,24 C 53,24 64,22 75,25"
            fill="none"
            stroke="#c8102e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Elegant script L path wrapping around needle */}
          <path
            d="M 5,80 C -5,70 15,25 45,25 C 75,25 78,60 55,70 C 25,82 5,100 12,108 C 20,116 52,112 75,90"
            fill="none"
            stroke="#c8102e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* "ijn" Script Text */}
          <text
            x="80"
            y="98"
            fontFamily="'Playfair Display', Georgia, serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="48"
            fill="#c8102e"
          >
            ijn
          </text>
        </g>

        {/* LUXURY TEXTILE COLLECTION subtitle */}
        <text
          x="250"
          y="140"
          textAnchor="middle"
          fontFamily="'Outfit', system-ui, sans-serif"
          fontWeight="500"
          fontSize="13"
          letterSpacing="7"
          className={subColor}
          fill="currentColor"
        >
          LUXURY TEXTILE COLLECTION
        </text>
      </svg>
    </div>
  );
};

export default Logo;
