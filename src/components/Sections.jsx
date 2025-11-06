import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Mail } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
  viewport: { once: true, margin: '-80px' },
});

export function About() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 {...(prefersReduced ? {} : fadeUp())} className="text-2xl font-semibold text-white">
          About
        </motion.h2>
        <motion.p
          {...(prefersReduced ? {} : fadeUp(0.1))}
          className="mt-4 text-neutral-300 max-w-3xl"
        >
          I’m Your Name, a Job Title who loves building things you build. My focus is on focus area. I believe in personal value statement.
        </motion.p>
      </div>
    </section>
  );
}

export function Experience() {
  const entries = [
    {
      company: 'Company Name',
      role: 'Position',
      dates: '2022 — 2024',
      summary: 'Short summary of what you did and impact.',
    },
    {
      company: 'Another Company',
      role: 'Role',
      dates: '2020 — 2022',
      summary: 'Short summary of work and outcomes.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <ol className="mt-8 relative border-l border-white/10 pl-6">
          {entries.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="mb-10"
            >
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-white font-medium">{e.company}</p>
                  <span className="text-neutral-400">—</span>
                  <p className="text-neutral-300">{e.role}</p>
                  <span className="ml-auto text-sm text-neutral-400">{e.dates}</span>
                </div>
                <p className="mt-2 text-neutral-300">{e.summary}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      name: 'Project Alpha',
      desc: 'A web app for X goal.',
      tags: ['React', 'Node', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      name: 'Project Beta',
      desc: 'An AI tool that Y benefit.',
      tags: ['Python', 'FastAPI', 'OpenAI'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:shadow-xl hover:shadow-blue-500/10 transition-[transform,box-shadow] will-change-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <p className="mt-1 text-neutral-300">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a href={p.github} className="p-2 rounded-full hover:bg-white/10" aria-label="GitHub"><Github className="h-4 w-4 text-neutral-300" /></a>
                  <a href={p.demo} className="p-2 rounded-full hover:bg-white/10" aria-label="Live Demo"><ExternalLink className="h-4 w-4 text-neutral-300" /></a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-blue-300 border border-blue-400/20">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const lastUpdated = new Date().toLocaleDateString();
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-neutral-400 text-sm">Last updated {lastUpdated}</p>
        <div className="flex items-center gap-3 text-neutral-300">
          <Mail className="h-4 w-4" />
          <a href="mailto:you@example.com" className="hover:underline">you@example.com</a>
        </div>
      </div>
    </footer>
  );
}
