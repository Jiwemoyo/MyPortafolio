import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8 relative">
      <div className="fixed bottom-0 right-0 sm:right-10 md:right-32 pointer-events-none z-0 opacity-80 select-none">
        <DotLottieReact
          src="https://lottie.host/6c6fbdb7-72ac-49a2-b011-938800ae7ff6/2Nzn4a4tsV.lottie"
          autoplay
          hover
          style={{ }}
          className="w-40 h-40 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-screen gap-5 px-8 text-center sm:items-start sm:gap-11 z-20">
        <h1 className=" text-custom-celeste font-bold text-3xl sm:text-9xl">
          {t("greetings")}
        </h1>
        <h2 className=" text-custom-red font-bold text-2xl sm:text-5xl">
          {t("profetion")}
        </h2>
        <p className=" font-bold text-custom-white sm:text-2xl">
          {t("presentation")}
        </p>
        <ul className="grid grid-cols-3 gap-8 text-custom-white mt-5 font-semibold sm:flex">
          <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">
            {t("skills-home.DS")}
          </li>
          <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">
            {t("skills-home.wD")}
          </li>
          <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">
            {t("skills-home.3D")}
          </li>
          {/* <li className="col-start-2 animate-bg-fade bg-blue-500 p-2 rounded-lg">
            Blender
          </li> */}
        </ul>

        <div className=" w-full flex justify-between gap-5 mt-5 sm:w-auto sm:gap-11">
          <Link to="/contact">
            <button
              className="font-bold text-custom-white bg-custom-red px-8 py-4 rounded-lg
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    hover:shadow-custom-celeste/20 hover:bg-custom-celeste hover:text-custom-blue"
            >
              {t("button-Contact")}
            </button>
          </Link>

          <Link to="/projects">
            <button
              className="font-bold text-custom-white bg-custom-red px-8 py-4 rounded-lg
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                    hover:shadow-custom-celeste/20 hover:bg-custom-celeste hover:text-custom-blue"
            >
              {t("button-Projects")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
