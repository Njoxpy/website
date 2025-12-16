const Research = () => {
  // Completed Projects
  const completedResearch = [
    {
      title: "NJOX A–Z Approach: A Practical Guide for Clean Code",
      description:
        "A systematic framework and practical guide for writing clean, maintainable, and modular code. This guide distills principles into actionable practices to improve codebase longevity and developer efficiency.",
      status: "Completed",
      category: "Software Engineering Methodology",
      tags: ["Clean Code", "Best Practices", "Maintainability"],
      link: "https://shorturl.at/i9EIN",
      outcomes: [
        "Comprehensive guide covering A-Z of clean code principles",
        "Actionable practices for immediate implementation",
        "Framework for team-wide coding standards adoption",
      ],
    },
    {
      title: "Tomato Disease Detection in Greenhouses Using Computer Vision",
      description:
        "An applied computer vision system for early detection and classification of diseases in tomato plants within controlled greenhouse environments, enabling precision agriculture interventions.",
      status: "Completed",
      category: "Applied Computer Vision",
      tags: ["Computer Vision", "Machine Learning", "Precision Agriculture"],
      link: "https://shorturl.at/nOL6P",
      outcomes: [
        "Working detection model for common tomato diseases",
        "System architecture for real-time monitoring",
        "Documentation on dataset creation and model training",
      ],
    },
  ];

  // Active Research Streams
  const activeResearch = [
    {
      title:
        "Problem-Driven Development: An Error-Guided Approach to Software Construction",
      description:
        "Investigating a development methodology that prioritizes problem validation and uses runtime errors as primary guidance for system construction, moving beyond solution-first approaches.",
      status: "Active Investigation",
      category: "Development Methodology",
      tags: ["PDD", "Software Methodology", "Error-Guided"],
      phase: "Framework Development",
      focusAreas: [
        "Problem validation techniques vs. solution assumptions",
        "Error patterns as system design feedback",
        "Integrating error-guidance into development lifecycle",
      ],
    },
  ];

  // Research Philosophy
  const researchPhilosophy = {
    title: "Research Protocol",
    principles: [
      {
        step: "1. Define & Bound",
        description:
          "Clearly isolate the core system, inefficiency, or unanswered question to be examined. Establish measurable boundaries and success criteria.",
      },
      {
        step: "2. Investigate & Model",
        description:
          "Research existing approaches, then develop conceptual and technical models of the system or problem space. Identify leverage points.",
      },
      {
        step: "3. Execute & Observe",
        description:
          "Implement tests, prototypes, or observational protocols. Collect data on system behavior, performance, and failure modes.",
      },
      {
        step: "4. Synthesize & Formalize",
        description:
          "Derive principles, frameworks, or architectural patterns. Document findings in reusable formats—guides, code, or published analysis.",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Research & Systematic Inquiry
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            A progression from applied solution-building to methodological
            research. Each project follows a defined protocol: problem
            formulation → methodology design → execution → synthesis into
            reusable knowledge.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Current focus: Development methodologies & information synthesis
            systems
          </span>
        </div>
      </section>

      {/* Completed Research */}
      <section className="space-y-10">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Applied Research & Publications
            </h2>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {completedResearch.length} completed works
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Documented solutions and frameworks derived from practical
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {completedResearch.map((research, index) => (
            <div
              key={index}
              className="group border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-sm"
            >
              <div className="p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-3">
                        {research.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight">
                        {research.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full whitespace-nowrap">
                      {research.status}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {research.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Key Outputs:
                    </h4>
                    <ul className="space-y-2">
                      {research.outcomes.map((outcome, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="mr-2 mt-1">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {research.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group/link"
                  >
                    Access resource
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Research Streams */}
      <section className="space-y-10">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Active Research Streams
            </h2>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {activeResearch.length} ongoing investigations
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Methodological inquiries and system architectures currently under
            development.
          </p>
        </div>

        <div className="space-y-8">
          {activeResearch.map((research, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-full">
                          {research.status}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                          {research.phase}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-xl">
                          {research.title}
                        </h3>
                        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                          {research.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {research.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Current Focus Areas:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {research.focusAreas.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-start p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <span className="mr-3 mt-0.5 text-gray-400">⟁</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {research.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {researchPhilosophy.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The systematic approach applied to all research inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchPhilosophy.principles.map((principle, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {principle.step.split(".")[0]}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {index + 1}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {principle.step.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Notes */}
      <section className="p-6 bg-gray-50 dark:bg-gray-800/30 rounded-xl">
        <div className="flex items-start space-x-4">
          <div className="mt-1">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Research Evolution:</strong> This portfolio demonstrates a
              progression from practical solution-building (clean code guide,
              computer vision application) to methodological innovation
              (Problem-Driven Development, information synthesis systems). The
              underlying thread is a focus on{" "}
              <em>systematic problem-solving</em> and{" "}
              <em>knowledge formalization</em>.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              All research outputs are designed to be pragmatic and
              implementable, bridging theory with engineering practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
