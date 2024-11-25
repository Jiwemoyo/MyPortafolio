import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-custom-blue flex justify-center items-center w-screen">
      <div className="flex flex-col items-center justify-center h-screen gap-5 px-8 text-center sm:items-start sm:gap-11 w-full max-w-4xl">
        <h2 className="text-custom-red font-bold text-2xl sm:text-5xl">
          {t("contact-title")}
        </h2>
        
        <p className="font-bold text-custom-white sm:text-2xl">
          {t("contact-subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 gap-8 w-full">
          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-custom-celeste text-2xl">
              {t("contact-info-title")}
            </h3>
            <ul className="text-custom-white font-semibold text-xl space-y-4">
              <li className="flex items-center">
                <AiOutlineMail className="mr-2 text-custom-red" /> 
                {t("contact-email")}
              </li>
              <li className="flex items-center">
                <AiOutlinePhone className="mr-2 text-custom-red" /> 
                {t("contact-phone")}
              </li>
              <li className="flex items-center">
                <ImLocation2 className="mr-2 text-custom-red" /> 
                {t("contact-location")}
              </li>
            </ul>

            {/* Social Media Links */}
            <ul className="flex text-custom-red mt-4 gap-8 text-3xl justify-start">
              <li className="hover:text-custom-celeste transition-colors">
                <a href={t("social-instagram")} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:text-custom-celeste transition-colors">
                <a href={t("social-github")} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="hover:text-custom-celeste transition-colors">
                <a href={t("social-linkedin")} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 w-full"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("form-name-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("form-email-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("form-message-placeholder")}
              className="p-2 bg-custom-white bg-opacity-10 border-4 rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="animate-bg-fade bg-custom-red font-bold rounded-lg px-8 py-4 text-white cursor-pointer w-1/2 mx-auto hover:bg-opacity-80 transition-colors"
            >
              {t("form-submit-button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};