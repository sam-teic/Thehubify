import React, { useState } from "react";
import IntroText from "./IntroText";

const steps = [
  {
    title: "Consultation",
    body: "During the initial consultation we discuss your goals, audience, timeline and budget so we align on scope and success metrics.",
  },
  {
    title: "Research and Strategy",
    body: "We build a clear strategy with prioritized actions including SEO, content, paid ads and automation to reach your objectives.",
  },
  {
    title: "Design",
    body: "We create visual identities, wireframes and high-fidelity UI that communicate your brand and convert visitors into customers.",
  },
  {
    title: "Development",
    body: "We implement fast, accessible, and SEO-friendly websites using modern stacks and best practices for performance and reliability.",
  },
  {
    title: "Marketing",
    body: "We run data-driven campaigns across search and social to drive qualified traffic, leads and measurable ROI.",
  },
  {
    title: "Launch",
    body: "We deploy, monitor analytics, and optimize post-launch so your product scales smoothly and delivers continual improvements.",
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
        text="Step-by-Step Guide to Achieving Your Business Goals"
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
