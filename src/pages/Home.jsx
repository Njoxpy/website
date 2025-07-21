import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "../components/common/TestimonialCard";

const Home = () => {
  const testimonials = [
    {
      quote:
        "Godbless, our lead software developer at Porto Limited, is a highly skilled, dedicated, and visionary asset. His excellent work on our website and other software initiatives, marked by innovative, quality solutions, makes us proud to have him.",
      name: "Philbert Shio",
      title: "Founder at Porto Africa",
      photo: "./shio.jpeg",
    },
    {
      quote:
        "Working with Njox was a game-changer for our project. His attention to detail is outstanding.",
      name: "Wema Mwasyesye",
      title: "Secretary at Savarrah",
      photo: "./wema.jpg",
    },
  ];

  const companies = [
    { name: "Porto Africa", logo: "./porto.PNG" },
    { name: "Savarrah", logo: "./savarah.png" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Hi, I'm Godbless Njox
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          Full Stack Developer passionate about building meaningful digital
          experiences. I create scalable solutions that solve real problems and
          drive business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View my work
          </Link>
        </div>

        {/* Alternative: Single CTA with secondary link */}
        {/* 
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Let's work together
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/projects"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
            >
              See my projects →
            </Link>
            
              href="https://github.com/njox-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>
        */}
      </section>

      {/* Companies Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Trusted by companies
        </h2>
        <div className="flex items-center space-x-12 opacity-60">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-8 object-contain grayscale"
            />
          ))}
        </div>
      </section>
      {/* Add this section before testimonials */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Latest from my blog
          </h2>
          <a
            href="https://blog.njox.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View all posts →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://blog.njox.dev/post-1"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Why ‘Clean Code’ Might Be Slowing Down Your Career
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Best practices and patterns I've learned building large-scale
              React applications...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Jan 15, 2024 • 5 min read
            </span>
          </a>

          <a
            href="https://blog.njox.dev/post-2"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              My Development Workflow in 2024
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Tools, processes, and techniques that make me more productive as a
              developer...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Jan 8, 2024 • 3 min read
            </span>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What people say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Explore my work
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/projects"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Explore my latest work and research projects
            </p>
          </Link>
          <Link
            to="/experience"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              My professional journey and volunteering
            </p>
          </Link>
          <Link
            to="/opensource"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Open Source
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              My contributions to the developer community
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
