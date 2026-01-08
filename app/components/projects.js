"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "J1Lists",
    description:
      "A web app connecting J-1 students with hosts, jobs, and housing opportunities in the US.",
    github: "https://github.com/baransulu/j1lists",
    live: "https://j1lists.com",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "WhatsInMB",
    description:
      "A real-time local review app for tourists visiting Myrtle Beach.",
    github: "https://github.com/baransulu/whatsinmb",
    live: "https://whatsinmb.com",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

const clientWebsites = [
  { title: "Burky's Grill", url: "https://burkysgrill.surge.sh" },
  { title: "Old Town Crepes", url: "https://oldtowncrepes.surge.sh" },
  { title: "Soul and Body", url: "https://soulandbody.surge.sh" },
  { title: "Touch of Aloha", url: "https://touchofaloha.surge.sh" },
  { title: "RS1 Detailing", url: "https://rs1.surge.sh" },
  { title: "Parsons Table", url: "https://parsonstable.surge.sh" },
  { title: "Flamingo Grill", url: "https://flamingogrill.surge.sh" },
  { title: "Majestic Massage", url: "https://majesticmassage.surge.sh" },
  { title: "Cuttsy's Pizza", url: "https://cuttsypizza.surge.sh" },
  { title: "Hooks Seafood", url: "https://hooksseafood.surge.sh" },
  { title: "Barrel Bar and Grill", url: "https://barrelbarandgrill.surge.sh" },
  { title: "777 Shooting", url: "https://777shooting.surge.sh" },
  { title: "Jin Spa", url: "https://jinspa.surge.sh" },
  { title: "Sweet Molly's", url: "https://sweetmolly.surge.sh" },
  { title: "Hamburger Joe's", url: "https://hamburgerjoes.surge.sh" },
  { title: "Portofino", url: "https://portofino.surge.sh" },
];

export default function Projects() {
  return (
    <section className='px-6 py-20 bg-[#0a192f] text-white'>
      <h2 className='text-3xl font-bold mb-10 text-center'>/ projects</h2>

      {/* Main App Projects */}
      <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-16 items-stretch'>
        {projects.map((project, index) => (
          <div key={index} className='relative h-full'>
            {project.title === "WhatsInMB" && (
              <span className='absolute top-2 right-2 bg-yellow-600 text-xs text-white px-2 py-1 rounded-full animate-pulse z-10'>
                🚧 in progress
              </span>
            )}

            <div className='bg-[#0d1117] border border-gray-700 h-full flex flex-col justify-between rounded-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-400 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 text-xs text-cyan-300 mb-4'>
                {project.tags.map((tag, i) => (
                  <span key={i} className='bg-cyan-900 px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-4 text-xl'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaGithub className='hover:text-cyan-400 transition' />
                </a>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaExternalLinkAlt className='hover:text-cyan-400 transition' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Client Websites */}
      <h3 className='text-2xl font-semibold mb-8 text-center text-cyan-200'>
        / client websites
      </h3>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto'>
        {clientWebsites.map((site, index) => (
          <a
            key={index}
            href={site.url}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#112240] p-4 rounded-lg flex items-center justify-between border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group'
          >
            <span className='font-medium text-sm md:text-base'>{site.title}</span>
            <FaExternalLinkAlt className='text-xs md:text-sm opacity-50 group-hover:opacity-100 flex-shrink-0 ml-2' />
          </a>
        ))}
      </div>
    </section>
  );
}
