"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Tamamliyo Insurance",
    role: "Software Developer Intern",
    bullets: [
      "Developed a web application for pet insurance",
      "Collaborated with backend team to debug and optimize API integrations.",
    ],
  },
  {
    company: "Simurgh Media",
    role: "Full Stack Developer",
    bullets: [
      "Developed and maintained features for media content management system using Node.js and React.",
      "Built a modular article publishing tool with user role permissions and image upload.",
      "Implemented secure user authentication using JWT and integrated email notifications.",
    ],
  },

  // Daha fazla deneyim eklersin...
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='min-h-[50vh]bg-[#0a192f] text-white px-6 py-20 mb-20'>
      <h2 className='text-2xl font-bold  mb-10 text-center '>/ experience</h2>
      <div className='flex flex-col md:flex-row max-w-5xl mx-auto'>
        {/* Sol Menü */}
        <ul className='md:w-1/4 mb-6 md:mb-0 space-y-2'>
          {experiences.map((exp, i) => (
            <li
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`cursor-pointer px-2 py-1 border-l-4 ${
                i === activeIndex
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}>
              {exp.company}
            </li>
          ))}
        </ul>

        {/* Sağ İçerik */}
        <div className='md:w-3/4 pl-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}>
              <h3 className='text-xl font-semibold'>
                {experiences[activeIndex].role}{" "}
                <span className='text-cyan-400'>
                  @ {experiences[activeIndex].company}
                </span>
              </h3>
              <p className='text-sm text-gray-400 mb-4'>
                {experiences[activeIndex].date}
              </p>
              <ul className='list-disc ml-6 space-y-2 text-gray-300'>
                {experiences[activeIndex].bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
