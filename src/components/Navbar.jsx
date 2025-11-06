import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ social }) {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('home');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const preferred = mq.matches ? 'dark' : 'light';
    const initial = localStorage.getItem('theme') || preferred;
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            className="font-semibold text-neutral-900 dark:text-white tracking-tight"
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Your Name
            </span>
          </button>
          <ul className="hidden md:flex items-center gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                    active === s.id
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  aria-current={active === s.id ? 'page' : undefined}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {social?.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            </a>
          )}
          {social?.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            </a>
          )}
          {social?.email && (
            <a
              href={`mailto:${social.email}`}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
            </a>
          )}
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="ml-1 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-800" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
