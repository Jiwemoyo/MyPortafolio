import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-theme-bg min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Elementos decorativos geométricos */}
      <div className="absolute top-10 left-10 w-40 h-40 border-2 border-theme-primary opacity-10 transform -rotate-45 rounded-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-theme-secondary opacity-10 rounded-full"></div>
      <div className="absolute top-1/2 right-20 w-1 h-40 bg-gradient-to-b from-theme-primary via-theme-secondary to-transparent opacity-30"></div>

      <div className="flex flex-col items-center justify-center gap-6 px-4 text-center sm:items-start sm:gap-10 z-20 max-w-3xl">
        {/* Línea decorativa */}
        <div className="w-12 h-1 bg-theme-primary mb-4 rounded-full"></div>

        <h1 className="text-theme-text font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight tracking-tighter">
          {t("greetings")}
        </h1>

        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="secondary-text">&gt; </span>
          <span className="primary-text">{t("profetion")}</span>
        </div>

        <p className="font-medium text-theme-muted text-sm sm:text-base md:text-lg lg:text-xl max-w-lg border-l-4 border-theme-primary pl-4 py-2">
          {t("presentation")}
        </p>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-4">
          {[t("skills-home.DS"), t("skills-home.wD"), t("skills-home.3D")].map((skill, idx) => (
            <div key={idx} className="minimal-border px-4 py-1.5 text-xs sm:text-sm text-theme-primary font-semibold bg-white rounded-full">
              {skill}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="btn-primary w-full">
              {t("button-Contact")}
            </button>
          </Link>

          <Link to="/projects" className="w-full sm:w-auto">
            <button className="btn-outline w-full">
              {t("button-Projects")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
