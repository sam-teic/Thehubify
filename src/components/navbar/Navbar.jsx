import React, { useState, useEffect } from "react";
import logo from "../../assets/hubifylogo.png";

const defaultLinks = [
  { name: "About us", key: "about" },
  { name: "Services", key: "services" },
  { name: "Pricing", key: "pricing" },
];


const NavItem = ({ name, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className="block px-4 py-2 text-[17px] md:text-base hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 rounded"
    >
      {name}
    </button>
  </li>
);

const Navbar = ({
  brand = "TheHubify",
  links = defaultLinks,
  scrollActions = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // close mobile menu when switching to desktop to avoid stale state
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Add scroll listener for shadow effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Spacer to prevent content jump */}
      <div className="h-[72px]" aria-hidden="true"></div>

      <header
        className={`fixed top-0 left-0 right-0 w-full bg-white z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between py-4"
            aria-label="Primary"
          >
            {/* Brand */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="TheHubify Logo"
                className="h-8 w-8 object-contain"
              />
              <a
                href="/"
                className="text-lg font-extrabold tracking-tight focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                aria-label={`${brand} home`}
                onClick={closeMenu}
              >
                {brand}
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <ul className="flex items-center gap-6">
                {links.map((item) => (
                  <NavItem
                    key={item.name}
                    name={item.name}
                    onClick={() => {
                      scrollActions[item.key]?.();
                      closeMenu();
                    }}
                  />
                ))}
              </ul>

              <div
                onClick={() => {
                  scrollActions.contact?.();
                }}
                className="ml-4 cursor-pointer inline-block px-4 py-2 border border-black rounded-lg text-sm font-medium hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Request a quote
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile panel */}
          {isOpen && (
            <div
              id="mobile-menu"
              className="md:hidden bg-white border-t border-gray-200 shadow-sm rounded-b-lg"
            >
              <div className="px-4 pt-4 pb-6">
                <ul className="flex flex-col gap-2">
                  {links.map((item) => (
                    <NavItem
                      key={item.name}
                      name={item.name}
                      onClick={() => {
                        scrollActions[item.key]?.();
                        closeMenu();
                      }}
                    />
                  ))}
                </ul>

                <div
                  onClick={() => {
                    scrollActions.contact?.();
                    closeMenu();
                  }}
                  className="block mt-4 cursor-pointer text-center px-4 py-2 border border-black rounded-lg text-[17px] font-medium hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  Request a quote
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
