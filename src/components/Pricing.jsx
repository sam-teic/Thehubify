import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import IntroText from "./IntroText";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("value");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  // EmailJS Credentials (replace with yours)
  const SERVICE_ID = "service_ya9wvc7";
  const TEMPLATE_ID = "template_si0bjwo";
  const PUBLIC_KEY = "UoHdr9ipiuFdgF1_Z";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Main email sending function
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Data
  const services = [
    {
      id: "starter",
      name: "Starter",
      best: "New businesses & side projects",
      includes: [
        "Single service focus",
        "Essential features",
        "2-4 week timeline",
        "Email support",
      ],
      output: "Launch-ready solution",
    },
    {
      id: "growth",
      name: "Growth",
      best: "Established businesses scaling up",
      includes: [
        "Multi-service packages",
        "Advanced integrations",
        "4-8 week timeline",
        "Priority support",
        "Quarterly check-ins",
      ],
      output: "Comprehensive system",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      best: "Complex projects & ongoing needs",
      includes: [
        "Full-service partnership",
        "Custom everything",
        "Ongoing collaboration",
        "Dedicated account manager",
        "Monthly strategy sessions",
      ],
      output: "End-to-end solution",
    },
  ];

  const pricingFactors = [
    {
      factor: "Project Complexity",
      impact: "More features, higher investment",
    },
    {
      factor: "Timeline Requirements",
      impact: "Faster delivery requires more resources",
    },
    {
      factor: "Team Size Needed",
      impact: "Specialists and coordination add value",
    },
    {
      factor: "Ongoing Maintenance",
      impact: "Long-term support vs one-time delivery",
    },
    {
      factor: "Custom Integrations",
      impact: "Third-party connections need expertise",
    },
    {
      factor: "Design Sophistication",
      impact: "Bespoke design vs template adaptation",
    },
  ];

  const comparison = [
    {
      question: "What you're actually paying for",
      answer:
        "Strategy, execution, and expertise—not just deliverables. You're investing in outcomes, not hours.",
    },
    {
      question: "Why custom proposals matter",
      answer:
        "Your business model, goals, and constraints are unique. Generic packages rarely fit perfectly or deliver maximum ROI.",
    },
    {
      question: "How we determine investment",
      answer:
        "We calculate based on project scope, required expertise, expected outcomes, and the long-term value we're creating.",
    },
  ];

  return (
    <div className="mt-36">
      <IntroText
        section="How We Price Our Work"
        text="Smart businesses don't shop for the lowest price—they look for the best value. Here's how we think about investment."
      />

      {/* Tabs */}
      <div className="mt-16 mb-12 flex justify-center">
        <div className="inline-flex bg-[#F3F3F3] rounded-2xl p-2 border-2 border-[#191A23]">
          {["value", "tiers", "factors"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-medium transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-[#25f4ee] text-[#191A23]"
                  : "text-[#191A23] hover:text-[#191A23]/70"
              }`}
            >
              {tab === "value"
                ? "Understanding Value"
                : tab === "tiers"
                ? "Service Tiers"
                : "Pricing Factors"}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs content */}
      {activeTab === "value" && (
        <div className="space-y-6 mb-16">
          {comparison.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-[#191A23]"
            >
              <h4 className="text-xl font-bold mb-3 text-[#191A23]">
                {item.question}
              </h4>
              <p className="text-[#191A23] text-lg">{item.answer}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "tiers" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 border-2 border-[#191A23] hover:border-[#25f4ee] transition-colors duration-300"
            >
              <h4 className="text-2xl font-bold mb-2 text-[#191A23]">
                {service.name}
              </h4>
              <p className="mb-6 text-[#191A23]">{service.best}</p>
              <div className="mb-6 pb-6 border-b border-[#191A23]/20">
                <p className="text-sm font-medium mb-3 text-[#191A23]">
                  Includes:
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-[#25f4ee] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F3F3F3] rounded-xl p-4">
                <p className="text-xs font-medium text-[#191A23] mb-1">
                  You Get:
                </p>
                <p className="font-bold text-[#191A23]">{service.output}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "factors" && (
        <div className="mb-16">
          <div className="bg-white rounded-2xl border-2 border-[#191A23] overflow-hidden">
            {pricingFactors.map((item, index) => (
              <div
                key={index}
                className={`p-6 flex justify-between items-center ${
                  index !== pricingFactors.length - 1
                    ? "border-b border-[#191A23]/20"
                    : ""
                }`}
              >
                <span className="font-medium text-[#191A23]">
                  {item.factor}
                </span>
                <span className="text-sm text-[#191A23]">{item.impact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#191A23] rounded-2xl p-10 md:p-12 text-center border-2 border-[#191A23]">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to discuss your project?
        </h3>
        <p className="text-white/80 text-base mb-8 max-w-2xl mx-auto">
          We'll put together a custom proposal that matches your needs and
          budget. First conversation is always free.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#25f4ee] text-[#191A23] px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300"
        >
          Get a Custom Proposal
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#191A23]">
            <div className="sticky top-0 bg-white border-b-2 border-[#191A23] p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-[#191A23]">
                Request a Custom Proposal
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#191A23] hover:text-[#25f4ee] text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              {submitStatus === "success" && (
                <div className="mb-6 bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl">
                  Thank you! We'll be in touch soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl">
                  Something went wrong. Please try again or email us directly at
                  thehubify@gmail.com
                </div>
              )}

              {/* Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email *"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  />
                </div>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                >
                  <option value="">Select Project Type *</option>
                  <option value="Starter">Starter</option>
                  <option value="Growth">Growth</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Not Sure">Not Sure</option>
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  >
                    <option value="">Select Budget</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee]"
                  >
                    <option value="">Select Timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your project *"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#191A23] focus:border-[#25f4ee] resize-none"
                ></textarea>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-3 rounded-xl border-2 border-[#191A23] text-[#191A23] font-bold hover:bg-[#F3F3F3]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-xl bg-[#25f4ee] text-[#191A23] font-bold hover:bg-[#191A23] hover:text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
