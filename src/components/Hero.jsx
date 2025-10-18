import React from 'react'
import img from '../assets/hero1.png'
import Button from './Button'

const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row mt-5 md:gap-24">
        <div className=" flex flex-col gap-6 justify-center">
          <h1 className="text-[45px] leading-tight font-normal">
            Everything You Need to Build and Grow Your Brand.
          </h1>
          <p className="text-[17px] text-gray-600">
            We help brands grow in the digital world through web development,
            visual identity design, digital marketing, and AI automation
            solutions that drive results and lasting impact.
          </p>
          <Button text="Book a Consultation" className='w-64'/>
        </div>
        <div className="">
          <img
            src={img}
            alt="illustration"
            className="bg-center object-cover w-[85rem] h-[24rem]"
          />
        </div>
      </div>
    );
}

export default Hero