import React, { useState, useEffect, useRef } from "react";
import IntroText from "./IntroText";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "4+", label: "Years Experience" },
    { number: "10+", label: "Team Members" },
  ];

  const features = [
    {
      title: "Creative Design",
      description:
        "Stunning visuals that capture your brand essence and resonate with your audience",
    },
    {
      title: "Fast Delivery",
      description:
        "Quick turnaround times without ever compromising on quality or attention to detail",
    },
    {
      title: "AI-Powered",
      description:
        "Cutting-edge automation and intelligent systems for maximum operational efficiency",
    },
    {
      title: "Growth-Focused",
      description:
        "Data-driven strategies specifically designed to scale your business exponentially",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 3500); // Auto-scroll every 3.5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, features.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      goToPrevious();
    }
  };

  return (
    <div className="">
      <div className="mt-20">
        <IntroText
          section="About TheHubify"
          text="We help brands and creators build, grow, and automate their online presence through design, development, ads, and AI solutions."
        />

        {/* Main Content */}
        <div className="bg-[#F3F3F3] rounded-3xl p-8 md:p-12 lg:p-20 mb-12 mt-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-[#191A23] text-[17px] leading-relaxed">
              At TheHubify, we believe in the power of technology and creativity
              to transform ideas into impactful digital experiences. Our team
              works closely with clients to build tailored solutions that drive
              growth, efficiency, and lasting success.
            </p>
            <p className="text-[#191A23] text-[17px] leading-relaxed">
              From web development and brand identity design to ad campaigns and
              AI automation, we provide everything you need to build, scale, and
              elevate your online presence.
            </p>
          </div>
        </div>

        {/* Feature Carousel */}
        <div
          className="relative mb-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Container */}
          <div className="relative h-[280px] md:h-[320px]">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full px-3 md:px-4">
                  <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-[#191A23] hover:bg-[#25f4ee] transition-colors duration-300 h-full flex flex-col justify-center">
                    <h4 className="text-2xl md:text-3xl font-bold text-[#191A23] mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-[#191A23] text-[17px] md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#191A23] p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#191A23] p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-[#25f4ee]"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#25f4ee] rounded-3xl p-8 text-center border-2 border-[#191A23]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#191A23] mb-3">
                {stat.number}
              </div>
              <p className="text-[#191A23] text-base md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#191A23] rounded-3xl p-10 md:p-16 lg:p-20 text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-white text-[17px] md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's explore how we can help you build, scale, and automate your
            growth through powerful design, technology, and strategy.
          </p>
          <button className="bg-[#25f4ee] text-[#191A23] px-10 py-5 rounded-xl text-lg font-bold hover:bg-white transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
