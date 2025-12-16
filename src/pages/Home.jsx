import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "../components/common/TestimonialCard";

const Home = () => {
  const testimonials = [
    {
      quote:
        "Godbless, our lead dev at Porto, boosted site speed by 45% and led 3 key features—his impact is huge.",
      name: "Philbert Shio",
      title: "Founder at Porto Africa",
      photo: "./shio.jpeg",
    },
    {
      quote:
        "Working with Njox leveled up our project—he cut bugs by 60% and sped up delivery by 2 weeks.",
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
          Hi, I'm Godbless Nyagawa(Njox)
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
          Full Stack Developer driven by curiosity and discipline. I build
          open-source tools and scalable systems that solve business
          inefficiencies and improve daily life for communities. With a
          tinkering mindset rooted in reverse engineering and research, I create
          solutions that last.
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
              className="h-8 object-contain"
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
            href="https://blog.njox.dev/blog/Why-Clean-Code-is-actually-slowing-down-your-career-growth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Why ‘Clean Code’ Might Be Slowing Down Your Career
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Writing clean, elegant code feels good. It’s structured, readable,
              and often admired. But here’s the hard truth: clean code isn’t
              always what moves your career forward...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              July 22, 2024 • 3 min read
            </span>
          </a>

          <a
            href="https://blog.njox.dev/blog/How-can-programmers-learn-Human-languages"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              How Can Programmers Learn Human Languages?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              If you’re a developer wanting to dive into human languages, this
              article is for you. We’ll explore how your experience with
              programming languages can actually speed up your human language
              learning game...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              July 18, 2024 • 4 min read
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
