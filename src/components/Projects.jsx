import React, { useState } from "react";
import IntroText from "./IntroText";

const Projects = ({ scrollActions = {} }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web-development",
      client: "Retail Brand",
      description:
        "A fully responsive e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
      tags: ["React", "Node.js", "Stripe"],
      image: "/api/placeholder/800/600",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "branding",
      client: "Tech Startup",
      description:
        "Complete brand identity system including logo design, color palette, typography, and brand guidelines.",
      tags: ["Logo Design", "Brand Strategy", "Visual Identity"],
      image: "/api/placeholder/800/600",
      status: "Coming Soon",
      progress: 30,
    },
    {
      id: 3,
      title: "Marketing Automation",
      category: "automation",
      client: "SaaS Company",
      description:
        "AI-powered marketing automation system that will increase lead conversion through intelligent email sequencing.",
      tags: ["AI", "Email Marketing", "Analytics"],
      image: "/api/placeholder/800/600",
      status: "In Development",
      progress: 45,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile-app",
      client: "Financial Services",
      description:
        "Secure mobile banking application with biometric authentication, instant transfers, and financial insights.",
      tags: ["React Native", "Security", "UX Design"],
      image: "/api/placeholder/800/600",
      status: "Upcoming",
      progress: 20,
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "marketing",
      client: "Fashion Brand",
      description:
        "Multi-platform social media campaign designed to generate maximum impressions and engagement.",
      tags: ["Social Media", "Content Creation", "Analytics"],
      image: "/api/placeholder/800/600",
      status: "In Planning",
      progress: 15,
    },
    {
      id: 6,
      title: "Dashboard Analytics Tool",
      category: "web-development",
      client: "Enterprise Client",
      description:
        "Real-time analytics dashboard with data visualization, custom reporting, and API integrations.",
      tags: ["Vue.js", "D3.js", "API Integration"],
      image: "/api/placeholder/800/600",
      status: "In Progress",
      progress: 55,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "branding", label: "Branding" },
    { id: "automation", label: "Automation" },
    { id: "mobile-app", label: "Mobile Apps" },
    { id: "marketing", label: "Marketing" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);



  return (
    <div className="mt-36">
      <IntroText
        section="Our Work"
        text="Explore our upcoming projects and work in progress. We're actively building exceptional digital solutions."
      />

      {/* Filters */}
      <div className="mt-16 mb-12 w-full mx-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl text-base font-medium border-2 transition-colors duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#25f4ee] text-[#191A23] border-[#191A23]"
                  : "bg-white text-[#191A23] border-[#191A23] hover:bg-[#F3F3F3]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl border-2 border-[#191A23] overflow-hidden hover:bg-[#F3F3F3] transition-colors duration-300 relative"
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border-2 border-[#191A23] shadow-lg">
                <span className="text-sm font-bold text-[#191A23]">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-64 bg-[#F3F3F3] border-b-2 border-[#191A23]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#191A23] text-6xl font-bold opacity-10">
                  {project.id}
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#191A23] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#191A23] text-sm font-medium">
                    Client: {project.client}
                  </p>
                </div>
              </div>

              <p className="text-[#191A23] text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Progress Bar
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#191A23]">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-[#191A23]">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 border border-[#191A23]">
                  <div
                    className="bg-[#25f4ee] h-full rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div> */}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#25f4ee] text-[#191A23] text-sm font-medium rounded-lg border border-[#191A23]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-medium border-2 border-gray-400 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#25f4ee] rounded-3xl p-10 md:p-16 text-center border-2 border-[#191A23]">
        <h3 className="text-3xl md:text-4xl font-bold text-[#191A23] mb-4">
          Have a Project in Mind?
        </h3>
        <p className="text-[#191A23] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life with our proven
          expertise and innovative approach.
        </p>
        <button
          onClick={() => {
            scrollActions.contact?.();
          }}
          className="bg-[#191A23] text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-[#191A23] border-2 border-[#191A23] transition-colors duration-300"
        >
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Projects;
