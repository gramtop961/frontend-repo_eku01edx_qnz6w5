import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState('');

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(''), 1500);
    } catch {}
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {[
              { label: 'Email', value: 'you@example.com' },
              { label: 'Phone', value: '+1 (555) 000-0000' },
              { label: 'GitHub', value: 'https://github.com/yourname' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => copy(item.value, item.label)}
                className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-left hover:bg-white/10 transition-colors"
                aria-label={`Copy ${item.label}`}
              >
                <div>
                  <p className="text-neutral-300 text-sm">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Copy className="h-4 w-4" />
                  <span className="text-sm">{copied === item.label ? 'Copied' : 'Copy'}</span>
                </div>
              </button>
            ))}
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Name</label>
                <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Jane Doe" required />
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="jane@doe.com" required />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-300 mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Say hello..." required />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
