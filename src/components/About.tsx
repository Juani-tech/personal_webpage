"use client";

import { motion } from 'framer-motion';
import { Code, Database, Globe, Users, Coffee, Gamepad2, BookOpen} from 'lucide-react';

const skills = [
  { name: 'Backend Systems', icon: Database, description: 'Python, Go, Rust, C++, PostgreSQL, MongoDB, API Design, AWS, Systems architecture' },
  { name: 'Web Development', icon: Globe, description: 'React, Next.js, Angular, TypeScript, Node.js' },
  { name: 'Software Engineering', icon: Code, description: 'Clean Code, Design Patterns, Testing' },
  { name: 'Team Collaboration', icon: Users, description: 'Agile, Git, Code Reviews' },
];

const interests = [
  { name: 'Mate & Coding', icon: Coffee, description: 'Finding inspiration in a good mate while solving complex problems' },
  { name: 'Gaming', icon: Gamepad2, description: 'Strategic games and automating worlds for creative inspiration' },
  { name: 'Learn', icon: BookOpen, description: 'Learning new engineering and physics concepts' },
  { name: 'Technology Trends', icon: Globe, description: 'Staying updated with the latest in software engineering and AI' },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Software Engineer with a passion for creating impactful software solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 leading-relaxed">
              <p>
                Graduated with a degree in Software Engineering from FIUBA (Universidad de Buenos Aires, Facultad de Ingenieria), I&apos;m passionate about solving complex problems. What started as curiosity has evolved
                into a career dedicated to solving complex problems through elegant code.
              </p>
              <p>
                My experience spans across web development, backend systems, and software architecture.
                I believe in writing clean, maintainable code that not only works but also tells a story
                about the problem it solves.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                projects, or enjoying a mate while brainstorming the next big idea.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
             <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-lg border hover:opacity-80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--bg-accent)',
                    borderColor: 'var(--border-secondary)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon size={24} style={{ color: 'var(--text-secondary)' }} />
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                  <p className="text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

          {/* Interests */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">Beyond Code</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="text-center p-6 rounded-lg border hover:opacity-80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--bg-accent)',
                  borderColor: 'var(--border-secondary)'
                }}
              >
                <interest.icon className="mx-auto mb-3" size={32} style={{ color: 'var(--text-secondary)' }} />
                <h4 className="font-semibold mb-2">{interest.name}</h4>
                <p className="text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}