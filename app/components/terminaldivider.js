"use client";

export default function TerminalDivider() {
  return (
    <div className='bg-[#0d1117] text-green-400 font-mono text-sm p-6 mb-20 rounded-md shadow-xl w-full max-w-4xl mx-auto border border-green-500/20'>
      <p className='animate-pulse'>$ sudo hire baran</p>
      <p>// system: evaluating candidate...</p>
      <p>const name = "Baran"</p>
      <p>const location = "Myrtle Beach, SC 🇺🇸"</p>
      <p>
        const skills = ["React", "Next.js", "Node.js", "TailwindCSS", "Prisma",
        "PostgreSQL"]
      </p>
      <p>const experience = ["Simurgh Media", "Tamamliyo Insurance"]</p>
      <p>// status: 💯 Full-Stack Ready</p>
      <p>return "Let’s build something cool together 👨‍💻"</p>
    </div>
  );
}
