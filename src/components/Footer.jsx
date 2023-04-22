import React from "react";
import footerLogo from "../assets/footerLogo.svg";
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center lg:px-0 md:px-0 px-3 py-4 font-nunito bg-footer">
      <div className="lg:w-2/3 md:w-4/5 w-full py-6 flex flex-col items-center gap-10">
        <img src={footerLogo} alt="" className="w-10 lg:w-16 md:w-12" />
        <div>
          <p className="text-center text-white text-base lg:text-lg">OneSignal is the market leading self-serve customer engagement</p>
          <p className="text-center text-white text-base lg:text-lg">solution for Push Notifications, Email, SMS & In-App.</p>
        </div>
        <div className="flex items-center gap-5 mb-6">
          <a href="https://www.linkedin.com/in/mohit-choyal/" target="_blank" className="text-white p-3 rounded-full border border-white hover:border-none hover:bg-blue-500 cursor-pointer"><FaLinkedinIn fontSize={22}/></a>
          <a href="https://www.facebook.com/mohit.choyal.94" target="_blank" className="text-white p-3 rounded-full border border-white hover:border-none hover:bg-blue-500 cursor-pointer"><FaFacebookF fontSize={22}/></a>
          <a href="https://www.instagram.com/mohitchoyal2002/" target="_blank" className="text-white p-3 rounded-full border border-white hover:border-none hover:bg-blue-500 cursor-pointer"><AiFillInstagram fontSize={22}/></a>
          <a href="https://twitter.com/mohitchoyal02" target="_blank" className="text-white p-3 rounded-full border border-white hover:border-none hover:bg-blue-500 cursor-pointer"><AiOutlineTwitter fontSize={22}/></a>
        </div>
        <div className="flex items-center gap-5 lg:flex-row md:flex-row flex-col">
          <span className="text-base lg:text-base text-white font-medium cursor-pointer">Privacy</span>
          <span className="text-base lg:text-base text-white font-medium cursor-pointer">Terms of Use</span>
          <span className="text-base lg:text-base text-white font-medium cursor-pointer">Acceptable Use Policy</span>
          <span className="text-base lg:text-base text-white font-medium cursor-pointer">Software Lifecycle Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
