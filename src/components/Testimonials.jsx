import React, { useState } from "react";
import IntroText from "./IntroText";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const testimonials = [
  
  {
    id: 2,
    text: "Positivus transformed our digital marketing strategy completely. Their innovative approach and dedication to results have exceeded our expectations. The ROI we've seen has been remarkable, and their team feels like an extension of our own.",
    name: "Sarah Johnson",
    position: "CEO at TechStart Inc",
  },
  {
    id: 3,
    text: "Working with Positivus has been a game-changer for our business. Their expertise in SEO and content marketing has helped us reach audiences we never thought possible. The results speak for themselves with a 300% increase in organic traffic.",
    name: "Michael Chen",
    position: "Founder at GrowthLabs",
  },
  {
    id: 4,
    text: "The level of professionalism and attention to detail from the Positivus team is outstanding. They took the time to understand our brand and delivered campaigns that truly resonated with our target audience. Highly recommended!",
    name: "Emily Rodriguez",
    position: "VP of Marketing at BrandCo",
  },
  {
    id: 5,
    text: "Positivus didn't just meet our expectations - they surpassed them. Their data-driven approach and creative solutions have helped us achieve unprecedented growth. We couldn't be happier with the partnership.",
    name: "David Thompson",
    position: "Managing Director at Digital Ventures",
  },
];


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }; 

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };
    
  return (
    <div className="mt-32">
      <IntroText
        section="Testimonials"
        text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />

      <div className="mt-10">
        <div className="relative bg-black rounded-xl lg:rounded-[2.5rem] py-4 sm:py-8 md:p-12 lg:p-16 xl:p-20 shadow-2xl overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25f4ee] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25f4ee] opacity-5 rounded-full blur-3xl"></div>

          {/* Testimonials Container */}
          <div className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[400px]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4 md:px-6"
                >
                  <div className="max-w-5xl mx-auto">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6 md:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25f4ee]/20 to-[#25f4ee]/5 flex items-center justify-center border border-[#25f4ee]/30">
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#25f4ee]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative mb-8 md:mb-12">
                      <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-center font-light px-2 sm:px-4">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="text-center">
                      <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#25f4ee]/10 to-transparent border border-[#25f4ee]/20">
                        <h3 className="text-[#25f4ee] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 md:mt-12 relative z-10">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="order-2 sm:order-1 p-3 sm:p-3.5 md:p-4 rounded-full bg-black hover:bg-[#25f4ee]/10 border border-gray-700 hover:border-[#25f4ee] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-[#25f4ee] transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="order-1 sm:order-2 flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`transition-all duration-300 disabled:cursor-not-allowed rounded-full ${
                    index === currentIndex
                      ? "w-10 sm:w-12 h-3 bg-gradient-to-r from-[#25f4ee] to-[#1ad4ce] shadow-lg shadow-[#25f4ee]/50"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="order-3 p-3 sm:p-3.5 md:p-4 rounded-full bg-black hover:bg-[#25f4ee]/10 border border-gray-700 hover:border-[#25f4ee] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-[#25f4ee] transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
