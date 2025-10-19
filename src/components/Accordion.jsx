import React, { useState } from "react";
import IntroText from "./IntroText";

const steps = [
  {
    title: "Discovery",
    body: "We start by understanding your goals, audience, and vision to define clear objectives and success metrics for your project.",
  },
  {
    title: "Strategy",
    body: "We craft a tailored plan that aligns creativity with data — covering design, development, advertising, and automation.",
  },
  {
    title: "Design",
    body: "We create a strong visual identity and user experience that reflect your brand, engage users, and build trust.",
  },
  {
    title: "Development",
    body: "We turn designs into fast, secure, and scalable websites or applications using modern technologies and best practices.",
  },
  {
    title: "Promotion",
    body: "We launch high-impact ad campaigns and optimize content to attract the right audience and drive measurable results.",
  },
  {
    title: "Automation",
    body: "We integrate AI and workflow automations that save time, streamline processes, and help you scale effortlessly.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mt-32">
      <IntroText
        section="Our Working Process"
        text="A Clear Path to Building, Growing, and Automating Your Digital Success"
      />

      <div className="space-y-6 mt-10">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          const stepNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className={`rounded-3xl md:rounded-lg border shadow-xl border-b-[3px] border-black transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "md:py-14 py-7 px-4 md:px-10" : "py-10 px-4 md:px-10"
              }`}
              style={{
                backgroundColor: isOpen ? "#25f4ee" : "#F3F3F3",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-6 w-fit">
                  <h1 className="font-mono text-4xl md:text-5xl">
                    {stepNumber}
                  </h1>
                  <p className="text-xl font-medium">{step.title}</p>
                </div>

                {/* Toggle Button */}
                <button
                  id={`accordion-button-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${index}`}
                  onClick={() => handleToggle(index)}
                  className="relative w-10 h-10 flex items-center justify-center bg-[#F3F3F3] text-black border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {/* Plus / Minus Icon (pure CSS) */}
                  <span
                    className={`absolute w-4 h-[2px] bg-black transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute w-4 h-[2px] bg-black transform transition-transform duration-300 ${
                      isOpen ? "-rotate-45" : "rotate-90"
                    }`}
                  />
                </button>
              </div>

              {/* Divider */}
              {isOpen && (
                <div className="border-b border-black w-full pt-2"></div>
              )}

              {/* Content */}
              <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-button-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "max-h-[400px] opacity-100 pt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm">{step.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
