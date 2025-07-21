import React from "react";
import Timeline from "../components/common/Timeline";

const Experience = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      description:
        "Led development of scalable web applications serving 100k+ users. Mentored junior developers and implemented best practices for code quality and performance.",
      type: "work",
    },
    {
      date: "2022 - 2023",
      title: "Full Stack Developer",
      company: "Startup Inc",
      description:
        "Built MVP from scratch using React and Node.js. Collaborated with design team to create user-friendly interfaces and optimized database queries.",
      type: "work",
    },
    {
      date: "2021 - 2022",
      title: "Volunteer Developer",
      company: "Non-Profit Organization",
      description:
        "Developed and maintained website for local charity, improving their online presence and donation system.",
      type: "volunteer",
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
