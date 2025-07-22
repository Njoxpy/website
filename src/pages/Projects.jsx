import React, { useState } from "react";

const ProjectCard = ({ title, description, tech, link, github }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            View Live →
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllResearch, setShowAllResearch] = useState(false);

  const allProjects = [
    {
      title: "Savarrah",
      description:
        "A company management website streamlining inventory, product, and order management across various sectors.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://savarrah.co.tz/",
    },
    {
      title: "Porto Africa",
      description:
        "Porto designs innovative, tailored electronic solutions for businesses, integrating systems with operations",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://www.porto.africa/",
    },
    {
      title: "Iren Porto Africa",
      description:
        "IREN is revolutionizing inclusive education by providing accessible, intelligent tools that break down barriers and create equal learning opportunities for all students.",
      tech: ["html", "CSS"],
      link: "https://iren.porto.africa/",
    },
    {
      title: "NJOX Development",
      description:
        "Personal development portfolio and blog showcasing web development projects and insights.",
      tech: ["Next.js", "React", "Tailwind CSS", "MDX"],
      link: "https://njox.dev",
    },
  ];
  const allResearch = [
    {
      title:
        "NJOX A – Z APPROACH: A Practical Guide for Writing Clean, Maintainable and Modular Code",
      description:
        "Comprehensive research and methodology for developing clean, maintainable, and modular code practices. A systematic approach to software development covering best practices, design patterns, and architectural principles. This framework introduces scalable, reusable software development patterns with emphasis on async-friendly architectures, code organization, and long-term maintainability strategies for modern web applications.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
      ],
      github: "https://github.com/username/njox-a-z-approach", // Update with your actual GitHub URL
      image: "/images/projects/njox-approach.png",
      publishedDate: "2025-05-01",
    },
    {
      title: "How Tanzanian Developers Market Their Projects",
      description:
        "An in-depth research study exploring the unique marketing strategies and community-driven growth approaches adopted by software developers in Tanzania. This research examines local networking practices, social media utilization, community engagement tactics, and the role of local tech hubs in project promotion. The study provides insights into how Tanzanian developers overcome resource constraints and leverage cultural advantages to successfully market their software projects both locally and internationally.",
      tech: [
        "Research",
        "Community Analysis",
        "Marketing Strategy",
        "Social Media",
      ],
      github: "", // Add if available
      image: "/images/projects/tanzanian-dev-marketing.png",
      publishedDate: "2025-05-01",
    },
    {
      title: "Swahili-Centric Programming Education via YouTube",
      description:
        "Groundbreaking research on bridging language barriers in programming education through Swahili-language content delivery on YouTube. This study explores the effectiveness of native language instruction in technical subjects, analyzes viewer engagement patterns, and documents the impact of culturally relevant programming education. The research demonstrates how Swahili programming tutorials can increase accessibility to coding education across East Africa and provides a framework for creating technical content in local languages.",
      tech: [
        "Educational Technology",
        "Content Strategy",
        "Swahili",
        "YouTube Analytics",
      ],
      github: "", // Add if available
      image: "/images/projects/swahili-programming.png",
      publishedDate: "2025-05-01",
    },
    {
      title: "The Njox A–Z Approach to Writing and Scaling Code",
      description:
        "Advanced research introducing a comprehensive framework for scalable, reusable software development with particular emphasis on async-friendly patterns and modern JavaScript architectures. This methodology covers code organization principles, scalability patterns, performance optimization techniques, and maintainable system design. The approach provides developers with practical guidelines for building applications that can grow from small projects to enterprise-level systems while maintaining code quality and developer productivity.",
      tech: [
        "Software Architecture",
        "Scalability",
        "JavaScript",
        "System Design",
        "Performance",
      ],
      github: "", // Add if available
      image: "/images/projects/scaling-code.png",
      publishedDate: "2025-05-01",
    },
  ];

  // Show only first 3 items unless "show all" is clicked
  const displayedProjects = showAllProjects
    ? allProjects
    : allProjects.slice(0, 3);
  const displayedResearch = showAllResearch
    ? allResearch
    : allResearch.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Here are some of my recent projects and research work that showcase my
          skills and interests.
        </p>

        <div className="space-y-12">
          {/* Featured Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid gap-8">
              {displayedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {/* See More Projects Button */}
            {allProjects.length > 3 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {showAllProjects ? (
                    <>
                      <svg
                        className="w-4 h-4 inline mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      See More Projects ({allProjects.length - 3} more)
                      <svg
                        className="w-4 h-4 inline ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Research */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Research
            </h2>
            <div className="grid gap-8">
              {displayedResearch.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {/* See More Research Button */}
            {allResearch.length > 2 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllResearch(!showAllResearch)}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {showAllResearch ? (
                    <>
                      <svg
                        className="w-4 h-4 inline mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      See More Research ({allResearch.length - 2} more)
                      <svg
                        className="w-4 h-4 inline ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
