import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="w-full px-4 pt-10 pb-8">
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/bim.sanss"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 mr-3 text-xl rounded-full flex justify-center items-center border-2 border-psecond text-psecond hover:border-light hover:bg-psecond hover:text-light xl:h-10 lg:w-10"
            >
              <BsInstagram />
            </a>
            <a
              href="https://facebook.com/bima.c.cetia.1"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 mr-3 text-xl rounded-full flex justify-center items-center border-2 border-psecond text-psecond hover:border-light hover:bg-psecond hover:text-light lg:h-10 lg:w-10"
            >
              <BsFacebook/>
            </a>
            <a
              href="https://www.linkedin.com/in/bimasanjaya/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 mr-3 text-xl rounded-full flex justify-center items-center border-2 border-psecond text-psecond hover:border-light hover:bg-psecond hover:text-light xl:h-10 lg:w-10"
            >
              <BsLinkedin/>
            </a>
            <a
              href="https://github.com/Bimasanjaya0704"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 mr-3 text-2xl rounded-full flex justify-center items-center border-2 border-psecond text-psecond hover:border-light hover:bg-psecond hover:text-light lg:h-10 lg:w-10"
            >
             <AiOutlineGithub/>
            </a>
            
          </div>
          <div className="w-full flex justify-center pt-3 text-center">
            <p className="font-normal text-sm text-light lg:text-base">
              Dibuat dengan <span className="text-red-600">♥</span> oleh Bima
              Sanjaya menggunakan ReactJS dan Tailwind
            </p>
          </div>
          <div className="w-full flex justify-center pt-2 text-center">
            <p className="font-semibold text-sm text-psecond md:text-base xl:text-lg">
              @Copyright2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
