import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row items-stretch justify-center p-4 lg:p-8 relative gap-6">

      {/* Columna Izquierda - Título principal y presentación */}
      <div className="flex-1 brutal-box p-8 flex flex-col justify-center relative overflow-hidden group">
        {/* Fondo decorativo texto repetido */}
        <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none transform -rotate-12">
          <h1 className="font-display text-[15rem] leading-none text-ik-dark">IK</h1>
        </div>

        <div className="z-10 relative">
          <div className="inline-block bg-ik-dark text-ik-light font-pixel text-xl px-4 py-1 mb-6 -skew-x-12">
            ATTENTION: PROXY
          </div>

          <h1 className="primary-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4">
            {t("greetings")}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-2 bg-ik-accent"></span>
            <span className="font-display text-2xl md:text-4xl text-ik-dark uppercase tracking-widest">{t("profetion")}</span>
          </div>

          <div className="brutal-box p-4 bg-white mb-8 border-2">
            <p className="font-pixel text-xl md:text-2xl text-ik-dark leading-relaxed">
              {t("presentation")}
            </p>
          </div>

          {/* Skills Tokens */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[t("skills-home.DS"), t("skills-home.wD"), t("skills-home.3D")].map((skill, idx) => (
              <div key={idx} className="border-2 border-ik-dark bg-ik-teal px-4 py-1 font-display text-ik-dark text-sm uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                &gt; {skill}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="brutal-btn bg-ik-accent text-white w-full text-lg">
                {t("button-Contact")} //
              </button>
            </Link>

            <Link to="/projects" className="w-full sm:w-auto">
              <button className="brutal-btn bg-white text-ik-dark w-full text-lg">
                {t("button-Projects")} //
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Columna Derecha - Elementos gráficos ZZZ style */}
      <div className="hidden md:flex flex-col w-1/3 min-w-[300px] gap-6">

        {/* Graphic Box 1 - "Image placeholder" */}
        <div className="flex-1 brutal-box bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-4 bg-ik-dark opacity-10"></div>
          <div className="w-32 h-32 border-4 border-dashed border-ik-dark rounded-full flex items-center justify-center mb-4 transition-transform group-hover:rotate-180 duration-700">
            <span className="font-pixel text-2xl">IMG_SYS</span>
          </div>
          <h3 className="font-display text-2xl uppercase relative z-10 bg-ik-accent text-white px-2">
            [Aquí iría una imagen]
          </h3>
        </div>

        {/* Info Box 2 */}
        <div className="brutal-box bg-white p-6 border-4 flex justify-between items-center group cursor-crosshair">
          <div>
            <div className="font-pixel text-ik-dark text-lg">SYS_STATUS</div>
            <div className="font-display text-3xl text-ik-accent">ONLINE</div>
          </div>
          <div className="w-12 h-12 bg-ik-dark rounded-full flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-ik-accent rounded-full"></div>
          </div>
        </div>
      </div>

    </div>
  );
};
