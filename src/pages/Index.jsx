import React, { useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Proposal from "../components/Proposal";
import CaseStudies from "../components/CaseStudies";
import Accordion from "../components/Accordion";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/footer/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing"

const Index = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null)
  

 
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="lg:px-16 px-6 max-w-7xl mx-auto">
        <Navbar
          scrollActions={{
            about: () => scrollToSection(aboutRef),
            services: () => scrollToSection(servicesRef),
            contact: () => scrollToSection(contactRef),
            pricing: () => scrollToSection(pricingRef)
          }}
        />
        <Hero />
        <About
          ref={aboutRef}
          scrollActions={{
            contact: () => scrollToSection(contactRef),
          }}
        />
        <Services ref={servicesRef} />
        <Proposal />
        {/* <CaseStudies /> */}
        <Accordion />
        <Team />
        <Projects
          scrollActions={{
            contact: () => scrollToSection(contactRef),
          }}
        />
        <Testimonials />
        <Pricing ref={pricingRef} />
        <ContactUs ref={contactRef} />
      </div>
      <Footer />
    </>
  );
};

export default Index;
