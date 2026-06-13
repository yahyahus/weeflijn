import logoJpg from "../assets/Weeflijn___Pakistan_VC_75dc40d2.jpg";

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16", lightMode = true }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoJpg}
        alt="Weef Lijn"
        className={`h-full w-auto object-contain transition-all duration-300 ${
          !lightMode ? "invert brightness-200 contrast-200" : ""
        }`}
      />
    </div>
  );
};

export default Logo;
