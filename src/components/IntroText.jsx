import React from 'react'

const IntroText = ({section, text}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <h1 className=" text-3xl font-medium px-1 w-fit rounded-sm">
        {section}
      </h1>
      <p className="max-w-[20rem] md:max-w-xl text-[14px] text-gray-600 text-center md:text-left">
      {text}
      </p>
    </div>
  );
}

export default IntroText