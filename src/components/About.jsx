import React from "react";
import IntroText from "./IntroText";


const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
  ];

  return (
    <div className="">
      <div className="mt-20">
        <IntroText
          section="About Thehubify"
          text="We're a digital marketing agency dedicated to helping businesses grow their online presence through innovative strategies and proven results."
        />

        {/* Main Content */}
        <div className="bg-[#F3F3F3] rounded-3xl p-6 md:p-12 lg:p-16 mb-12 mt-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg text-center md:text-xl leading-relaxed mb-8">
              At Thehubify, we believe in the power of digital marketing to
              transform businesses. Our team of experienced professionals works
              closely with clients to develop customized strategies that drive
              real, measurable results.
            </p>
            <p className="text-gray-700 text-lg text-center md:text-xl leading-relaxed">
              From SEO and content marketing to social media management and PPC
              campaigns, we offer comprehensive solutions tailored to your
              unique business needs.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#25f4ee] rounded-2xl p-6 text-center border-2 border-transparent hover:border-[#f3f3f3] transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#F3F3F3] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#191A23] mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing
            goals
          </p>
          <button className="bg-[#191A23] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#25f4ee] hover:text-[#191A23] transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;