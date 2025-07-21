import React from "react";

const TimelineItem = ({ date, title, company, description, type = "work" }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 w-3 h-3 bg-gray-900 dark:bg-white rounded-full"></div>
      <div className="absolute left-1.5 top-3 w-0.5 h-full bg-gray-200 dark:bg-gray-700 last:hidden"></div>

      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
          {type === "volunteer" && (
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
              Volunteer
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{company}</p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
