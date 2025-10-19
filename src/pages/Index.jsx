import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Proposal from '../components/Proposal'
import CaseStudies from '../components/CaseStudies'
import Accordion from '../components/Accordion'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/footer/Footer'
import About from '../components/About'
import Projects from '../components/Projects'

const Index = () => {
    return (
      <>
        <div className="lg:px-16 px-6 max-w-7xl mx-auto">
          <Navbar />
                <Hero />
                <About/>
          <Services />
          <Proposal />
          {/* <CaseStudies /> */}
          <Accordion />
          <Team />
          <Projects />
          <Testimonials />
          <ContactUs />
        </div>
        <Footer />
      </>
    );
}

export default Index