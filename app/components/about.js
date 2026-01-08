"use client";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section
      id='about'
      className='min-h-[50vh] flex flex-col justify-center items-center px-4 text-center '>
      <h2 className='text-3xl md:text-5xl font-bold mb-4'>
        <span className='text-blue-400'>
          <Typewriter
            words={[
              "const name = 'Baran';",
              "Web Developer.",
              "Nice to meet you 👋",
            ]}
            loop={2}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p className='max-w-2xl text-gray-300 text-lg md:text-xl'>
        I'm a full-stack web developer with a passion for building clean,
        functional, and user-focused web applications. Always learning something
        new, and always down to build.
      </p>
    </section>
  );
}
