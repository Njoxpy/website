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
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard. Built for scalability and performance.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      link: "https://example.com",
      github: "https://github.com/username/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
      tech: ["React", "Firebase", "TypeScript", "Material-UI"],
      link: "https://example.com",
      github: "https://github.com/username/task-manager",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts using multiple API integrations.",
      tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      link: "https://example.com",
      github: "https://github.com/username/weather-app",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics platform for social media performance tracking with data visualization, automated reporting, and trend analysis.",
      tech: ["React", "Python", "Django", "D3.js"],
      link: "https://example.com",
      github: "https://github.com/username/social-analytics",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course creation tools, progress tracking, and interactive learning modules for online education.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      github: "https://github.com/username/lms-platform",
    },
    {
      title: "Portfolio Generator",
      description:
        "Tool for developers to automatically generate portfolio websites from GitHub data with customizable themes and layouts.",
      tech: ["React", "GitHub API", "Netlify", "Styled Components"],
      link: "https://example.com",
      github: "https://github.com/username/portfolio-generator",
    },
  ];

  const allResearch = [
    {
      title: "Machine Learning for Text Classification",
      description:
        "Research on improving text classification accuracy using ensemble methods and feature engineering techniques on social media data.",
      tech: ["Python", "TensorFlow", "Jupyter", "scikit-learn"],
      github: "https://github.com/username/text-classification-research",
    },
    {
      title: "Web Performance Optimization Study",
      description:
        "Comprehensive analysis of modern web performance optimization techniques and their impact on user experience metrics.",
      tech: ["JavaScript", "Lighthouse", "WebPageTest", "Python"],
      github: "https://github.com/username/web-performance-study",
    },
    {
      title: "Cryptocurrency Price Prediction",
      description:
        "Time series analysis and machine learning models for predicting cryptocurrency price movements using market sentiment data.",
      tech: ["Python", "Pandas", "LSTM", "TensorFlow"],
      github: "https://github.com/username/crypto-prediction",
    },
    {
      title: "Mobile App Usage Patterns",
      description:
        "Research study on user behavior patterns in mobile applications and their correlation with app retention rates.",
      tech: ["R", "Python", "Tableau", "Statistical Analysis"],
      github: "https://github.com/username/mobile-usage-research",
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
