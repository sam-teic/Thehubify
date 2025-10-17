import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import IntroText from "./IntroText";
import img from "../assets/icon.png";

const caseStudies = [
  {
    id: 1,
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    description:
      "For a B2B software company, we developed an SEO strategy that increased organic traffic by 150% and generated 200% more qualified leads within six months.",
  },
  {
    id: 3,
    description:
      "For an e-commerce fashion brand, we created a social media campaign that boosted engagement by 300% and increased online sales by 40% in just three months.",
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && window.innerWidth < 1024) {
        const scrollPos = scrollContainerRef.current.scrollLeft;
        const cardWidth =
          scrollContainerRef.current.children[0].offsetWidth + 24; // includes gap
        const newIndex = Math.round(scrollPos / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const cardWidth = scrollContainer.children[0].offsetWidth + 24;
      scrollContainer.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-32">
      <IntroText
        section="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="bg-black mt-10 rounded-lg py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Desktop View - 3 Columns */}
        <div className="hidden lg:flex gap-8 px-8 lg:px-14">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`text-[#F3F3F3] flex-1 ${
                index !== 0 ? "border-l border-gray-600 pl-8" : ""
              } ${index !== caseStudies.length - 1 ? "pr-8" : ""}`}
            >
              <p className="text-base lg:text-lg leading-relaxed mb-6">
                {study.description}
              </p>
              <button className="flex items-center gap-2 text-[#25f4ee] hover:gap-3 transition-all duration-300 group">
                <span className="text-base">Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 px-4 md:px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="snap-center flex-shrink-0 w-[90%] bg-[#111] text-[#F3F3F3] p-6 rounded-xl flex flex-col justify-between"
              >
                <p className="text-[#F3F3F3] text-base leading-relaxed mb-6 break-words">
                  {study.description}
                </p>
                <button className="flex items-center gap-2 text-[#25f4ee] hover:gap-3 transition-all duration-300 group">
                  <span className="text-base">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-2.5 bg-[#25f4ee] rounded-full"
                    : "w-2.5 h-2.5 bg-gray-600 rounded-full hover:bg-gray-500"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for scrollbar hide */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
