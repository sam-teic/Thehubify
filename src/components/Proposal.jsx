import React from 'react'


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
            <a
              href="https://calendly.com/thehubify/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white mt-4 px-4 py-3 w-fit rounded-lg">
                Book a consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Proposal