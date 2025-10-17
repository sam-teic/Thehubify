import React from "react";
import img from "../assets/service1.png";
import img2 from "../assets/service2.png";
import img3 from "../assets/service3.png";
import img4 from "../assets/service4.png";
import img5 from "../assets/service5.png";
import img6 from "../assets/service6.png";
import icon from "../assets/Icon.png";
import IntroText from "./IntroText";


const Services = () => {
  const services = [
    {
      titleLine1: "Search engine",
      titleLine2: "optimization",
      img: img,
      bgColor: "#F3F3F3",
      highlightColor: "#25f4ee",
      iconBg: "#000",
    },
    {
      titleLine1: "Pay-per-click",
      titleLine2: "advertising",
      img: img2,
      bgColor: "#25f4ee",
      highlightColor: "#F3F3F3",
      iconBg: "#000",
    },
    {
      titleLine1: "Social Media",
      titleLine2: "Marketing",
      img: img3,
      bgColor: "#000",
      highlightColor: "#F3F3F3",
      iconBg: "#F3F3F3",
      textColor: "#fff",
    },
    {
      titleLine1: "Email",
      titleLine2: "Marketing",
      img: img4,
      bgColor: "#F3F3F3",
      highlightColor: "#25f4ee",
      iconBg: "#000",
      textColor: "#000",
    },
    {
      titleLine1: "Content",
      titleLine2: "Creation",
      img: img5,
      bgColor: "#25f4ee",
      highlightColor: "#F3F3F3",
      iconBg: "#000",
      textColor: "#000",
    },
    {
      titleLine1: "Analytics and",
      titleLine2: "Tracking",
      img: img6,
      bgColor: "#000",
      highlightColor: "#F3F3F3",
      iconBg: "#F3F3F3",
      textColor: "#fff",
    },
  ];

  return (
    <div className="mt-14">
      <IntroText
        section="Service"
        text="  At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-[50rem] h-64 border pl-4 md:pl-8 pt-10 shadow-xl border-b-[3px] border-black rounded-lg p-4 flex flex-col gap-3"
            style={{ backgroundColor: service.bgColor }}
          >
            <div className="flex justify-between">
              <div>
                <p
                  className="text-xl font-medium px-1 w-fit rounded-lg"
                  style={{
                    backgroundColor: service.highlightColor,
                    color: service.color,
                  }}
                >
                  {service.titleLine1}
                </p>
                <p
                  className="text-xl relative bottom-1 font-medium px-1 w-fit rounded-lg"
                  style={{
                    backgroundColor: service.highlightColor,
                    color: service.color,
                  }}
                >
                  {service.titleLine2}
                </p>
              </div>

              <div className="mr-4 md:mr-16 mt-5">
                <img
                  src={service.img}
                  alt={service.titleLine1}
                  className="w-36 h-32"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div
                className="w-fit rounded-full"
                style={{ backgroundColor: service.iconBg }}
              >
                <img src={icon} alt="icon" className="w-6 h-6 p-1" />
              </div>
              <p
                className="text-sm cursor-pointer hover:underline"
                style={{ color: service.textColor }}
              >
                Learn more
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
