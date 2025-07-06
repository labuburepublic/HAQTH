
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <img
        src="/src/assets/profile.jpg"
        alt="Abdulganiy Abdulhaq"
        className="w-32 h-32 rounded-full mx-auto mb-4 shadow-xl border-4 border-white dark:border-gray-700"
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Abdulganiy Abdulhaq
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Frontend Developer | Code. Creativity. Cruise.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
