import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onSeeProjects, onDownloadResume }) {
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/40 to-neutral-950/80" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-6 py-28 md:py-40">
        <div className="md:col-span-7 lg:col-span-6">
          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            <span className="block">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="mt-4 text-neutral-300 max-w-xl"
          >
            Your Role or Specialty — One sentence about what you do or believe in.
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onSeeProjects}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              See Projects
            </button>
            <button
              onClick={onDownloadResume}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white px-5 py-2.5 font-medium backdrop-blur hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              Download Résumé
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
