import React from "react";

const TestimonialCard = ({ quote, name, title, photo }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center space-x-4">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
