import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagramSquare />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTwitter />
            </div>
          </div>

          <div className="text-gray-500 text-[13px]">
            <b>FREE STANDARD SHIPPING</b> ON PURCHASES OVER <b>29€</b>
          </div>

          <div className="flex gap-4">
            <label htmlFor="currency" className="sr-only">
              Select Currency
            </label>
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
              aria-label="Select Currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INT">INT</option>
            </select>

            <label htmlFor="language" className="sr-only">
              Select Language
            </label>
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="language"
              id="language"
              aria-label="Select Language"
            >
              <option value="English">English</option>
              <option value="Finnish">Finnish</option>
              <option value="Swedish">Swedish</option>
              <option value="Vietnamese">Vietnamese</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
