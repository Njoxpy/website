const ProjectCard = ({ title, description, tech, link, github }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors hover:shadow-sm">
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
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium"
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
  const allProjects = [
    {
      title: "Porto Africa",
      description:
        "PORTO Africa is a Tanzania-based technology company that designs and builds custom electronic and smart systems for businesses, focusing on innovation, IoT, AI-powered solutions, and real-world problem solving across different industries.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://www.porto.africa/",
    },
    {
      title: "Keys",
      description:
        "The Key Management System is a web-based platform designed to facilitate the management of venue keys at the university.",
      tech: ["Mkdocs", "React", "Node.js", "MongoDB", "Express", "Tailwind"],
      link: "https://njoxpy.github.io/njox_keys/",
      github: "https://github.com/Njoxpy/njox_keys",
    },
    {
      title: "Karibu",
      description:
        "Karibu is a company management system designed to support multiple business sectors—including animal feed production, milling, fresh oil processing, and printing—by centralizing operations, improving workflow management, and streamlining daily business activities across different departments.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
      github: "https://github.com/Njoxpy/karibu",
    },
    {
      title: "GGMU",
      description:
        "A landing page project celebrating Manchester United Football Club, built with Next.js and Tailwind CSS. The site showcases the club's history, iconic moments, and legendary players through a dedicated web page experience.",
      tech: ["React", "Next.js", "CSS", "JavaScript"],
      link: "https://ggmu.vercel.app/",
      github: "https://github.com/Njoxpy/ggmu",
    },
    {
      title: "kilimokacha",
      description:
        "Kilimokacha is the website that helps farmers grow better by giving them access to farming tips, market updates, and expert advice. We're here to support you in making your farming more productive and profitable..",
      tech: ["React", "Next.js", "CSS", "JavaScript"],
      link: "https://kilimokacha.vercel.app/",
      github: "https://github.com/Njoxpy/kilimokacha",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Systems Architecture
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Production systems and applied research projects that demonstrate
          full-stack implementation, data flow design, and practical
          problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400">
            For implementation details, system diagrams, and ongoing experiments
          </p>
          <a
            href="https://github.com/Njoxpy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-colors inline-flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Full GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
