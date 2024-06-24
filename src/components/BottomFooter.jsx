import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import Logo from "../assets/logo.svg";

function BottomFooter() {
  return (
    <div className="bg-white py-2 md:py-6 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <FaFacebook className="h-6 w-6" />
          <FaInstagram className="h-6 w-6" />
          <FaLinkedin className="h-6 w-6" />
          <FaYoutube className="h-6 w-6" />
          <FaTwitter className="h-6 w-6" />
        </div>

        <p className="text-gray-600 text-xs">
          © CODINGAL 2024 - TERMS OF SERVICEPRIVACY POLICYREFUND POLICY
        </p>

        <img src={Logo} className="h-6 w-32" alt="" />
      </div>
    </div>
  );
}

export default BottomFooter;
