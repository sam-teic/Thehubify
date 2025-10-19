import React from 'react'
import img from '../assets/Frame_19.png'

const Proposal = () => {
    return (
      <div className="bg-[#F3F3F3] mt-32 lg:px-14 px-4 min-h-[10rem] rounded-xl">
        <div className="flex justify-between">
          <div className="py-10">
            <h1 className="font-medium text-xl">Let's make things happen</h1>
            <p className="pt-4 text-[15px] text-gray-600 max-w-[40rem]">
              Contact us today to discover how we can help you build a powerful
              online presence, elevate your brand, and automate your growth with
              smart digital solutions.
            </p>
            <button className="bg-black text-white mt-4 px-4 py-3 w-fit rounded-lg">
              Get your free proposal
            </button>
          </div>

          <div className="hidden lg:relative">
            <img
              src={img}
              alt="illustration"
              className="w-[25rem] h-[20rem] object-contain"
            />
          </div>
        </div>
      </div>
    );
}

export default Proposal