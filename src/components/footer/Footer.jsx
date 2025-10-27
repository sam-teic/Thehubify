import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import IntroText from "../IntroText";

const defaultLinks = [
  { name: "About us", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Pricing", link: "/pricing" },
];

const NavItem = ({ name, link, onClick }) => (
  <li>
    <a
      href={link}
      onClick={onClick}
      className="block px-2 md:px-4 py-2 text-sm md:text-base underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 rounded"
    >
      {name}
    </a>
  </li>
);

const Footer = ({ links = defaultLinks }) => {
    return (
      <div className="lg:px-16 max-w-7xl mx-auto">
        <footer className="bg-black lg:rounded-tl-[3rem]  lg:rounded-tr-[3rem] mt-32 w-full px-6 sm:px-10 py-10 text-white">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            {/* Brand */}
            <p className="text-lg font-semibold">Thehubify</p>

            {/* Navigation */}
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
              {links.map((item) => (
                <NavItem key={item.name} name={item.name} link={item.link} />
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              {[FaFacebookF, FaInstagram, FaTiktok].map((Icon, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-[#25f4ee] transition-colors duration-300"
                >
                  <Icon className="text-base" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            {/* Contact Info */}
            <div className="space-y-4 text-sm ">
              <IntroText section="Contact us:" />
              <p className="text-[#f3f3f3]">Email: thehubify.com</p>
              <p className="text-[#f3f3f3]">Phone: +1 234 567 890</p>
              <p className="text-[#f3f3f3]">
                Address: 123 Main St, City, Country
              </p>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-xl py-8 px-6 flex flex-col lg:flex-row justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="pl-3 h-14 border bg-black border-[#f3f3f3] rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-[#25f4ee] w-full sm:w-64 text-black font-medium px-4 py-3 rounded-lg hover:bg-[#1ee2da] transition-colors duration-300">
                Subscribe for Updates
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-600 my-10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#f3f3f3]">
            <p>© 2025 Thehubify. All Rights Reserved.</p>
            <p className="underline cursor-pointer hover:text-[#25f4ee] transition-colors">
              Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;
