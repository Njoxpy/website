import React from "react";
import Timeline from "../components/common/Timeline";

const Experience = () => {
  const experiences = [
    {
      date: "Aug 2025 – Present",
      title: "Full-Stack Developer & Technical Support Engineer",
      company: "Zanziholics Digital Agency",
      location: "Zanzibar Urban/West, Tanzania",
      description:
        "A leading marketing and creative agency based in Zanzibar, Tanzania. The company specializes in providing a range of digital and offline marketing solutions to businesses, particularly within the tourism, real estate, and hospitality sectors.",
      achievements: [
        "Delivered 5+ production websites including ZITF, Zanzibar Lion Park, Blue Impact Network, Zanzibar Comedy, oyaah.events (events booking), and fumbamaraton.com",
        "Built and launched oyaah.events — a complete event discovery & ticket booking platform",
        "Assisted 4+ clients with email setup, DNS, and troubleshooting on cPanel/VPS environments",
        "Migrated and optimized legacy sites → reduced average load time by 60-80%",
        "Created reusable internal documentation and client handbooks that improved team efficiency by ~20%",
        "Used AI tools (ChatGPT, Claude, Gemini) to 3x content creation and deployment speed for urgent client projects",
        "Acted as bridge between technical team and non-technical clients, translating complex issues into simple terms",
      ],
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "WordPress",
        "PHP",
        "Tailwind",
        "cPanel",
        "Linux",
        "LiteSpeed",
        "Redis",
        "MySQL",
        "Cloudflare",
        "AI Tools",
      ],
      type: "work",
    },
    {
      date: "Mar 2025 – Jun 2025",
      title: "Web Developer",
      company: "PORTO LTD",
      location: "Mbeya, Tanzania",
      description:
        "Developed digital platforms for innovative Tanzanian hardware products: AI-powered EduTech devices (IREN), smart security (LINDA), and sustainable energy solutions (EcoFlame).",
      achievements: [
        "Created responsive marketing sites and internal tools with Swahili/English support",
        "Helped bring three physical products to market with matching web experiences",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind",
        "Vercel",
      ],
      type: "work",
    },
    {
      date: "Jan 2024 – May 2025",
      title: "Swahili Translator & Contributor",
      company: "freeCodeCamp",
      description:
        "Part of the team translating the entire freeCodeCamp curriculum into Swahili making coding education free and accessible to East Africa.",
      achievements: [
        "Translated 500+ lessons and interactive coding challenges",
        "Helped 10,000+ Swahili-speaking learners start their dev journey",
        "Standardized technical terminology now used across Tanzanian bootcamps",
      ],
      techStack: ["Markdown", "JavaScript", "React", "Git"],
      type: "volunteer",
    },
    {
      date: "Jan 2024 – Jan 2025",
      title: "Founder & Swahili Tech Terminology Translator",
      company: "Swahili Tech Terms (Self-employed)",
      description:
        "Building the definitive open-source Swahili glossary for programming and emerging tech.",
      achievements: [
        "Published 2,000+ standardized terms adopted by local universities and communities",
        "Built public dictionary at swahili.dev/terms (or your actual domain)",
        "Featured in Tanzanian tech media and education programs",
      ],
      techStack: ["Next.js", "Supabase", "TypeScript"],
      type: "work",
    },
    {
      date: "Jul 2023 – Feb 2024",
      title: "Technical Content Writer",
      company: "Frontend Flow",
      location: "Mbeya, Tanzania",
      description:
        "Wrote in-depth tutorials and guides on modern frontend development for thousands of developers worldwide.",
      achievements: [
        "Authored 25+ high-ranking articles on React, TypeScript, performance, and best practices",
        "Grew newsletter audience from 0 → 3,200 subscribers",
        "Created content that was translated into multiple languages by the community",
      ],
      techStack: ["React", "TypeScript", "MDX", "Next.js", "Tailwind"],
      type: "work",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
      <section className="space-y-16">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            From launching real client projects in Zanzibar to translating the
            future of code into Swahili here’s where I’ve built, shipped, and
            made impact.
          </p>
        </div>

        <Timeline items={experiences} />
      </section>
    </div>
  );
};

export default Experience;
