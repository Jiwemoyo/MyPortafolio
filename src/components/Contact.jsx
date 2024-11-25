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
          // Show success alert
          setAlert('success');
          
          // Reset form fields
          form.current.reset();

          // Hide alert after 3 seconds
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        },
        (error) => {
          // Show error alert
          setAlert('error');
          
          // Hide alert after 3 seconds
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        },
      );
  };

  return (
    <div className="bg-custom-blue flex justify-center items-center w-screen sm:align-middle">
      {/* Alert Component */}
      {alert && (
        <div 
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-white ${
            alert === 'success' 
              ? 'bg-green-500' 
              : 'bg-red-500'
          }`}
        >
          {alert === 'success' 
            ? t("email-success-message") 
            : t("email-error-message")
          }
        </div>
      )}

      <div className="flex flex-col items-center justify-center h-screen gap-5 px-8 text-center sm:items-start sm:gap-11 w-full max-w-4xl">
        <h2 className="text-custom-red font-bold text-2xl sm:text-5xl text-center sm:text-left sm:mx-auto">
          {t("contact-title")}
        </h2>

        <p className="font-bold text-custom-white sm:text-2xl">
          {t("contact-subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 w-full">
          {/* Contact Information (unchanged) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-custom-celeste text-2xl text-left">
              {t("contact-info-title")}
            </h3>
            <ul className="text-custom-white font-semibold text-xl space-y-4">
              <li className="flex items-center">
                <AiOutlineMail className="mr-2 text-custom-red" />
                cisnerosandree2@gmail.com
              </li>
              <li className="flex items-center">
                <AiOutlinePhone className="mr-2 text-custom-red" />
                (+593) 995297859
              </li>
              <li className="flex items-center">
                <ImLocation2 className="mr-2 text-custom-red" />
                Quito-Ecuador
              </li>
            </ul>

            {/* Social Media Links (unchanged) */}
            <ul className="flex text-custom-red mt-4 gap-8 text-3xl justify-start">
              <li className="hover:text-custom-celeste transition-colors">
                <a
                  href={"https://www.instagram.com/jiwemoyot/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:text-custom-celeste transition-colors">
                <a
                  href={"https://github.com/Jiwemoyo"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="hover:text-custom-celeste transition-colors">
                <a
                  href={"https://www.linkedin.com/in/jiwemoyo/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-4 w-full" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name" 
              placeholder={t("form-name-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("form-email-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
              required
            />
            <textarea
              name="message" 
              placeholder={t("form-message-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste h-32"
              required
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="bg-custom-red font-bold rounded-lg px-8 py-4 text-white cursor-pointer w-1/2 mx-auto hover:bg-opacity-80 transition-colors"
            >
              {t("form-submit-button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};