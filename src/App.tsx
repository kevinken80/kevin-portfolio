import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App(): JSX.Element {
  const heroImg =
    'https://source.unsplash.com/collection/190727/1600x900?sig=11';
  const projectImgs = [
    'https://source.unsplash.com/collection/190727/1200x800?sig=21',
    'https://source.unsplash.com/collection/190727/1200x800?sig=22',
    'https://source.unsplash.com/collection/190727/1200x800?sig=23',
    'https://source.unsplash.com/collection/190727/1200x800?sig=24',
  ];

  const skills: string[] = [
    'Python',
    'React',
    'JavaScript',
    'HTML & CSS',
    'MySQL & PostgreSQL',
    'Git',
    'API Integration',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Kevin Kennedy</div>
        <div className="flex items-center gap-4">
          <a aria-label="github" href="#" className="p-2 rounded-md hover:bg-slate-100"><Github size={18} /></a>
          <a aria-label="linkedin" href="#" className="p-2 rounded-md hover:bg-slate-100"><Linkedin size={18} /></a>
          <a aria-label="email" href="mailto:kevinken254@gmail.com" className="p-2 rounded-md hover:bg-slate-100"><Mail size={18} /></a>
        </div>
      </nav>

      <header className="relative">
        <div className="absolute inset-0">
          <img src={heroImg} alt="hero" className="w-full h-96 object-cover image-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-3xl text-white">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold">
              Kevin Kennedy
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="mt-4 text-lg md:text-xl">
              Software Developer — building reliable, user-centered web applications. Passionate about data, APIs, and clean code.
            </motion.p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="inline-block bg-white/90 text-primary px-4 py-2 rounded-md font-medium">View Projects</a>
              <a href="#contact" className="inline-block border border-white/40 text-white px-4 py-2 rounded-md font-medium">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">About Me</h2>
            <p className="text-slate-700">Motivated and detail-oriented Software Developer with strong skills in programming, data handling, and digital tools. Capable of performing diverse computer-related tasks such as data annotation, translation, editing, and technical support. Eager to apply analytical thinking and problem-solving abilities in dynamic work environments.</p>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Where I learned</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold">KCA University — Bachelor of Science in Software Development (2021 – 2025)</p>
                <p className="text-sm text-slate-600 mt-2">Attachment/Internship at Kenyatta National Hospital — IT / Software Development Department (May 2025 – Aug 2025). Assisted maintaining internal software systems, data entry, and troubleshooting.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white shadow rounded-lg p-4">
              <img src="https://source.unsplash.com/collection/888146/400x400?sig=9" alt="profile" className="w-full h-64 object-cover rounded-md" />
              <div className="mt-4 text-center">
                <p className="font-semibold">Kevin Kennedy</p>
                <p className="text-sm text-slate-500">Software Developer • Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                <div>
                  <p className="font-medium">{s}</p>
                  <p className="text-xs text-slate-500">Experience level</p>
                </div>
                <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${60 + i * 5}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <a href="#" className="text-sm text-slate-500 underline">See GitHub</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projectImgs.map((src, idx) => (
              <motion.article key={idx} whileHover={{ scale: 1.02 }} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img src={src} alt={`project-${idx}`} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Project Title {idx + 1}</h3>
                  <p className="text-sm text-slate-600 mt-2">Short description of the project, tech used, and what problem it solves.</p>
                  <div className="mt-3 flex gap-2">
                    <a href="#" className="text-sm underline">Live</a>
                    <a href="#" className="text-sm underline">Code</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 bg-gradient-to-r from-white to-slate-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700">Want to work together? Send me a message.</p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-3"><Mail size={16} /> kevinken254@gmail.com</li>
                <li className="flex items-center gap-3"><Github size={16} /> <span className="text-slate-500">(GitHub link - blank)</span></li>
                <li className="flex items-center gap-3"><Linkedin size={16} /> <span className="text-slate-500">(LinkedIn link - blank)</span></li>
              </ul>
            </div>

            <form className="bg-white p-4 rounded-lg shadow-sm">
              <label className="block text-sm">Name <input className="mt-1 block w-full border rounded-md p-2" placeholder="Your name"/></label>
              <label className="block text-sm mt-3">Email <input className="mt-1 block w-full border rounded-md p-2" placeholder="you@example.com"/></label>
              <label className="block text-sm mt-3">Message <textarea className="mt-1 block w-full border rounded-md p-2" rows={4} placeholder="Say hi..."></textarea></label>
              <div className="mt-3">
                <button type="button" className="bg-primary text-white px-4 py-2 rounded-md">Send message</button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kevin Kennedy — Built with React + Tailwind</p>
        </footer>
      </main>
    </div>
  );
}
