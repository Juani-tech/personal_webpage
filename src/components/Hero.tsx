"use client";

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-48 h-48 mx-auto rounded-full border-4 shadow-xl relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-accent)',
              borderColor: 'var(--bg-primary)'
            }}
          >
            <Image
              src="/me_final_project.JPG"
              alt="Juan Ignacio"
              fill
              className="object-cover scale-[2.0] translate-x-[-5%] translate-y-[-25%]"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I&apos;m Juani
            </h1>
              {/* <TextType 
                text={["Juan Ignacio"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
                variableSpeed={false}
                onSentenceComplete={() => {}}
              /> */}
            <h2 className="text-xl md:text-2xl">
              Software Engineer
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">
              Passionate about creating innovative solutions through code. Specialized in backend development, distributed systems,
              software engineering, and turning complex problems into elegant, user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-accent)',
                color: 'var(--text-primary)'
              }}
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ChevronDown size={32} />
          </motion.div>
      </motion.div>
    </section>
  );
}