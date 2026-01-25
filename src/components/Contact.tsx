"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'City, Country',
    href: '#'
  }
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
];

export default function Contact() {
  "use client";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
                 I&apos;m currently available for freelance work and full-time opportunities.
                 Whether you have a project in mind or just want to chat about technology,
                 I&apos;d love to hear from you.
               </p>
             </div>

             {/* Contact Info Cards */}
             <div className="space-y-4">
               {contactInfo.map((info, index) => (
                 <motion.a
                   key={info.label}
                   href={info.href}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-4 p-4 rounded-lg border hover:opacity-80 transition-all duration-200 group shadow-sm"
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
                 </motion.a>
               ))}
             </div>

             {/* Social Links */}
             <div>
               <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
               <div className="flex gap-4">
                 {socialLinks.map((social, index) => (
                   <motion.a
                     key={social.label}
                     href={social.href}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: index * 0.1, duration: 0.5 }}
                     viewport={{ once: true }}
                     className="p-3 rounded-lg border hover:opacity-80 transition-all duration-200 hover:scale-110"
                     style={{
                       backgroundColor: 'var(--bg-accent)',
                       borderColor: 'var(--border-secondary)',
                       color: 'var(--text-secondary)'
                     }}
                     aria-label={social.label}
                   >
                     <social.icon size={20} />
                   </motion.a>
                 ))}
               </div>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg border shadow-sm"
            style={{
              backgroundColor: 'var(--bg-accent)',
              borderColor: 'var(--border-secondary)'
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-secondary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:opacity-80 transition-opacity"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-secondary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:opacity-80 transition-opacity resize-none"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)'
                }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}