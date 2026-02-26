import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cyber-black min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden grid-bg">
      {/* Elementos decorativos geométricos */}
      <div className="absolute top-10 left-10 w-40 h-40 border-2 border-cyber-cyan opacity-20 transform -rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-cyber-magenta opacity-15"></div>
      <div className="absolute top-1/2 right-20 w-1 h-40 bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-transparent"></div>

      <div className="flex flex-col items-center justify-center gap-6 px-4 text-center sm:items-start sm:gap-10 z-20 max-w-3xl">
        {/* Línea decorativa */}
        <div className="w-12 h-1 bg-cyber-cyan mb-4"></div>

        <h1 className="glow-text font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight tracking-tighter">
          {t("greetings")}
        </h1>
        
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="glow-text-magenta">&gt; </span>
          <span className="glow-text">{t("profetion")}</span>
        </div>

        <p className="font-bold text-cyber-white text-sm sm:text-base md:text-lg lg:text-xl max-w-lg border-l-4 border-cyber-cyan pl-4 py-2">
          {t("presentation")}
        </p>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-4">
          {[t("skills-home.DS"), t("skills-home.wD"), t("skills-home.3D")].map((skill, idx) => (
            <div key={idx} className="cyber-border px-3 py-1 text-xs sm:text-sm text-cyber-cyan font-bold">
              [{skill}]
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="btn-cyber w-full">
              &gt;_ {t("button-Contact")}
            </button>
          </Link>

          <Link to="/projects" className="w-full sm:w-auto">
            <button className="btn-cyber w-full">
              &gt;_ {t("button-Projects")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
