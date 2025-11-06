import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { About, Experience, Projects, Footer } from './components/Sections';

export default function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const downloadResume = () => {
    const url = '/resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const social = {
    github: 'https://github.com/yourname',
    linkedin: 'https://linkedin.com/in/yourname',
    email: 'you@example.com',
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar social={social} />
      <main className="pt-16">
        <Hero onSeeProjects={scrollToProjects} onDownloadResume={downloadResume} />
        <About />
        <Experience />
        <Projects ref={projectsRef} />
        <Skills />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Skills() {
  const groups = [
    { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'Python'] },
    { title: 'Frameworks', items: ['React', 'Next.js', 'Node.js'] },
    { title: 'Tools', items: ['Git', 'Docker', 'AWS'] },
  ];
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {groups.flatMap((g) => [
            <span key={`${g.title}-label`} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm">{g.title}:</span>,
            ...g.items.map((item) => (
              <span key={`${g.title}-${item}`} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-blue-300 border border-blue-400/20 animate-[pulse_1s_ease-out_1]">{item}</span>
            )),
          ])}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
          <p className="text-white font-medium">University Name — Bachelor’s in Field</p>
          <p className="text-neutral-300 mt-1">Graduation Year</p>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const items = [
    { title: 'Award Name', desc: 'for reason or project' },
    { title: 'Competition Name', desc: 'Placement' },
  ];
  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Achievements</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <p className="text-white">{it.title}</p>
              <p className="text-neutral-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
