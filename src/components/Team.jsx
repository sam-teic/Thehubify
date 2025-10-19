import React from "react";
import IntroText from "./IntroText";
import img from "../assets/picture3.png";
import img1 from "../assets/picture1.png";
import img2 from "../assets/picture2.png";
import { FaLinkedinIn } from "react-icons/fa";

const crew = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for innovation and digital transformation. Oversees strategy, growth, and client success at TheHubify.",
    img: img,
    linkedin: "#",
  },
  {
    name: "Ezike Anthony",
    role: "Creative Director",
    bio: "Expert in visual identity, branding, and user experience design. Crafts compelling visuals that bring brands to life online.",
    img: img2,
    linkedin: "#",
  },
  {
    name: "Ofordile Samuel",
    role: "Head of Development",
    bio: "Full-stack developer specializing in modern web technologies and automation systems that power scalable digital solutions.",
    img: img1,
    linkedin: "#",
  },
  {
    name: "Amara Johnson",
    role: "Marketing & Ads Lead",
    bio: "Strategist focused on data-driven advertising, campaign optimization, and digital storytelling that drives measurable growth.",
    img: "",
    linkedin: "#",
  },
  {
    name: "David Idakwo",
    role: "AI Automation Specialist",
    bio: "Automation expert dedicated to building intelligent workflows and AI-powered systems that save time and maximize efficiency.",
    img: "",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <div className="mt-32">
      <IntroText
        section="Team"
        text="Meet the creative minds and tech experts driving innovation in web development, branding, advertising, and AI automation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {crew.map((member, index) => (
          <div
            key={index}
            className="w-full border bg-[#F3F3F3] rounded-xl px-6 pt-6 pb-10 shadow-xl border-b-[3px] border-black hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-end">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 object-cover rounded-t-xl"
                />
                <div className="text-sm">
                  <p className="font-medium">{member.name}</p>
                  <p>{member.role}</p>
                </div>
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <FaLinkedinIn className="text-[#25f4ee]" />
              </a>
            </div>

            <div className="border-b border-black w-full pt-6"></div>

            <p className="text-sm pt-6 text-gray-700 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        {/* <button className="px-8 py-4 inline-block bg-black rounded-lg text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400">
          See all team
        </button> */}
      </div>
    </div>
  );
};

export default Team;
