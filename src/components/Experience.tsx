"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  // {
  //   title: 'Software Engineer',
  //   company: 'Tech Company Inc.',
  //   location: 'Remote',
  //   period: '2023 - Present',
  //   description: 'Leading development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  //   achievements: [
  //     'Improved application performance by 40% through code optimization',
  //     'Led a team of 3 developers on a critical project',
  //     'Implemented CI/CD pipelines reducing deployment time by 60%'
  //   ]
  // },
  // {
  //   title: 'Junior Developer',
  //   company: 'StartupXYZ',
  //   location: 'City, Country',
  //   period: '2022 - 2023',
  //   description: 'Developed and maintained full-stack applications using modern web technologies. Participated in agile development processes and code reviews.',
  //   achievements: [
  //     'Built responsive web applications serving 10k+ users',
  //     'Reduced bug reports by 30% through comprehensive testing',
  //     'Mentored 2 junior developers'
  //   ]
  // },
  {
    title: 'Software Engineering Intern',
    company: 'JPMorgan Chase & Co.',
    location: 'Buenos Aires, Argentina',
    period: '2025 - now',
    description: 'Backend development intern focusing on building robust financial applications and services. Gained experience in distributed systems and cloud technologies.',
    achievements: [
      'Contributed to 3 major projects',
      'Maintenance and optimization of new and legacy systems',
      'Exceeded expectations leading to a full-time offer'
    ]
  },
  {
    title: 'Bachelor of Software Engineering',
    company: 'FIUBA - Universidad de Buenos Aires',
    location: 'Buenos Aires, Argentina',
    period: '2022-2025',
    description: 'Graduated on time and with above average grades from a rigorous 5-year Software Engineering program, focusing on software design, algorithms, and systems.',
    achievements: [
      'Designed, implemented and deployed an application to the Servicio Meteorológico Nacional for volcanic ash data visualization as part of my final project'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
           <p className="text-xl max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Mobile: Centered connecting line */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-0.5 rounded-full" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
          
          {/* Desktop: Centered timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-0.5 rounded-full shadow-lg" style={{ backgroundColor: 'var(--text-secondary)' }}></div>

          <div className="space-y-8 md:space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative md:flex md:items-center md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Mobile: Timeline dot connected to the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="hidden absolute left-1/2 w-3 h-3 rounded-full border-2 transform -translate-x-1.5 z-20"
                  style={{
                    backgroundColor: 'var(--text-primary)',
                    borderColor: 'var(--bg-primary)'
                  }}
                >
                  <div className="w-full h-full rounded-full opacity-60" style={{ backgroundColor: 'var(--bg-primary)' }}></div>
                </motion.div>

                {/* Desktop: Timeline dot and connector */}
                <div className="hidden md:flex md:absolute md:left-1/2 md:items-center ">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-5 h-5 rounded-full border-3 transform -translate-x-2.5 z-20 shadow-lg"
                    style={{
                      backgroundColor: 'var(--text-primary)',
                      borderColor: 'var(--bg-primary)'
                    }}
                  >
                    <div className="w-full h-full rounded-full opacity-60" style={{ backgroundColor: 'var(--bg-primary)' }}></div>
                  </motion.div>
                  
                  {/* Desktop: Timeline connector line */}
                  <div className={`absolute w-18 h-1 rounded-full ${
                    index % 2 === 0 ? '-translate-x-full' : ''
                  }`} style={{ backgroundColor: 'var(--text-secondary)' }}></div>
                </div>

                 {/* Content - Centered on mobile, alternating on desktop */}
                 <div className="flex justify-center md:justify-start md:ml-0 w-full max-w-sm md:w-5/12">
                   <div className="p-6 rounded-lg border hover:opacity-80 transition-opacity" style={{
                     backgroundColor: 'var(--bg-accent)',
                     borderColor: 'var(--border-secondary)'
                   }}>
                      <div className="flex flex-col gap-2 mb-3">
                         <div className="flex items-center  gap-4">
                           <h3 className="text-xl font-semibold flex-1 pr-2">{exp.title}</h3>
                           <div className="flex items-center gap-2 text-sm shrink-0">
                             <Calendar size={18} style={{ color: 'var(--text-secondary)' }} />
                             <span className="whitespace-nowrap">{exp.period}</span>
                           </div>
                         </div>

                         <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                              <Building size={20} style={{ color: 'var(--text-secondary)' }} />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                              <MapPin size={18} style={{ color: 'var(--text-secondary)' }} />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                         </div>
                      </div>

                     <p className="mb-4 leading-relaxed">{exp.description}</p>

                     <div className="space-y-2">
                       <h4 className="font-medium">Key Achievements:</h4>
                       <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-secondary)' }}>
                         {exp.achievements.map((achievement, i) => (
                           <li key={i} className="text-sm">{achievement}</li>
                         ))}
                       </ul>
                     </div>
                   </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}