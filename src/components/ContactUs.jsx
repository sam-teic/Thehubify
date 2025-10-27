import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/contact.png"

const IntroText = ({ section, text }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-[#191A23] mb-4">{section}</h2>
    <p className="text-gray-600">{text}</p>
  </div>
);

const ContactUs = () => {
  const [formType, setFormType] = useState("getQuote");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    budget: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError(
        "Please enter a valid email address (e.g., example@domain.com)"
      );
      return;
    }

    if (formType === "getQuote" && !formData.projectType) {
      alert("Please select a project type.");
      return;
    }

    setIsSubmitting(true);

    // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
    const SERVICE_ID = "service_ya9wvc7"; // Replace with your EmailJS service ID
    const TEMPLATE_ID = "template_i5rvfjq"; // Replace with your EmailJS template ID
    const PUBLIC_KEY = "UoHdr9ipiuFdgF1_Z"; // Replace with your EmailJS public key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || "N/A",
      project_type: formData.projectType || "N/A",
      budget: formData.budget || "N/A",
      message: formData.message,
      form_type: formType === "getQuote" ? "Quote Request" : "General Inquiry",
      time: new Date().toLocaleString(),
    };

    console.log("Sending email with params:", templateParams);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);

      alert("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
        budget: "",
        projectType: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Failed to send message. Please try again or email us directly at thehubify@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear email error when user types
    if (name === "email") {
      setEmailError("");
    }
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormData({
      name: "",
      email: "",
      message: "",
      company: "",
      budget: "",
      projectType: "",
    });
  };

  return (
    <div className="mt-36 max-w-7xl mx-auto px-4">
      <IntroText
        section="Contact Us"
        text="We'd love to hear from you. Whether you have a question, need assistance, or want a custom quote — fill out the form and our team will get back to you shortly."
      />

      <div className="w-full bg-[#F3F3F3] mt-10 rounded-3xl relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            {/* Radio Buttons */}
            <div className="flex items-center gap-8 mb-10">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="formType"
                    value="sayHi"
                    checked={formType === "sayHi"}
                    onChange={(e) => handleFormTypeChange(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`
                    w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${
                      formType === "sayHi"
                        ? "border-[#25f4ee] bg-[#25f4ee]"
                        : "border-gray-400 bg-white"
                    }
                  `}
                  >
                    {formType === "sayHi" && (
                      <div className="w-3 h-3 bg-[#191A23] rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="text-[#191A23] text-base font-normal">
                  Say Hi
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="formType"
                    value="getQuote"
                    checked={formType === "getQuote"}
                    onChange={(e) => handleFormTypeChange(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`
                    w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${
                      formType === "getQuote"
                        ? "border-[#191A23] bg-white"
                        : "border-gray-400 bg-white"
                    }
                  `}
                  >
                    {formType === "getQuote" && (
                      <div className="w-3 h-3 bg-[#191A23] rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="text-[#191A23] text-base font-normal">
                  Get a Quote
                </span>
              </label>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#191A23] text-sm font-normal mb-2"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-6 py-3.5 bg-white border border-[#191A23] rounded-xl text-[#191A23] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25f4ee] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#191A23] text-sm font-normal mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-6 py-3.5 bg-white border rounded-xl text-[#191A23] placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    emailError
                      ? "border-red-500 focus:ring-red-300"
                      : "border-[#191A23] focus:ring-[#B9FF66] focus:border-transparent"
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>

              {/* Conditional Fields for "Get a Quote" */}
              {formType === "getQuote" && (
                <>
                  {/* Company Input */}
                  <div className="animate-fadeIn">
                    <label
                      htmlFor="company"
                      className="block text-[#191A23] text-sm font-normal mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-6 py-3.5 bg-white border border-[#191A23] rounded-xl text-[#191A23] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25f4ee] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="animate-fadeIn">
                    <label
                      htmlFor="projectType"
                      className="block text-[#191A23] text-sm font-normal mb-2"
                    >
                      Project Type*
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-6 py-3.5 bg-white border border-[#191A23] rounded-xl text-[#191A23] focus:outline-none focus:ring-2 focus:ring-[#25f4ee] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Project Type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="branding">Branding</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="animate-fadeIn">
                    <label
                      htmlFor="budget"
                      className="block text-[#191A23] text-sm font-normal mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-3.5 bg-white border border-[#191A23] rounded-xl text-[#191A23] focus:outline-none focus:ring-2 focus:ring-[#25f4ee] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                </>
              )}

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#191A23] text-sm font-normal mb-2"
                >
                  {formType === "getQuote" ? "Project Details*" : "Message*"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    formType === "getQuote"
                      ? "Tell us about your project..."
                      : "Your message..."
                  }
                  rows="6"
                  className="w-full px-6 py-3.5 bg-white border border-[#191A23] rounded-xl text-[#191A23] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#25f4ee] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#191A23] text-white py-4 rounded-xl font-normal text-base hover:bg-[#2a2b35] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Sending..."
                  : formType === "getQuote"
                  ? "Request Quote"
                  : "Send Message"}
              </button>
            </div>
          </div>

          {/* Decorative Image Section */}
          <div className="hidden lg:flex items-center justify-center relative p-8 lg:p-12">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={img}
                alt="Contact Us"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
