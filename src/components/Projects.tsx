"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Full Stack',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Web App',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent chatbot built with machine learning for customer support automation and natural language processing.',
    image: '/api/placeholder/400/250',
    technologies: ['Python', 'TensorFlow', 'Flask', 'NLP'],
    category: 'AI/ML',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with interactive maps, forecasts, and location-based services.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    category: 'Frontend',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile application for fitness tracking, workout planning, and health monitoring.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'Firebase', 'HealthKit'],
    category: 'Mobile',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 6,
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology for elections and decision-making.',
    image: '/api/placeholder/400/250',
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React'],
    category: 'Blockchain',
    github: '#',
    demo: '#',
    featured: false
  }
];

const categories = ['All', 'Full Stack', 'Web App', 'Frontend', 'Mobile', 'AI/ML', 'Blockchain'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const featuredMatch = !showFeatured || project.featured;
    return categoryMatch && featuredMatch;
  });

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--bg-accent)' : 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFeatured(!showFeatured)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: showFeatured ? 'var(--bg-accent)' : 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-primary)'
            }}
          >
            <Filter size={16} />
            Featured Only
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden border transition-all duration-300 group shadow-sm hover:shadow-md"
              style={{
                backgroundColor: 'var(--bg-accent)',
                borderColor: 'var(--border-secondary)'
              }}
            >
              {/* Project Image */}
              <div className="h-48 flex items-center justify-center border relative overflow-hidden"
                   style={{
                     backgroundColor: 'var(--bg-secondary)',
                     borderColor: 'var(--border-secondary)'
                   }}
                   title={`Project Image Placeholder - 400x192px (${project.title})`}>
                {/* Visual indicator for image dimensions */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-mono mb-1 opacity-60">400×192px</div>
                    <div className="text-4xl font-bold mb-1">{project.title.charAt(0)}</div>
                    <div className="text-xs opacity-50">Project Image</div>
                    <div className="text-xs opacity-40 mt-1">{project.title}</div>
                  </div>
                </div>
                {/* Grid overlay for visual reference */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full grid grid-cols-8 grid-rows-4">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className="border" style={{ borderColor: 'var(--text-primary)' }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                     className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-primary)'
              }}
            >
              View All Projects
              <ExternalLink size={16} />
            </a>
        </motion.div>
      </div>
    </section>
  );
}