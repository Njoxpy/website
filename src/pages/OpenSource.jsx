import React from "react";

const ContributionCard = ({
  repo,
  description,
  language,
  stars,
  forks,
  lastCommit,
  type = "contribution",
}) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {repo}
            </h3>
            {type === "maintainer" && (
              <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                Maintainer
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          {language && (
            <span className="flex items-center space-x-1">
              <div
                className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}
              ></div>
              <span>{language}</span>
            </span>
          )}
          <span className="flex items-center space-x-1">
            <StarIcon />
            <span>{stars}</span>
          </span>
          <span className="flex items-center space-x-1">
            <ForkIcon />
            <span>{forks}</span>
          </span>
          <span className="text-xs">Updated {lastCommit}</span>
        </div>
        <a
          href={`https://github.com/${repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm font-medium"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="text-gray-400 dark:text-gray-500">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ repo, action, date, link }) => {
  return (
    <div className="flex items-start space-x-3 py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
      <div className="flex-1">
        <p className="text-sm text-gray-900 dark:text-white">
          {action} in{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            {repo}
          </a>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
  );
};

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Java: "bg-orange-500",
    React: "bg-cyan-400",
    Vue: "bg-green-400",
    "C++": "bg-pink-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-600",
    PHP: "bg-purple-500",
  };
  return colors[language] || "bg-gray-400";
};

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ForkIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const RepoIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
      clipRule="evenodd"
    />
  </svg>
);

const CommitIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const PullRequestIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7H7a1 1 0 000 2h6a1 1 0 100-2z"
      clipRule="evenodd"
    />
  </svg>
);

const OpenSource = () => {
  const stats = [
    { title: "Public Repositories", value: "24", icon: <RepoIcon /> },
    { title: "Total Stars", value: "156", icon: <StarIcon /> },
    { title: "Contributions", value: "432", icon: <CommitIcon /> },
    { title: "Pull Requests", value: "89", icon: <PullRequestIcon /> },
  ];

  const projects = [
    {
      repo: "njox-dev/awesome-react-components",
      description:
        "A curated list of awesome React components and libraries for building modern web applications.",
      language: "JavaScript",
      stars: "45",
      forks: "12",
      lastCommit: "2 days ago",
      type: "maintainer",
    },
    {
      repo: "njox-dev/tailwind-starter-kit",
      description:
        "A modern starter kit for React applications with Tailwind CSS, TypeScript, and best practices.",
      language: "TypeScript",
      stars: "28",
      forks: "8",
      lastCommit: "1 week ago",
      type: "maintainer",
    },
    {
      repo: "njox-dev/api-wrapper-generator",
      description:
        "CLI tool to generate TypeScript API wrappers from OpenAPI specifications with full type safety.",
      language: "TypeScript",
      stars: "67",
      forks: "15",
      lastCommit: "3 days ago",
      type: "maintainer",
    },
  ];

  const contributions = [
    {
      repo: "facebook/react",
      description:
        "Fixed memory leak in useEffect cleanup for development builds",
      language: "JavaScript",
      stars: "201k",
      forks: "41k",
      lastCommit: "yesterday",
    },
    {
      repo: "tailwindlabs/tailwindcss",
      description: "Added new utility classes for container queries support",
      language: "JavaScript",
      stars: "68k",
      forks: "3.4k",
      lastCommit: "1 week ago",
    },
    {
      repo: "vercel/next.js",
      description: "Improved TypeScript integration for API routes",
      language: "TypeScript",
      stars: "112k",
      forks: "24k",
      lastCommit: "4 days ago",
    },
  ];

  const recentActivity = [
    {
      repo: "njox-dev/awesome-react-components",
      action: "Pushed 3 commits",
      date: "2 days ago",
      link: "https://github.com/njox-dev/awesome-react-components",
    },
    {
      repo: "tailwindlabs/tailwindcss",
      action: "Opened pull request #8234",
      date: "1 week ago",
      link: "https://github.com/tailwindlabs/tailwindcss/pull/8234",
    },
    {
      repo: "njox-dev/api-wrapper-generator",
      action: "Released v2.1.0",
      date: "1 week ago",
      link: "https://github.com/njox-dev/api-wrapper-generator/releases/tag/v2.1.0",
    },
    {
      repo: "facebook/react",
      action: "Merged pull request #24567",
      date: "2 weeks ago",
      link: "https://github.com/facebook/react/pull/24567",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Open Source
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          I believe in giving back to the community. Here are my contributions
          to open source projects and tools I've built to help other developers.
        </p>
      </section>

      {/* Stats Overview */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          {/* My Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <ContributionCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Contributions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Notable Contributions
            </h2>
            <div className="space-y-4">
              {contributions.map((contribution, index) => (
                <ContributionCard key={index} {...contribution} />
              ))}
            </div>
          </section>
        </div>

        {/* Recent Activity Sidebar */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="space-y-1">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Links
            </h2>
            <div className="space-y-3">
              <a
                href="https://github.com/njox-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900 dark:text-white">
                  View GitHub Profile
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
