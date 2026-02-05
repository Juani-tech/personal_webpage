"use client";

import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Juani-tech',
    href: 'https://github.com/Juani-tech'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/juani-perez-di-chiazza',
    href: 'https://www.linkedin.com/in/juani-perez-di-chiazza/'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Buenos Aires, Argentina',
    href: '#'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Juani-tech', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/juani-perez-di-chiazza/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 " style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
           <p className="text-xl max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
             <div>
               <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
               <p className="leading-relaxed mb-8">
                  Always down to talk shop about distributed systems, backend architecture, or the evolving AI landscape. If you&apos;re working on something challenging or just want to say hi, my inbox is open.
               </p>
             </div>

             {/* Contact Info Cards */}
             <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:opacity-80 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-accent)',
                      borderColor: 'var(--border-secondary)'
                    }}
                  >
                    <div className="p-3 rounded-lg group-hover:opacity-80 transition-opacity" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <info.icon size={20} style={{ color: 'var(--text-secondary)' }} />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div style={{ color: 'var(--text-secondary)' }}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border hover:opacity-80 transition-all duration-300 hover:scale-110 hover:shadow-md"
                      style={{
                        backgroundColor: 'var(--bg-accent)',
                        borderColor: 'var(--border-secondary)',
                        color: 'var(--text-secondary)'
                      }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
          </motion.div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-lg border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-accent)',
              borderColor: 'var(--border-secondary)'
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
            <p className="mb-6 leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting projects, or just chatting about technology. 
              Feel free to reach out through any of my social profiles or check out my work on GitHub.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://github.com/Juani-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-md border"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              >
                <Github size={20} />
                View My GitHub
                <ExternalLink size={16} className="opacity-60" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/juani-perez-di-chiazza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-md border"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              >
                <Linkedin size={20} />
                Connect on LinkedIn
                <ExternalLink size={16} className="opacity-60" />
              </a>
              
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-md border"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)'
                }}
              >
                <Twitter size={20} />
                Follow on Twitter
                <ExternalLink size={16} className="opacity-60" />
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-secondary)' }}>
              <p className="text-sm opacity-70 text-center">
                Prefer email? Reach out through LinkedIn messages or check my GitHub profile for contact details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}