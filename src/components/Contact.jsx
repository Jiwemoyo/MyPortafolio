import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className=" bg-custom-blue flex flex-col justify-center items-center h-screen px-8 gap-7 text-center">
      <h2 className="text-custom-red font-bold text-2xl">Contact Me </h2>
      <p className=" text-custom-white text-xl ">
        Do you have any questions or proposals? Don't hesitate to contact me.
        I'll be happy to hear from you.
      </p>
      <div className=" flex flex-col gap-4">
        <h3 className=" font-bold text-custom-celeste text-2xl">
          Contact Information
        </h3>
        <ul className=" text-custom-white font-semibold text-xl">
          <li className="flex items-center mt-5">
            <AiOutlineMail className="mr-2" /> email@example.com
          </li>
          <li className="flex items-center mt-5">
            <AiOutlinePhone className="mr-2" /> +123 456 7890
          </li>
          <li className="flex items-center mt-5">
            <ImLocation2 className="mr-2" /> City, Country
          </li>
          <ul className=" flex text-custom-red mt-12 gap-10 text-3xl justify-between">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </ul>
      </div>
      <form action="" className="flex flex-col space-y-4 mt-6 w-full justify-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Name"
          className="p-2 bg-custom-white bg-opacity-10 border-4  rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
        />
        <input type="email" placeholder="Your Email" className="p-2 bg-custom-white bg-opacity-10 border-4  rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste" />
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className="p-2 bg-custom-white bg-opacity-10 border-4  rounded-md border-custom-celeste text-custom-celeste font-bold placeholder:text-custom-celeste"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className=" bg-custom-red font-bold rounded-lg px-8 py-4 text-white cursor-pointer w-1/2 mx-auto"
        />
      </form>
    </div>
  );
};
