import React from "react";
import IntroText from "./IntroText";

const About = () => {
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 border-2 border-[#191A23] hover:bg-[#25f4ee] transition-colors duration-300"
            >
              <h4 className="text-xl font-bold text-[#191A23] mb-4">
                {feature.title}
              </h4>
              <p className="text-[#191A23] text-[17px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
