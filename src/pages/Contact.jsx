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
    <div className="bg-cyber-black min-h-screen w-full flex items-center justify-center px-4 py-20 md:px-8 relative overflow-hidden grid-bg">
      {/* Decoración */}
      <div className="absolute top-20 left-10 w-px h-96 bg-gradient-to-b from-cyber-cyan to-transparent opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-px h-96 bg-gradient-to-t from-cyber-magenta to-transparent opacity-20"></div>

      {/* Alert */}
      {alert && (
        <div 
          className={`fixed top-4 right-4 z-50 px-4 py-2 border-2 text-sm md:text-base font-bold ${
            alert === 'success' 
              ? 'border-cyber-cyan text-cyber-cyan bg-cyber-dark' 
              : 'border-cyber-magenta text-cyber-magenta bg-cyber-dark'
          }`}
        >
          {alert === 'success' 
            ? '[✓] ' + t("email-success-message") 
            : '[✗] ' + t("email-error-message")
          }
        </div>
      )}

      <div className="max-w-5xl w-full space-y-8 z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 border-2 border-cyber-magenta mb-4">
            <span className="glow-text-magenta font-bold">&gt; CONTACTO</span>
          </div>
          <h2 className="glow-text text-4xl md:text-6xl font-black tracking-wider">
            {t("contact-title")}
          </h2>
          <p className="text-cyber-white text-sm md:text-lg max-w-2xl mx-auto">
            {t("contact-subtitle")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="cyber-border p-6 md:p-8 bg-cyber-dark/50 backdrop-blur space-y-6">
            <div className="text-cyber-cyan font-bold text-lg">[ INFORMACIÓN ]</div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-3 border-b border-cyber-gray">
                <AiOutlineMail className="text-cyber-magenta text-xl flex-shrink-0 mt-1" />
                <div>
                  <div className="text-cyber-cyan text-xs font-bold">EMAIL</div>
                  <div className="text-cyber-white break-all">cisnerosandree2@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-cyber-gray">
                <AiOutlinePhone className="text-cyber-magenta text-xl flex-shrink-0 mt-1" />
                <div>
                  <div className="text-cyber-cyan text-xs font-bold">TELÉFONO</div>
                  <div className="text-cyber-white">(+593) 995297859</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ImLocation2 className="text-cyber-magenta text-xl flex-shrink-0 mt-1" />
                <div>
                  <div className="text-cyber-cyan text-xs font-bold">UBICACIÓN</div>
                  <div className="text-cyber-white">Quito, Ecuador</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-cyber-gray pt-6">
              <div className="text-cyber-cyan font-bold text-xs mb-4">[ REDES SOCIALES ]</div>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-2 border-cyber-cyan text-cyber-cyan flex items-center justify-center hover:bg-cyber-cyan hover:text-cyber-black transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="cyber-border p-6 md:p-8 bg-cyber-dark/50 backdrop-blur space-y-4"
          >
            <div className="text-cyber-magenta font-bold text-lg">[ FORMULARIO ]</div>

            <input
              type="text"
              name="user_name" 
              placeholder={t("form-name-placeholder")}
              className="w-full p-3 bg-cyber-dark border-2 border-cyber-cyan text-cyber-cyan placeholder:text-cyber-gray font-bold focus:outline-none focus:border-cyber-magenta focus:box-shadow-none transition-colors"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("form-email-placeholder")}
              className="w-full p-3 bg-cyber-dark border-2 border-cyber-cyan text-cyber-cyan placeholder:text-cyber-gray font-bold focus:outline-none focus:border-cyber-magenta transition-colors"
              required
            />
            <textarea
              name="message" 
              placeholder={t("form-message-placeholder")}
              className="w-full p-3 bg-cyber-dark border-2 border-cyber-cyan text-cyber-cyan placeholder:text-cyber-gray font-bold h-24 md:h-28 focus:outline-none focus:border-cyber-magenta transition-colors resize-none"
              required
            ></textarea>
            <button type="submit" className="btn-cyber w-full">
              &gt;_ {t("form-submit-button")} &lt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
