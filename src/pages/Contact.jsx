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
    <div className="bg-theme-bg min-h-screen w-full flex items-center justify-center px-4 py-20 md:px-8 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-20 left-10 w-px h-96 bg-gradient-to-b from-theme-primary to-transparent opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-px h-96 bg-gradient-to-t from-theme-secondary to-transparent opacity-20"></div>

      {/* Alert */}
      {alert && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg border text-sm md:text-base font-bold shadow-lg ${alert === 'success'
              ? 'border-green-200 text-green-700 bg-green-50'
              : 'border-red-200 text-red-700 bg-red-50'
            }`}
        >
          {alert === 'success'
            ? '✓ ' + t("email-success-message")
            : '✗ ' + t("email-error-message")
          }
        </div>
      )}

      <div className="max-w-5xl w-full space-y-8 z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-1.5 bg-theme-primary/10 rounded-full mb-4">
            <span className="primary-text text-sm font-bold tracking-wider">CONTACTO</span>
          </div>
          <h2 className="text-theme-text text-4xl md:text-6xl font-black tracking-tight">
            {t("contact-title")}
          </h2>
          <p className="text-theme-muted text-sm md:text-lg max-w-2xl mx-auto">
            {t("contact-subtitle")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="minimal-border p-6 md:p-8 space-y-6">
            <div className="text-theme-primary font-bold text-lg">Información</div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                  <AiOutlineMail className="text-theme-primary text-xl" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold mb-1">EMAIL</div>
                  <div className="text-theme-text font-medium break-all">cisnerosandree2@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                  <AiOutlinePhone className="text-theme-primary text-xl" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold mb-1">TELÉFONO</div>
                  <div className="text-theme-text font-medium">(+593) 995297859</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                  <ImLocation2 className="text-theme-primary text-xl" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-bold mb-1">UBICACIÓN</div>
                  <div className="text-theme-text font-medium">Quito, Ecuador</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-100 pt-6">
              <div className="text-gray-500 font-bold text-xs mb-4">REDES SOCIALES</div>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center hover:bg-theme-primary hover:text-white transition-all shadow-sm"
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
            className="minimal-border p-6 md:p-8 space-y-5"
          >
            <div className="text-theme-primary font-bold text-lg">Envíame un mensaje</div>

            <input
              type="text"
              name="user_name"
              placeholder={t("form-name-placeholder")}
              className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-theme-text placeholder:text-gray-400 focus:outline-none focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all font-medium"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("form-email-placeholder")}
              className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-theme-text placeholder:text-gray-400 focus:outline-none focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all font-medium"
              required
            />
            <textarea
              name="message"
              placeholder={t("form-message-placeholder")}
              className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-theme-text placeholder:text-gray-400 h-32 focus:outline-none focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all font-medium resize-none"
              required
            ></textarea>
            <button type="submit" className="btn-primary w-full py-3.5 text-base">
              {t("form-submit-button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
