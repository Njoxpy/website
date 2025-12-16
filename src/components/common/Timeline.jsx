import React from "react";

const TimelineItem = ({
  date,
  title,
  company,
  description,
  achievements = [],
  techStack = [],
  type = "work", // work | volunteer | education
}) => {
  const typeStyles = {
    work: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    volunteer: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    education:
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  };

  const style = typeStyles[type] || typeStyles.work;

  return (
    <div className="relative pl-12 pb-14 last:pb-0">
      {/* Vertical Line */}
      <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 last:hidden" />

      <div className="space-y-5">
        {/* Date + Type Badge */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <time className="font-medium text-gray-500 dark:text-gray-400">
            {date}
          </time>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${style}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Title & Company */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xl font-medium text-primary mt-1">{company}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          {description}
        </p>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              Key Achievements
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-base leading-relaxed">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
