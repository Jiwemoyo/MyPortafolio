import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [alert, setAlert] = useState(null);

  // Definir el array de redes sociales fuera del JSX
  const socialLinks = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/jiwemoyot/" },
    { icon: <FaGithub />, link: "https://github.com/Jiwemoyo" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jiwemoyo/" }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_im8x4pe', 'template_4pnvlak', form.current, {
        publicKey: '25e3DIpVlNzn8HQnL',
      })
      .then(
        () => {
          setAlert('success');
          form.current.reset();
          setTimeout(() => setAlert(null), 3000);
        },
        (error) => {
          setAlert('error');
          setTimeout(() => setAlert(null), 3000);
        },
      );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 lg:p-8 w-full relative flex flex-col items-center">

      {/* Alert Component */}
      {alert && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-4 border-4 border-ik-dark font-pixel text-xl shadow-brutal animate-bounce ${alert === 'success' ? 'bg-ik-teal text-ik-dark' : 'bg-ik-accent text-white'
            }`}
        >
          {alert === 'success'
            ? `> ${t("email-success-message")}`
            : `! ERROR: ${t("email-error-message")}`
          }
        </div>
      )}

      {/* Main Dossier Container */}
      <div className="w-full max-w-6xl brutal-box bg-white p-6 md:p-12 relative border-4 border-ik-dark overflow-hidden">

        {/* Fake Tape Details */}
        <div className="absolute -top-2 left-1/4 w-16 h-6 bg-ik-dark/10 transform -rotate-3"></div>
        <div className="absolute -top-2 left-3/4 w-20 h-6 bg-ik-dark/10 transform rotate-2"></div>
        <div className="absolute -bottom-2 left-1/2 w-24 h-6 bg-ik-dark/10 transform rotate-1"></div>

        {/* Header Document Style */}
        <div className="border-b-4 border-ik-dark pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative">

          {/* Fake Stamp */}
          <div className="absolute top-0 right-0 border-4 border-ik-accent text-ik-accent font-display text-4xl p-2 transform rotate-12 opacity-80 pointer-events-none mix-blend-multiply">
            APPROVED
          </div>

          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-ik-dark text-ik-light font-pixel text-lg px-2 py-0.5">FILE: #004-COMM</span>
              <span className="font-pixel text-lg text-ik-dark">CONFIDENTIAL</span>
            </div>
            <h2 className="text-ik-dark font-display uppercase text-5xl md:text-7xl tracking-tighter mr-20">
              {t("contact-title")}
            </h2>
          </div>

          <div className="font-pixel text-ik-dark grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-base border-2 border-ik-dark p-2 bg-ik-light w-full md:w-auto">
            <span className="font-bold border-b-2 border-ik-dark col-span-2 pb-1 mb-1">METADATA</span>
            <span>STATUS:</span> <span className="text-ik-accent">ONLINE</span>
            <span>SEC_LVL:</span> <span>MAX</span>
          </div>
        </div>

        {/* Content Split */}
        <div className="grid md:grid-cols-5 gap-12 w-full">

          {/* Contact Details Column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <p className="font-pixel text-xl text-ik-dark leading-relaxed mb-6 border-l-4 border-ik-accent pl-4">
                {t("contact-subtitle")}
              </p>

              <h3 className="font-display text-2xl text-ik-dark uppercase mb-4 decoration-4 underline-offset-4 underline">
                {t("contact-info-title")}
              </h3>

              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <div className="font-pixel text-ik-dark border-2 border-ik-dark p-2 bg-ik-light group-hover:bg-ik-accent group-hover:text-white transition-colors">
                    <AiOutlineMail className="text-2xl" />
                  </div>
                  <span className="font-pixel text-xl text-ik-dark break-all decoration-ik-dark/30 underline decoration-2 underline-offset-4">
                    cisnerosandree2@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="font-pixel text-ik-dark border-2 border-ik-dark p-2 bg-ik-light group-hover:bg-ik-accent group-hover:text-white transition-colors">
                    <AiOutlinePhone className="text-2xl" />
                  </div>
                  <span className="font-pixel text-xl text-ik-dark decoration-ik-dark/30 underline decoration-2 underline-offset-4">
                    (+593) 995297859
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="font-pixel text-ik-dark border-2 border-ik-dark p-2 bg-ik-light group-hover:bg-ik-accent group-hover:text-white transition-colors">
                    <ImLocation2 className="text-2xl" />
                  </div>
                  <span className="font-pixel text-xl text-ik-dark decoration-ik-dark/30 underline decoration-2 underline-offset-4">
                    Quito-Ecuador
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-auto border-t-4 border-ik-dark pt-6 border-dashed">
              <div className="font-pixel text-ik-dark text-lg mb-4">NETWORK_NODES // LINK_ACCOUNTS</div>
              <ul className="flex gap-4 text-2xl">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-ik-light text-ik-dark border-4 border-ik-dark p-3 hover:bg-ik-accent hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <div className="bg-ik-dark text-ik-light p-2 font-pixel text-lg flex justify-between items-center">
                <span>NEW_ENTRY_FORM</span>
                <span className="animate-pulse">REC...</span>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-ik-dark text-xl uppercase">1. {t("form-name-placeholder")}</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="[ INGRESAR NOMBRE ]"
                  className="w-full p-3 bg-transparent border-b-4 border-l-4 border-ik-dark text-ik-dark font-pixel text-xl placeholder:text-ik-dark/40 focus:outline-none focus:bg-ik-light focus:border-ik-accent transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-ik-dark text-xl uppercase">2. {t("form-email-placeholder")}</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="[ INGRESAR CORREO ]"
                  className="w-full p-3 bg-transparent border-b-4 border-l-4 border-ik-dark text-ik-dark font-pixel text-xl placeholder:text-ik-dark/40 focus:outline-none focus:bg-ik-light focus:border-ik-accent transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-display text-ik-dark text-xl uppercase">3. {t("form-message-placeholder")}</label>
                <textarea
                  name="message"
                  placeholder="[ INGRESAR MENSAJE ]"
                  className="w-full p-3 bg-transparent border-4 border-ik-dark border-dashed text-ik-dark font-pixel text-xl placeholder:text-ik-dark/40 h-48 focus:outline-none focus:bg-ik-light focus:border-solid focus:border-ik-accent transition-all resize-none leading-relaxed line-clamp-none bg-[linear-gradient(transparent_27px,_#11111122_27px)] bg-[length:100%_28px]"
                  required
                ></textarea>
              </div>

              {/* Fake Barcode before Submit */}
              <div className="w-full flex flex-col mt-4">
                <div className="h-10 w-full flex opacity-70 mb-2">
                  {/* Generar barras aleatorias visuales con CSS */}
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className={`h-full bg-ik-dark mx-[1px] ${i % 3 === 0 ? 'w-1' : i % 5 === 0 ? 'w-3' : 'w-2'}`}></div>
                  ))}
                </div>

                <button
                  type="submit"
                  value="Send"
                  className="brutal-btn bg-ik-accent text-white w-full text-2xl py-4 hover:bg-ik-dark"
                >
                  TRANSMIT_DATA
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;