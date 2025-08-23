import React from "react";
import Timeline from "../components/common/Timeline";

const Experience = () => {
  const experiences = [
    {
      date: "August 2025 - Present",
      title: "Web Technician",
      company: "Zanziholics",
      description:
        "Managing cPanel and VPS hosting environments, Configuring and troubleshooting email services ,Installing and maintaining WordPress websites, Providing first-level client support for hosting-related issues.",
      type: "work",
    },
    {
      date: "May 2025 - July 2025",
      title: "Web Developer",
      company: "Porto Africa",
      description:
        "Develop and maintain web applications for a leading provider of custom electronic solutions. Build scalable systems to support innovative products including AI-driven EduTech devices (IREN), security solutions (LINDA), and eco-friendly technologies (EcoFlame). Collaborate with engineering and research teams to create digital solutions that complement cutting-edge electronic systems.",
      type: "work",
    },
    {
      date: "Jan 2024 - May 2025",
      title: "Swahili Translator",
      company: "freeCodeCamp",
      description:
        "Translate technical content and educational materials from English to Swahili, making programming resources accessible to Swahili-speaking developers. Ensure accuracy and cultural relevance in technical terminology translation.",
      type: "work",
    },
    {
      date: "Jan 2024 - Jan 2025",
      title: "Swahili Tech Terminology Translator",
      company: "Swahili Tech Terms (Self-employed)",
      description:
        "Specialize in creating and standardizing Swahili translations for technical terminology in software development, web technologies, and programming concepts. Build comprehensive glossaries and resources for the Tanzanian tech community.",
      type: "work",
    },
    {
      date: "Jul 2023 - Feb 2024",
      title: "Content Writer",
      company: "Frontend Flow",
      description:
        "Created comprehensive educational content focused on frontend development technologies and best practices. Developed tutorials, guides, and resources for developers ranging from beginners to advanced practitioners, covering the latest tools and techniques in web development.",
      type: "work",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <section className="space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            My professional journey and volunteer work that shaped my skills and
            perspective.
          </p>
        </div>

        <Timeline items={experiences} />
      </section>
    </div>
  );
};

export default Experience;
