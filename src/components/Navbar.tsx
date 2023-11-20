"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flexBetween max-container padding-container relative z-30 py-5">
        <div className="container hidden lg:block">
          <div
            className={`flex w-fit gap-10 mx-auto font-medium py-4 ${
              isMenuOpen ? "hidden" : ""
            }`}
          >
            {NAV_LINKS.map((navLink) => (
              <Link
                className="navbar_link relative"
                key={navLink.key}
                href={navLink.href}
              >
                {navLink.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:hidden absolute top-2 right-0">
          <TiThMenu
            size={32}
            className="inline-blockcursor-pointer"
            onClick={toggleMenu}
          />

          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-white shadow-md">
              {/* Close icon */}
              <div className="flex justify-end px-4 py-2">
                <IoClose
                  size={32}
                  className="cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              {/* Dropdown content */}
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="navbar_link dropdown_menu"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
