import React from 'react'
import img from '../assets/hero1.png'
import Button from './Button'

const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row mt-5 md:gap-20">
        <div className=" flex flex-col gap-6 justify-center">
          <h1 className="text-[45px] leading-tight font-normal">
            Everything You Need to Build and Grow Online.
          </h1>
          <p className="text-[17px] text-gray-600">
            We create websites, design identities, run digital campaigns, and
            automate workflows for individuals and brands ready to scale.
          </p>
          <a
            href="https://calendly.com/thehubify/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Book a Consultation" className="w-64" />
          </a>
        </div>
        <div className="">
          <img
            src={img}
            alt="illustration"
            loading="lazy"
            className="bg-center object-contain md:object-cover w-[85rem] h-[24rem]"
          />
        </div>
      </div>
    );
}

export default Hero