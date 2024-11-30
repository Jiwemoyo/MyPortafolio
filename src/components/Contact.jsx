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
    <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center px-4 md:px-8">
      {/* Alert Component */}
      {alert && (
        <div 
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-white ${
            alert === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {alert === 'success' 
            ? t("email-success-message") 
            : t("email-error-message")
          }
        </div>
      )}

      <div className="max-w-5xl w-full py-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-custom-red font-bold text-3xl md:text-4xl lg:text-5xl">
            {t("contact-title")}
          </h2>
          <p className="font-bold text-custom-white text-lg md:text-xl lg:text-2xl">
            {t("contact-subtitle")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Contact Information */}
          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="font-bold text-custom-celeste text-xl md:text-2xl">
              {t("contact-info-title")}
            </h3>
            
            {/* Contact Details */}
            <ul className="text-custom-white font-semibold space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-3 hover:text-custom-celeste transition-colors">
                <AiOutlineMail className="text-custom-red text-xl flex-shrink-0" />
                <span className="break-all">cisnerosandree2@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 hover:text-custom-celeste transition-colors">
                <AiOutlinePhone className="text-custom-red text-xl flex-shrink-0" />
                <span>(+593) 995297859</span>
              </li>
              <li className="flex items-center gap-3 hover:text-custom-celeste transition-colors">
                <ImLocation2 className="text-custom-red text-xl flex-shrink-0" />
                <span>Quito-Ecuador</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <ul className="flex gap-6 text-2xl md:text-3xl text-custom-red">
              {[
                { icon: <FaInstagram />, link: "https://www.instagram.com/jiwemoyot/" },
                { icon: <FaGithub />, link: "https://github.com/Jiwemoyo" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/jiwemoyo/" }
              ].map((social, index) => (
                <li key={index} className="hover:text-custom-celeste transition-colors">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-4 flex flex-col justify-center"
          >
            <input
              type="text"
              name="user_name" 
              placeholder={t("form-name-placeholder")}
              className="w-full p-3 bg-custom-white bg-opacity-10 border-2 md:border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste focus:outline-none focus:ring-2 focus:ring-custom-red transition-all"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("form-email-placeholder")}
              className="w-full p-3 bg-custom-white bg-opacity-10 border-2 md:border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste focus:outline-none focus:ring-2 focus:ring-custom-red transition-all"
              required
            />
            <textarea
              name="message" 
              placeholder={t("form-message-placeholder")}
              className="w-full p-3 bg-custom-white bg-opacity-10 border-2 md:border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste h-32 focus:outline-none focus:ring-2 focus:ring-custom-red transition-all resize-none"
              required
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="bg-custom-red font-bold rounded-lg px-6 py-3 text-white cursor-pointer hover:bg-opacity-80 transition-colors self-center w-full md:w-auto md:min-w-[200px]"
            >
              {t("form-submit-button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;