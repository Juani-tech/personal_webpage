"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/personal_webpage' : '';

const projects = [
  {
    id: 1,
    title: 'Raft Consensus Protocol',
    description: 'A robust implementation of the Raft consensus algorithm in Go. Engineered leader election, log replication, and safety mechanisms to maintain state machine consistency across distributed nodes during network partitions.',
    image: `${basePath}/figure1_raft-1.webp`,
    technologies: ['Go'],
    categories: ['Distributed Systems'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 6,
    title: 'Git Internal Core',
    description: 'Rust implementation of Git internals, including the packfile format and delta compression logic. Optimized for concurrent access and high-performance binary data serialization.',
    image: `${basePath}/rustacean-flat-happy.png`,
    technologies: ['Rust'],
    categories: ['Systems Programming'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Sharded Key-Value Store',
    description: 'A linearizable, sharded storage system built on top of Raft. Features a shard master for configuration management and supports live state transfer between shards to ensure horizontal scalability.',
    image: `${basePath}/shardkv.png`,
    technologies: ['Go'],
    categories: ['Distributed Systems'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Distributed Data Pipeline',
    description: 'A fault-tolerant batch processing system for Steam review analytics. Utilized RabbitMQ and ZeroMQ for coordination between multiple worker nodes, ensuring reliable processing of large-scale datasets.',
    image: `${basePath}/Data-pipeline-automation.webp`,
    technologies: ['Python', 'RabbitMQ', 'ZeroMQ', 'Docker'],
    categories: ['Data Engineering', 'Distributed Systems'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Volcanic Ash Visualizer (SMN)',
    description: 'Mission-critical fullstack application for the National Meteorological Service (Arg). Owned the full lifecycle—from architectural design to AWS deployment—focusing on real-time geospatial data processing.',
    image: `${basePath}/SMN_Logo_Alta.png`,
    technologies: ['FastAPI', 'Angular', 'PostgreSQL', 'AWS', 'Docker'],
    categories: ['Full Stack', 'Data Engineering'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 8,
    title: 'Local-First Fitness App',
    description: 'An offline-first gym tracker built with React Native and WatermelonDB. Implemented a custom synchronization engine to handle background reconciliation with an Express backend.',
    image: `${basePath}/offline_first.png`,
    technologies: ['React Native', 'WatermelonDB', 'ExpressJS'],
    categories: ['Mobile', 'Full Stack'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 4,
    title: 'TwitSnap Microservices',
    description: 'Mobile social platform utilizing a polyglot microservices architecture. Focused on decoupled communication, containerization, and scalable backend infrastructure.',
    image: `${basePath}/User-API-Microservice.png.webp`,
    technologies: ['React Native', 'ExpressJS', 'FastAPI', 'Firebase', 'Docker'],
    categories: ['Mobile', 'Full Stack', 'Distributed Systems'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 7,
    title: 'VPN Detection Engine',
    description: 'Machine learning pipeline for classifying network traffic. Performed extensive feature engineering and optimized gradient-boosted models (XGBoost/CatBoost) for a high-accuracy Kaggle entry.',
    image: `${basePath}/data-logopng.png`,
    technologies: ['Python', 'SciKit-Learn', 'XGBoost', 'Pandas'],
    categories: ['AI/ML', 'Data Engineering'],
    github: '#',
    demo: '#',
    featured: false
  }
];

const categories = ['All', 'Full Stack', 'Mobile', 'AI/ML', 'Distributed Systems', 'Data Engineering', 'Systems Programming'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFeatured, setShowFeatured] = useState(false);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.categories.includes(selectedCategory);
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
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden border transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1"
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
                   }}>
                {project.image && !project.image.includes('placeholder') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
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
                  </>
                )}
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
            </div>
          ))}
        </div>

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